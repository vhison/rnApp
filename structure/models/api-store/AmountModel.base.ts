/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AmountBase
 * auto generated base class for the model AmountModel.
 */
export const AmountModelBase = ModelBase
  .named('Amount')
  .props({
    __typename: types.optional(types.literal("Amount"), "Amount"),
    _id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    currency: types.union(types.undefined, types.string),
    total: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AmountModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get currency() { return this.__attr(`currency`) }
  get total() { return this.__attr(`total`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromAmount() {
  return new AmountModelSelector()
}

export const amountModelPrimitives = selectFromAmount()._id.createdAt.currency.total.updatedAt
