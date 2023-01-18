import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import * as schema from '../../generated/schema'


export function updateUser(
    address: Bytes,
    links: BigInt,
    contributed: BigInt,
    actualContributed: BigInt,
    contributedToLottery: BigInt,
    bidId: Bytes,
    gifted: boolean,
): void {

    // add new user or incresase contributed if already participated
    let user = schema.User.load(address)
    if (user == null) {
        let user = new schema.User(address)

        // info about lottery
        user.address = address
        user.contributedToCurrentLottery = gifted ? BigInt.zero() : contributedToLottery
        user.linksToCurrentLottery = gifted ? BigInt.zero() : links
        user.lottery = 'future-lottery'

        // info about user
        user.contributed = contributed
        user.actualContributed = actualContributed
        user.openLinks = links
        user.linksCreated = links
        user.earned = BigInt.zero()
        user.bidsIds = [bidId]
        user.save()
    } else {
        if (!gifted) {
            user.contributedToCurrentLottery = user.contributedToCurrentLottery.plus(contributedToLottery)
            user.linksToCurrentLottery = user.linksToCurrentLottery.plus(links)
        }
        user.contributed = user.contributed.plus(contributed)
        user.actualContributed = user.actualContributed.plus(actualContributed)
        user.openLinks = user.openLinks.plus(links)
        user.linksCreated = user.linksCreated.plus(links)

        let usersBids = user.bidsIds
        usersBids.push(bidId)
        user.bidsIds = usersBids
        user.save()
    }
}