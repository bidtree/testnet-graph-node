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

export class Coffeed extends ethereum.Event {
  get params(): Coffeed__Params {
    return new Coffeed__Params(this);
  }
}

export class Coffeed__Params {
  _event: Coffeed;

  constructor(event: Coffeed) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get refadr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get refCoffeeNum(): BigInt {
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

  get coffeeman(): BigInt {
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

export class Widthdraw extends ethereum.Event {
  get params(): Widthdraw__Params {
    return new Widthdraw__Params(this);
  }
}

export class Widthdraw__Params {
  _event: Widthdraw;

  constructor(event: Widthdraw) {
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

export class Bidtree__getCoffeeResultValue0Struct extends ethereum.Tuple {
  get _price(): BigInt {
    return this[0].toBigInt();
  }

  get _to_fund(): BigInt {
    return this[1].toBigInt();
  }

  get _btc_rate(): BigInt {
    return this[2].toBigInt();
  }

  get _coffeemans_left(): BigInt {
    return this[3].toBigInt();
  }

  get _coffeemans_closed(): BigInt {
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

  getActiveCoffeemans(account: Address, coffee: BigInt): BigInt {
    let result = super.call(
      "getActiveCoffeemans",
      "getActiveCoffeemans(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(coffee)
      ]
    );

    return result[0].toBigInt();
  }

  try_getActiveCoffeemans(
    account: Address,
    coffee: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getActiveCoffeemans",
      "getActiveCoffeemans(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(coffee)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCoffee(
    account: Address,
    num: BigInt
  ): Bidtree__getCoffeeResultValue0Struct {
    let result = super.call(
      "getCoffee",
      "getCoffee(address,uint256):((uint128,uint128,uint128,uint128,uint128,bool))",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(num)
      ]
    );

    return changetype<Bidtree__getCoffeeResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getCoffee(
    account: Address,
    num: BigInt
  ): ethereum.CallResult<Bidtree__getCoffeeResultValue0Struct> {
    let result = super.tryCall(
      "getCoffee",
      "getCoffee(address,uint256):((uint128,uint128,uint128,uint128,uint128,bool))",
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
      changetype<Bidtree__getCoffeeResultValue0Struct>(value[0].toTuple())
    );
  }

  getCountCoffee(account: Address): BigInt {
    let result = super.call(
      "getCountCoffee",
      "getCountCoffee(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getCountCoffee(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCountCoffee",
      "getCountCoffee(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get percentageShop(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get percentageLottery(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get percentageCoffeeman(): BigInt {
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

export class BuyCoffeeCall extends ethereum.Call {
  get inputs(): BuyCoffeeCall__Inputs {
    return new BuyCoffeeCall__Inputs(this);
  }

  get outputs(): BuyCoffeeCall__Outputs {
    return new BuyCoffeeCall__Outputs(this);
  }
}

export class BuyCoffeeCall__Inputs {
  _call: BuyCoffeeCall;

  constructor(call: BuyCoffeeCall) {
    this._call = call;
  }

  get multi(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get base(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get coffeeman(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get coffee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class BuyCoffeeCall__Outputs {
  _call: BuyCoffeeCall;

  constructor(call: BuyCoffeeCall) {
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

export class OffsetCoffeeBeanCall extends ethereum.Call {
  get inputs(): OffsetCoffeeBeanCall__Inputs {
    return new OffsetCoffeeBeanCall__Inputs(this);
  }

  get outputs(): OffsetCoffeeBeanCall__Outputs {
    return new OffsetCoffeeBeanCall__Outputs(this);
  }
}

export class OffsetCoffeeBeanCall__Inputs {
  _call: OffsetCoffeeBeanCall;

  constructor(call: OffsetCoffeeBeanCall) {
    this._call = call;
  }

  get number(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class OffsetCoffeeBeanCall__Outputs {
  _call: OffsetCoffeeBeanCall;

  constructor(call: OffsetCoffeeBeanCall) {
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

export class WithdrawLotteryCall extends ethereum.Call {
  get inputs(): WithdrawLotteryCall__Inputs {
    return new WithdrawLotteryCall__Inputs(this);
  }

  get outputs(): WithdrawLotteryCall__Outputs {
    return new WithdrawLotteryCall__Outputs(this);
  }
}

export class WithdrawLotteryCall__Inputs {
  _call: WithdrawLotteryCall;

  constructor(call: WithdrawLotteryCall) {
    this._call = call;
  }
}

export class WithdrawLotteryCall__Outputs {
  _call: WithdrawLotteryCall;

  constructor(call: WithdrawLotteryCall) {
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

export class WithdrawShopCall extends ethereum.Call {
  get inputs(): WithdrawShopCall__Inputs {
    return new WithdrawShopCall__Inputs(this);
  }

  get outputs(): WithdrawShopCall__Outputs {
    return new WithdrawShopCall__Outputs(this);
  }
}

export class WithdrawShopCall__Inputs {
  _call: WithdrawShopCall;

  constructor(call: WithdrawShopCall) {
    this._call = call;
  }
}

export class WithdrawShopCall__Outputs {
  _call: WithdrawShopCall;

  constructor(call: WithdrawShopCall) {
    this._call = call;
  }
}
