/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PaymentLinksBase
 * auto generated base class for the model PaymentLinksModel.
 */
export const PaymentLinksModelBase = ModelBase
  .named('PaymentLinks')
  .props({
    __typename: types.optional(types.literal("PaymentLinks"), "PaymentLinks"),
    _id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    href: types.union(types.undefined, types.string),
    method: types.union(types.undefined, types.string),
    rel: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PaymentLinksModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get href() { return this.__attr(`href`) }
  get method() { return this.__attr(`method`) }
  get rel() { return this.__attr(`rel`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromPaymentLinks() {
  return new PaymentLinksModelSelector()
}

export const paymentLinksModelPrimitives = selectFromPaymentLinks()._id.createdAt.href.method.rel.updatedAt
