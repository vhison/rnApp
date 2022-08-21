/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AcceptChallengesModel, AcceptChallengesModelType } from "./AcceptChallengesModel"
import { AcceptChallengesModelSelector } from "./AcceptChallengesModel.base"
import { BetModel, BetModelType } from "./BetModel"
import { BetModelSelector } from "./BetModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { WorkoutsModel, WorkoutsModelType } from "./WorkoutsModel"
import { WorkoutsModelSelector } from "./WorkoutsModel.base"
import { RootStoreType } from "./index"


/**
 * HomeChallengesBase
 * auto generated base class for the model HomeChallengesModel.
 */
export const HomeChallengesModelBase = ModelBase
  .named('HomeChallenges')
  .props({
    __typename: types.optional(types.literal("HomeChallenges"), "HomeChallenges"),
    _id: types.union(types.undefined, types.string),
    bet: types.union(types.undefined, types.null, types.array(types.late((): any => BetModel))),
    complete: types.union(types.undefined, types.boolean),
    createdAt: types.union(types.undefined, types.string),
    participants: types.union(types.undefined, types.null, types.array(types.late((): any => AcceptChallengesModel))),
    pelotonRideId: types.union(types.undefined, types.string),
    rideType: types.union(types.undefined, types.string),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
    workout: types.union(types.undefined, types.null, types.array(types.late((): any => WorkoutsModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class HomeChallengesModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get complete() { return this.__attr(`complete`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get pelotonRideId() { return this.__attr(`pelotonRideId`) }
  get rideType() { return this.__attr(`rideType`) }
  bet(builder?: string | BetModelSelector | ((selector: BetModelSelector) => BetModelSelector)) { return this.__child(`bet`, BetModelSelector, builder) }
  participants(builder?: string | AcceptChallengesModelSelector | ((selector: AcceptChallengesModelSelector) => AcceptChallengesModelSelector)) { return this.__child(`participants`, AcceptChallengesModelSelector, builder) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
  workout(builder?: string | WorkoutsModelSelector | ((selector: WorkoutsModelSelector) => WorkoutsModelSelector)) { return this.__child(`workout`, WorkoutsModelSelector, builder) }
}
export function selectFromHomeChallenges() {
  return new HomeChallengesModelSelector()
}

export const homeChallengesModelPrimitives = selectFromHomeChallenges()._id.complete.createdAt.pelotonRideId.rideType
