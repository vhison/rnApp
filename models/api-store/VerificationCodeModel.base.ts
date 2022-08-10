/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VerificationCodeBase
 * auto generated base class for the model VerificationCodeModel.
 */
export const VerificationCodeModelBase = ModelBase
  .named('VerificationCode')
  .props({
    __typename: types.optional(types.literal("VerificationCode"), "VerificationCode"),
    _id: types.identifier,
    code: types.union(types.undefined, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    phoneNumber: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VerificationCodeModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get code() { return this.__attr(`code`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get phoneNumber() { return this.__attr(`phoneNumber`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromVerificationCode() {
  return new VerificationCodeModelSelector()
}

export const verificationCodeModelPrimitives = selectFromVerificationCode()._id.code.createdAt.phoneNumber.updatedAt
