// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Contributed extends ethereum.Event {
  get params(): Contributed__Params {
    return new Contributed__Params(this);
  }
}

export class Contributed__Params {
  _event: Contributed;

  constructor(event: Contributed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get refadr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get refBidNum(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get refund(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get links(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get referral(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get lottery(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get fund(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get btcRate(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class Lottery extends ethereum.Event {
  get params(): Lottery__Params {
    return new Lottery__Params(this);
  }
}

export class Lottery__Params {
  _event: Lottery;

  constructor(event: Lottery) {
    this._event = event;
  }

  get num(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get bank(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Offset extends ethereum.Event {
  get params(): Offset__Params {
    return new Offset__Params(this);
  }
}

export class Offset__Params {
  _event: Offset;

  constructor(event: Offset) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get number(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Bidtree__getBidResultValue0Struct extends ethereum.Tuple {
  get _price(): BigInt {
    return this[0].toBigInt();
  }

  get _to_fund(): BigInt {
    return this[1].toBigInt();
  }

  get _btc_rate(): BigInt {
    return this[2].toBigInt();
  }

  get _referrals_left(): BigInt {
    return this[3].toBigInt();
  }

  get _referrals_closed(): BigInt {
    return this[4].toBigInt();
  }

  get _gifted(): boolean {
    return this[5].toBoolean();
  }
}

export class Bidtree extends ethereum.SmartContract {
  static bind(address: Address): Bidtree {
    return new Bidtree("Bidtree", address);
  }

  getActiveReferrals(account: Address, bid: BigInt): BigInt {
    let result = super.call(
      "getActiveReferrals",
      "getActiveReferrals(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(bid)
      ]
    );

    return result[0].toBigInt();
  }

  try_getActiveReferrals(
    account: Address,
    bid: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getActiveReferrals",
      "getActiveReferrals(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(bid)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAmountFund(): BigInt {
    let result = super.call("getAmountFund", "getAmountFund():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getAmountFund(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAmountFund",
      "getAmountFund():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAmountLottery(): BigInt {
    let result = super.call(
      "getAmountLottery",
      "getAmountLottery():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getAmountLottery(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAmountLottery",
      "getAmountLottery():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAmountMarketing(): BigInt {
    let result = super.call(
      "getAmountMarketing",
      "getAmountMarketing():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getAmountMarketing(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAmountMarketing",
      "getAmountMarketing():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAmountOwner(): BigInt {
    let result = super.call("getAmountOwner", "getAmountOwner():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getAmountOwner(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAmountOwner",
      "getAmountOwner():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getBid(account: Address, num: BigInt): Bidtree__getBidResultValue0Struct {
    let result = super.call(
      "getBid",
      "getBid(address,uint256):((uint128,uint128,uint128,uint128,uint128,bool))",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(num)
      ]
    );

    return changetype<Bidtree__getBidResultValue0Struct>(result[0].toTuple());
  }

  try_getBid(
    account: Address,
    num: BigInt
  ): ethereum.CallResult<Bidtree__getBidResultValue0Struct> {
    let result = super.tryCall(
      "getBid",
      "getBid(address,uint256):((uint128,uint128,uint128,uint128,uint128,bool))",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(num)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Bidtree__getBidResultValue0Struct>(value[0].toTuple())
    );
  }

  getCount(): BigInt {
    let result = super.call("getCount", "getCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getCount", "getCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCountBid(account: Address): BigInt {
    let result = super.call("getCountBid", "getCountBid(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_getCountBid(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCountBid",
      "getCountBid(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getDepositAmount(): BigInt {
    let result = super.call(
      "getDepositAmount",
      "getDepositAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getDepositAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getDepositAmount",
      "getDepositAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getFinalizeStatus(): boolean {
    let result = super.call(
      "getFinalizeStatus",
      "getFinalizeStatus():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_getFinalizeStatus(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getFinalizeStatus",
      "getFinalizeStatus():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getNumSales(): BigInt {
    let result = super.call("getNumSales", "getNumSales():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getNumSales(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getNumSales", "getNumSales():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPercentageFund(): BigInt {
    let result = super.call(
      "getPercentageFund",
      "getPercentageFund():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPercentageFund(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPercentageFund",
      "getPercentageFund():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPercentageLottery(): BigInt {
    let result = super.call(
      "getPercentageLottery",
      "getPercentageLottery():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPercentageLottery(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPercentageLottery",
      "getPercentageLottery():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPercentageMarketing(): BigInt {
    let result = super.call(
      "getPercentageMarketing",
      "getPercentageMarketing():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPercentageMarketing(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPercentageMarketing",
      "getPercentageMarketing():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPercentageOwner(): BigInt {
    let result = super.call(
      "getPercentageOwner",
      "getPercentageOwner():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPercentageOwner(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPercentageOwner",
      "getPercentageOwner():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPercentageReferral(): BigInt {
    let result = super.call(
      "getPercentageReferral",
      "getPercentageReferral():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPercentageReferral(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPercentageReferral",
      "getPercentageReferral():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRandomNum(): BigInt {
    let result = super.call("getRandomNum", "getRandomNum():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getRandomNum(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getRandomNum", "getRandomNum():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getWaitingTime(): BigInt {
    let result = super.call("getWaitingTime", "getWaitingTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getWaitingTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getWaitingTime",
      "getWaitingTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  timer(): BigInt {
    let result = super.call("timer", "timer():(uint256)", []);

    return result[0].toBigInt();
  }

  try_timer(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("timer", "timer():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get usd(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get bitcoin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get waitingTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get depositAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get percentageOwner(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get percentageMarketing(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get percentageLottery(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get percentageReferral(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get percentageFund(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get numDiscounts(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ContributeCall extends ethereum.Call {
  get inputs(): ContributeCall__Inputs {
    return new ContributeCall__Inputs(this);
  }

  get outputs(): ContributeCall__Outputs {
    return new ContributeCall__Outputs(this);
  }
}

export class ContributeCall__Inputs {
  _call: ContributeCall;

  constructor(call: ContributeCall) {
    this._call = call;
  }

  get multi(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get base(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get referral(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get bid(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ContributeCall__Outputs {
  _call: ContributeCall;

  constructor(call: ContributeCall) {
    this._call = call;
  }
}

export class FinalizeCall extends ethereum.Call {
  get inputs(): FinalizeCall__Inputs {
    return new FinalizeCall__Inputs(this);
  }

  get outputs(): FinalizeCall__Outputs {
    return new FinalizeCall__Outputs(this);
  }
}

export class FinalizeCall__Inputs {
  _call: FinalizeCall;

  constructor(call: FinalizeCall) {
    this._call = call;
  }
}

export class FinalizeCall__Outputs {
  _call: FinalizeCall;

  constructor(call: FinalizeCall) {
    this._call = call;
  }
}

export class GiftContributeCall extends ethereum.Call {
  get inputs(): GiftContributeCall__Inputs {
    return new GiftContributeCall__Inputs(this);
  }

  get outputs(): GiftContributeCall__Outputs {
    return new GiftContributeCall__Outputs(this);
  }
}

export class GiftContributeCall__Inputs {
  _call: GiftContributeCall;

  constructor(call: GiftContributeCall) {
    this._call = call;
  }

  get multi(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GiftContributeCall__Outputs {
  _call: GiftContributeCall;

  constructor(call: GiftContributeCall) {
    this._call = call;
  }
}

export class OffsetContributionCall extends ethereum.Call {
  get inputs(): OffsetContributionCall__Inputs {
    return new OffsetContributionCall__Inputs(this);
  }

  get outputs(): OffsetContributionCall__Outputs {
    return new OffsetContributionCall__Outputs(this);
  }
}

export class OffsetContributionCall__Inputs {
  _call: OffsetContributionCall;

  constructor(call: OffsetContributionCall) {
    this._call = call;
  }

  get number(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class OffsetContributionCall__Outputs {
  _call: OffsetContributionCall;

  constructor(call: OffsetContributionCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDepositAmountCall extends ethereum.Call {
  get inputs(): SetDepositAmountCall__Inputs {
    return new SetDepositAmountCall__Inputs(this);
  }

  get outputs(): SetDepositAmountCall__Outputs {
    return new SetDepositAmountCall__Outputs(this);
  }
}

export class SetDepositAmountCall__Inputs {
  _call: SetDepositAmountCall;

  constructor(call: SetDepositAmountCall) {
    this._call = call;
  }

  get depositAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDepositAmountCall__Outputs {
  _call: SetDepositAmountCall;

  constructor(call: SetDepositAmountCall) {
    this._call = call;
  }
}

export class SetPercentageFundCall extends ethereum.Call {
  get inputs(): SetPercentageFundCall__Inputs {
    return new SetPercentageFundCall__Inputs(this);
  }

  get outputs(): SetPercentageFundCall__Outputs {
    return new SetPercentageFundCall__Outputs(this);
  }
}

export class SetPercentageFundCall__Inputs {
  _call: SetPercentageFundCall;

  constructor(call: SetPercentageFundCall) {
    this._call = call;
  }

  get percentageFund(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPercentageFundCall__Outputs {
  _call: SetPercentageFundCall;

  constructor(call: SetPercentageFundCall) {
    this._call = call;
  }
}

export class SetPercentageLotteryCall extends ethereum.Call {
  get inputs(): SetPercentageLotteryCall__Inputs {
    return new SetPercentageLotteryCall__Inputs(this);
  }

  get outputs(): SetPercentageLotteryCall__Outputs {
    return new SetPercentageLotteryCall__Outputs(this);
  }
}

export class SetPercentageLotteryCall__Inputs {
  _call: SetPercentageLotteryCall;

  constructor(call: SetPercentageLotteryCall) {
    this._call = call;
  }

  get percentageLottery(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPercentageLotteryCall__Outputs {
  _call: SetPercentageLotteryCall;

  constructor(call: SetPercentageLotteryCall) {
    this._call = call;
  }
}

export class SetPercentageMarketingCall extends ethereum.Call {
  get inputs(): SetPercentageMarketingCall__Inputs {
    return new SetPercentageMarketingCall__Inputs(this);
  }

  get outputs(): SetPercentageMarketingCall__Outputs {
    return new SetPercentageMarketingCall__Outputs(this);
  }
}

export class SetPercentageMarketingCall__Inputs {
  _call: SetPercentageMarketingCall;

  constructor(call: SetPercentageMarketingCall) {
    this._call = call;
  }

  get percentageMarketing(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPercentageMarketingCall__Outputs {
  _call: SetPercentageMarketingCall;

  constructor(call: SetPercentageMarketingCall) {
    this._call = call;
  }
}

export class SetPercentageOwnerCall extends ethereum.Call {
  get inputs(): SetPercentageOwnerCall__Inputs {
    return new SetPercentageOwnerCall__Inputs(this);
  }

  get outputs(): SetPercentageOwnerCall__Outputs {
    return new SetPercentageOwnerCall__Outputs(this);
  }
}

export class SetPercentageOwnerCall__Inputs {
  _call: SetPercentageOwnerCall;

  constructor(call: SetPercentageOwnerCall) {
    this._call = call;
  }

  get percentageOwner(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPercentageOwnerCall__Outputs {
  _call: SetPercentageOwnerCall;

  constructor(call: SetPercentageOwnerCall) {
    this._call = call;
  }
}

export class SetPercentageReferralCall extends ethereum.Call {
  get inputs(): SetPercentageReferralCall__Inputs {
    return new SetPercentageReferralCall__Inputs(this);
  }

  get outputs(): SetPercentageReferralCall__Outputs {
    return new SetPercentageReferralCall__Outputs(this);
  }
}

export class SetPercentageReferralCall__Inputs {
  _call: SetPercentageReferralCall;

  constructor(call: SetPercentageReferralCall) {
    this._call = call;
  }

  get percentageReferral(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetPercentageReferralCall__Outputs {
  _call: SetPercentageReferralCall;

  constructor(call: SetPercentageReferralCall) {
    this._call = call;
  }
}

export class SetWaitingTimeCall extends ethereum.Call {
  get inputs(): SetWaitingTimeCall__Inputs {
    return new SetWaitingTimeCall__Inputs(this);
  }

  get outputs(): SetWaitingTimeCall__Outputs {
    return new SetWaitingTimeCall__Outputs(this);
  }
}

export class SetWaitingTimeCall__Inputs {
  _call: SetWaitingTimeCall;

  constructor(call: SetWaitingTimeCall) {
    this._call = call;
  }

  get waitingTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetWaitingTimeCall__Outputs {
  _call: SetWaitingTimeCall;

  constructor(call: SetWaitingTimeCall) {
    this._call = call;
  }
}

export class StartLotteryCall extends ethereum.Call {
  get inputs(): StartLotteryCall__Inputs {
    return new StartLotteryCall__Inputs(this);
  }

  get outputs(): StartLotteryCall__Outputs {
    return new StartLotteryCall__Outputs(this);
  }
}

export class StartLotteryCall__Inputs {
  _call: StartLotteryCall;

  constructor(call: StartLotteryCall) {
    this._call = call;
  }
}

export class StartLotteryCall__Outputs {
  _call: StartLotteryCall;

  constructor(call: StartLotteryCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawAllCall extends ethereum.Call {
  get inputs(): WithdrawAllCall__Inputs {
    return new WithdrawAllCall__Inputs(this);
  }

  get outputs(): WithdrawAllCall__Outputs {
    return new WithdrawAllCall__Outputs(this);
  }
}

export class WithdrawAllCall__Inputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawAllCall__Outputs {
  _call: WithdrawAllCall;

  constructor(call: WithdrawAllCall) {
    this._call = call;
  }
}

export class WithdrawMarketingCall extends ethereum.Call {
  get inputs(): WithdrawMarketingCall__Inputs {
    return new WithdrawMarketingCall__Inputs(this);
  }

  get outputs(): WithdrawMarketingCall__Outputs {
    return new WithdrawMarketingCall__Outputs(this);
  }
}

export class WithdrawMarketingCall__Inputs {
  _call: WithdrawMarketingCall;

  constructor(call: WithdrawMarketingCall) {
    this._call = call;
  }
}

export class WithdrawMarketingCall__Outputs {
  _call: WithdrawMarketingCall;

  constructor(call: WithdrawMarketingCall) {
    this._call = call;
  }
}

export class WithdrawOwnerCall extends ethereum.Call {
  get inputs(): WithdrawOwnerCall__Inputs {
    return new WithdrawOwnerCall__Inputs(this);
  }

  get outputs(): WithdrawOwnerCall__Outputs {
    return new WithdrawOwnerCall__Outputs(this);
  }
}

export class WithdrawOwnerCall__Inputs {
  _call: WithdrawOwnerCall;

  constructor(call: WithdrawOwnerCall) {
    this._call = call;
  }
}

export class WithdrawOwnerCall__Outputs {
  _call: WithdrawOwnerCall;

  constructor(call: WithdrawOwnerCall) {
    this._call = call;
  }
}
