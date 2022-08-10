/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BetModel, BetModelType } from "./BetModel"
import { BetModelSelector } from "./BetModel.base"
import { RootStoreType } from "./index"


/**
 * JoinChallengeBase
 * auto generated base class for the model JoinChallengeModel.
 */
export const JoinChallengeModelBase = ModelBase
  .named('JoinChallenge')
  .props({
    __typename: types.optional(types.literal("JoinChallenge"), "JoinChallenge"),
    _id: types.identifier,
    betId: types.union(types.undefined, types.array(types.late((): any => BetModel))),
    createdAt: types.union(types.undefined, types.frozen()),
    hash: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
    url: types.union(types.undefined, types.string),
    userId: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class JoinChallengeModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get hash() { return this.__attr(`hash`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get url() { return this.__attr(`url`) }
  get userId() { return this.__attr(`userId`) }
  betId(builder?: string | BetModelSelector | ((selector: BetModelSelector) => BetModelSelector)) { return this.__child(`betId`, BetModelSelector, builder) }
}
export function selectFromJoinChallenge() {
  return new JoinChallengeModelSelector()
}

export const joinChallengeModelPrimitives = selectFromJoinChallenge()._id.createdAt.hash.updatedAt.url.userId
