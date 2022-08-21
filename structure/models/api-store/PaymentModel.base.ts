/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PayerModel, PayerModelType } from "./PayerModel"
import { PayerModelSelector } from "./PayerModel.base"
import { TransactionsModel, TransactionsModelType } from "./TransactionsModel"
import { TransactionsModelSelector } from "./TransactionsModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * PaymentBase
 * auto generated base class for the model PaymentModel.
 */
export const PaymentModelBase = ModelBase
  .named('Payment')
  .props({
    __typename: types.optional(types.literal("Payment"), "Payment"),
    _id: types.identifier,
    cart: types.union(types.undefined, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    intent: types.union(types.undefined, types.string),
    payer: types.union(types.undefined, types.late((): any => PayerModel)),
    paymentId: types.union(types.undefined, types.string),
    state: types.union(types.undefined, types.string),
    transactions: types.union(types.undefined, types.null, types.array(types.late((): any => TransactionsModel))),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PaymentModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get cart() { return this.__attr(`cart`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get intent() { return this.__attr(`intent`) }
  get paymentId() { return this.__attr(`paymentId`) }
  get state() { return this.__attr(`state`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  payer(builder?: string | PayerModelSelector | ((selector: PayerModelSelector) => PayerModelSelector)) { return this.__child(`payer`, PayerModelSelector, builder) }
  transactions(builder?: string | TransactionsModelSelector | ((selector: TransactionsModelSelector) => TransactionsModelSelector)) { return this.__child(`transactions`, TransactionsModelSelector, builder) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromPayment() {
  return new PaymentModelSelector()
}

export const paymentModelPrimitives = selectFromPayment()._id.cart.createdAt.intent.paymentId.state.updatedAt
