import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import * as schema from '../../generated/schema'


export function updateFutureLottery(
    contribution: BigInt,
    linksAmount: BigInt,
    user: Bytes,
): void {

    let lottery = schema.FutureLottery.load('future-lottery')

    if (lottery == null) {
        lottery = new schema.FutureLottery('future-lottery')
        lottery.bank = contribution
        lottery.linksBank = linksAmount
        lottery.participantIds = [user]
    } else {
        lottery.bank = lottery.bank.plus(contribution)
        lottery.linksBank = lottery.linksBank.plus(linksAmount)
        let pIDs = lottery.participantIds
        if (pIDs.indexOf(user) == -1) {
            pIDs.push(user)
            lottery.participantIds = pIDs
        }
    }
    lottery.save()
}