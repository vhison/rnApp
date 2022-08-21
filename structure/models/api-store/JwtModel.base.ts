/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * JwtBase
 * auto generated base class for the model JwtModel.
 */
export const JwtModelBase = ModelBase
  .named('Jwt')
  .props({
    __typename: types.optional(types.literal("JWT"), "JWT"),
    _id: types.identifier,
    accessToken: types.union(types.undefined, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    refreshToken: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class JwtModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get accessToken() { return this.__attr(`accessToken`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get refreshToken() { return this.__attr(`refreshToken`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromJwt() {
  return new JwtModelSelector()
}

export const jwtModelPrimitives = selectFromJwt()._id.accessToken.createdAt.refreshToken.updatedAt
