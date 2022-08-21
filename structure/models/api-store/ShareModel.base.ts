/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BetModel, BetModelType } from "./BetModel"
import { BetModelSelector } from "./BetModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * ShareBase
 * auto generated base class for the model ShareModel.
 */
export const ShareModelBase = ModelBase
  .named('Share')
  .props({
    __typename: types.optional(types.literal("Share"), "Share"),
    _id: types.identifier,
    betId: types.union(types.undefined, types.late((): any => BetModel)),
    createdAt: types.union(types.undefined, types.frozen()),
    hash: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
    url: types.union(types.undefined, types.string),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ShareModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get hash() { return this.__attr(`hash`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get url() { return this.__attr(`url`) }
  betId(builder?: string | BetModelSelector | ((selector: BetModelSelector) => BetModelSelector)) { return this.__child(`betId`, BetModelSelector, builder) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromShare() {
  return new ShareModelSelector()
}

export const shareModelPrimitives = selectFromShare()._id.createdAt.hash.updatedAt.url
