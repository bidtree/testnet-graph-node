import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import * as schema from '../../generated/schema'


export function getUserBidNumber(address: Bytes): BigInt {
    const user = schema.User.load(address)

    if (user == null) return BigInt.zero()
    else return BigInt.fromI32(user.bidsIds.length)
}