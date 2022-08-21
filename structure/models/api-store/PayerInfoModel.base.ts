/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PayerInfoBase
 * auto generated base class for the model PayerInfoModel.
 */
export const PayerInfoModelBase = ModelBase
  .named('PayerInfo')
  .props({
    __typename: types.optional(types.literal("PayerInfo"), "PayerInfo"),
    _id: types.identifier,
    country_code: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    email: types.union(types.undefined, types.string),
    first_name: types.union(types.undefined, types.string),
    last_name: types.union(types.undefined, types.string),
    payer_id: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PayerInfoModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get country_code() { return this.__attr(`country_code`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get email() { return this.__attr(`email`) }
  get first_name() { return this.__attr(`first_name`) }
  get last_name() { return this.__attr(`last_name`) }
  get payer_id() { return this.__attr(`payer_id`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromPayerInfo() {
  return new PayerInfoModelSelector()
}

export const payerInfoModelPrimitives = selectFromPayerInfo()._id.country_code.createdAt.email.first_name.last_name.payer_id.updatedAt
