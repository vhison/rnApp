/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BetModel, BetModelType } from "./BetModel"
import { BetModelSelector } from "./BetModel.base"
import { RideModel, RideModelType } from "./RideModel"
import { RideModelSelector } from "./RideModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * AcceptChallengesBase
 * auto generated base class for the model AcceptChallengesModel.
 */
export const AcceptChallengesModelBase = ModelBase
  .named('AcceptChallenges')
  .props({
    __typename: types.optional(types.literal("AcceptChallenges"), "AcceptChallenges"),
    _id: types.identifier,
    betId: types.union(types.undefined, types.late((): any => BetModel)),
    createdAt: types.union(types.undefined, types.frozen()),
    hash: types.union(types.undefined, types.string),
    rideId: types.union(types.undefined, types.late((): any => RideModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AcceptChallengesModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get hash() { return this.__attr(`hash`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  betId(builder?: string | BetModelSelector | ((selector: BetModelSelector) => BetModelSelector)) { return this.__child(`betId`, BetModelSelector, builder) }
  rideId(builder?: string | RideModelSelector | ((selector: RideModelSelector) => RideModelSelector)) { return this.__child(`rideId`, RideModelSelector, builder) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromAcceptChallenges() {
  return new AcceptChallengesModelSelector()
}

export const acceptChallengesModelPrimitives = selectFromAcceptChallenges()._id.createdAt.hash.updatedAt
