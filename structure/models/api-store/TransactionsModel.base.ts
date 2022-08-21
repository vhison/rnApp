/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AmountModel, AmountModelType } from "./AmountModel"
import { AmountModelSelector } from "./AmountModel.base"
import { RootStoreType } from "./index"


/**
 * TransactionsBase
 * auto generated base class for the model TransactionsModel.
 */
export const TransactionsModelBase = ModelBase
  .named('Transactions')
  .props({
    __typename: types.optional(types.literal("Transactions"), "Transactions"),
    _id: types.identifier,
    amount: types.union(types.undefined, types.null, types.late((): any => AmountModel)),
    createdAt: types.union(types.undefined, types.frozen()),
    payment_method: types.union(types.undefined, types.string),
    status: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TransactionsModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get payment_method() { return this.__attr(`payment_method`) }
  get status() { return this.__attr(`status`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  amount(builder?: string | AmountModelSelector | ((selector: AmountModelSelector) => AmountModelSelector)) { return this.__child(`amount`, AmountModelSelector, builder) }
}
export function selectFromTransactions() {
  return new TransactionsModelSelector()
}

export const transactionsModelPrimitives = selectFromTransactions()._id.createdAt.payment_method.status.updatedAt
