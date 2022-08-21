/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PayerInfoModel, PayerInfoModelType } from "./PayerInfoModel"
import { PayerInfoModelSelector } from "./PayerInfoModel.base"
import { RootStoreType } from "./index"


/**
 * PayerBase
 * auto generated base class for the model PayerModel.
 */
export const PayerModelBase = ModelBase
  .named('Payer')
  .props({
    __typename: types.optional(types.literal("Payer"), "Payer"),
    _id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    payer_info: types.union(types.undefined, types.late((): any => PayerInfoModel)),
    payment_method: types.union(types.undefined, types.string),
    status: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PayerModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get payment_method() { return this.__attr(`payment_method`) }
  get status() { return this.__attr(`status`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  payer_info(builder?: string | PayerInfoModelSelector | ((selector: PayerInfoModelSelector) => PayerInfoModelSelector)) { return this.__child(`payer_info`, PayerInfoModelSelector, builder) }
}
export function selectFromPayer() {
  return new PayerModelSelector()
}

export const payerModelPrimitives = selectFromPayer()._id.createdAt.payment_method.status.updatedAt
