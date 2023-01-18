import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts'
import * as schema from '../../generated/schema'

// TODO: CHANGE THIS VALUE TO ACTUAL
export const TOTAL_DISCOUNTS = 100

export function updateKpi(
    userAddress: Bytes,
    contributed: BigInt,
    actualContributed: BigInt,
    cashback: BigInt,
    links: BigInt,
    toReferral: BigInt,
    toLottery: BigInt,
    toFund: BigInt,
    referralAddress: Bytes,
    forSale: boolean,
    gifted: boolean,
): void {
    // increase KPIs or initialize
    let kpi = schema.KPI.load('kpi')
    if (kpi == null) {
        kpi = new schema.KPI('kpi')
        kpi.usersIds = [userAddress]
        kpi.totalUsers = BigInt.fromI32(1)
        kpi.totalContributed = contributed
        kpi.totalActualContributed = actualContributed
        kpi.totalEarned = BigInt.zero() // because first bid is always root
        kpi.totalLottery = toLottery
        kpi.totalToFund = toFund
        kpi.totalFromFund = BigInt.zero()
        kpi.totalRefunded = BigInt.zero()
        kpi.totalWon = BigInt.zero()
        kpi.totalCashback = cashback
        kpi.totalDiscounts = BigInt.fromI32(1)
        if (gifted == true) {
            kpi.totalLinksGifted = BigInt.fromI32(1)
            kpi.totalLinksCreated = BigInt.zero()
        } else {
            kpi.totalLinksGifted = BigInt.zero()
            kpi.totalLinksCreated = links
        }
        kpi.save()
    } else {
        let userIds = kpi.usersIds
        if (userIds.indexOf(userAddress) == -1) {
            userIds.push(userAddress)
            kpi.usersIds = userIds
            kpi.totalUsers = kpi.totalUsers.plus(BigInt.fromI32(1))
        }

        kpi.totalContributed = kpi.totalContributed.plus(contributed)
        kpi.totalActualContributed = kpi.totalActualContributed.plus(actualContributed)
        kpi.totalCashback = kpi.totalCashback.plus(cashback)

        if (forSale && kpi.totalDiscounts.lt(BigInt.fromI32(TOTAL_DISCOUNTS)))
            kpi.totalDiscounts = kpi.totalDiscounts.plus(BigInt.fromI32(1))

        if (referralAddress.notEqual(Address.zero())) {
            kpi.totalEarned = kpi.totalEarned.plus(toReferral)
        }

        if (gifted == true) {
            kpi.totalLinksGifted = kpi.totalLinksGifted.plus(links)
        } else {
            kpi.totalLinksCreated = kpi.totalLinksCreated.plus(links)
        }

        kpi.totalLottery = kpi.totalLottery.plus(toLottery)
        kpi.totalToFund = kpi.totalToFund.plus(toFund)
        kpi.save()
    }

}