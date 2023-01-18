import { Contributed, Lottery, Offset } from '../generated/Bidtree/Bidtree'
import * as schema from '../generated/schema'
import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts'
import { updateFutureLottery } from './services/lottery-service'
import { updateUser } from './services/user-service'
import { TOTAL_DISCOUNTS, updateKpi } from './services/kpi-service'
import { getUserBidNumber } from './services/contribution-service'


export function handleContributed(event: Contributed): void {
    // initialize event params
    const bidId = event.transaction.hash
    const contributorAddress = event.params.user
    const bidNum = getUserBidNumber(contributorAddress)
    const referralAddress = event.params.refadr
    const referralBidNum = event.params.refBidNum
    const cost = event.params.amount
    const cashback = event.params.refund
    const actualCost = event.params.amount.minus(event.params.refund)
    const links = event.params.links
    const toReferral = event.params.referral
    const toLottery = event.params.lottery
    const toFund = event.params.fund
    const btcRate = event.params.btcRate
    let forSale = false
    let gifted = false
    if (cost == BigInt.zero()) {
        gifted = true
    }

    let kpi = schema.KPI.load('kpi')
    // if this is first bid || there is no referral and discounts haven't ended.
    if (kpi == null ||
        (kpi.totalDiscounts.lt(BigInt.fromI32(TOTAL_DISCOUNTS)) &&
            referralAddress.equals(Address.zero())) && !gifted) {
        forSale = true
    }

    let contribute = new schema.Contribution(bidId)
    contribute.timestamp = event.block.timestamp
    contribute.user = contributorAddress
    contribute.contributor = contributorAddress
    contribute.bidNum = bidNum
    contribute.referralAddress = referralAddress
    contribute.referralBidNum = referralBidNum
    contribute.cost = cost
    contribute.cashback = cashback
    contribute.actualCost = actualCost
    contribute.links = links
    contribute.linksLeft = links
    contribute.toReferral = toReferral
    contribute.toLottery = toLottery
    contribute.toFund = toFund
    contribute.btcRate = btcRate
    contribute.refunded = false
    contribute.forSale = forSale
    contribute.gifted = gifted
    contribute.save()

    // increase future lottery bank and add user as participant
    if (gifted == false) {
        updateFutureLottery(
            toLottery,
            links,
            contributorAddress,
        )

    }

    // add new user or update current if already existed
    updateUser(
        contributorAddress,
        links,
        cost,
        actualCost,
        toLottery,
        bidId,
        gifted
    )

    // get referral if exists
    if (referralAddress.notEqual(Address.zero())) {
        let referral = schema.User.load(referralAddress)
        // if there is referral (he has to be there, just ts check)
        if (referral != null) {
            // increase earnings and decrease openLinks
            referral.openLinks = referral.openLinks.minus(BigInt.fromI32(1))
            referral.earned = referral.earned.plus(toReferral)
            referral.save()

            // get referral bid
            const refBidsIds = referral.bidsIds
            const bid = schema.Contribution.load(refBidsIds[referralBidNum.toI32()])
            if (bid != null) {
                bid.linksLeft = bid.linksLeft.minus(BigInt.fromI32(1))
                bid.save()
            }
        }
    }

    // increase KPIs
    updateKpi(
        contributorAddress,
        cost,
        actualCost,
        cashback,
        links,
        toReferral,
        toLottery,
        toFund,
        referralAddress,
        forSale,
        gifted
    )
}

export function handleOffset(event: Offset): void {
    let refund = new schema.Refund(event.transaction.hash.toHex())
    refund.timestamp = event.block.timestamp
    refund.user = event.params.user
    refund.bidNumber = event.params.number
    refund.amountRefunded = event.params.amount
    refund.fromBank = event.params.price

    let kpi = schema.KPI.load('kpi')
    if (kpi != null) {
        kpi.totalFromFund = kpi.totalFromFund.plus(event.params.price)
        kpi.totalRefunded = kpi.totalRefunded.plus(event.params.amount)
        kpi.save()
    }

    let user = schema.User.load(event.params.user)
    if (user != null) {
        let bidId = user.bidsIds[event.params.number.toI32()]
        if (bidId) {
            refund.bidId = bidId
        } else {
            refund.bidId = Bytes.empty()
        }
        let bid = schema.Contribution.load(bidId)
        if (bid != null) {
            bid.refunded = true
            bid.linksLeft = BigInt.zero()
            bid.save()
        }
    }
    refund.save()
}

export function handleLottery(event: Lottery): void {
    let lottery = new schema.Lottery(event.transaction.hash.toHex())
    lottery.timestamp = event.block.timestamp
    lottery.number = event.params.num
    lottery.winner = event.params.user
    lottery.bank = event.params.bank
    lottery.save()

    // set future lottery bank to 0
    // set participants' contributedToCurrentLottery to 0
    let futureLottery = schema.FutureLottery.load('future-lottery')
    if (futureLottery) {
        futureLottery.bank = BigInt.zero()
        futureLottery.linksBank = BigInt.zero()
        let users = futureLottery.participantIds
        for (let i = 0; i < users.length; i++) {
            let user = schema.User.load(users[i])
            if (user) {
                user.contributedToCurrentLottery = BigInt.zero()
                user.linksToCurrentLottery = BigInt.zero()
                user.save()
            }
        }
        futureLottery.save()
    }

    let kpi = schema.KPI.load('kpi')
    if (kpi != null) {
        kpi.totalWon = kpi.totalWon.plus(event.params.bank)
        kpi.save()
    }
}

