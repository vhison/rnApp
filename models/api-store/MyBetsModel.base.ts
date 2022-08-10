/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AcceptChallengesModel, AcceptChallengesModelType } from "./AcceptChallengesModel"
import { AcceptChallengesModelSelector } from "./AcceptChallengesModel.base"
import { SettingsModel, SettingsModelType } from "./SettingsModel"
import { SettingsModelSelector } from "./SettingsModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * MyBetsBase
 * auto generated base class for the model MyBetsModel.
 */
export const MyBetsModelBase = ModelBase
  .named('MyBets')
  .props({
    __typename: types.optional(types.literal("MyBets"), "MyBets"),
    _id: types.identifier,
    amount: types.union(types.undefined, types.number),
    charityId: types.union(types.undefined, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    participants: types.union(types.undefined, types.null, types.array(types.late((): any => AcceptChallengesModel))),
    percentageSplit: types.union(types.undefined, types.number),
    rideId: types.union(types.undefined, types.late((): any => UserModel)),
    rideType: types.union(types.undefined, types.string),
    settings: types.union(types.undefined, types.late((): any => SettingsModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MyBetsModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get amount() { return this.__attr(`amount`) }
  get charityId() { return this.__attr(`charityId`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get percentageSplit() { return this.__attr(`percentageSplit`) }
  get rideType() { return this.__attr(`rideType`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  participants(builder?: string | AcceptChallengesModelSelector | ((selector: AcceptChallengesModelSelector) => AcceptChallengesModelSelector)) { return this.__child(`participants`, AcceptChallengesModelSelector, builder) }
  rideId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`rideId`, UserModelSelector, builder) }
  settings(builder?: string | SettingsModelSelector | ((selector: SettingsModelSelector) => SettingsModelSelector)) { return this.__child(`settings`, SettingsModelSelector, builder) }
}
export function selectFromMyBets() {
  return new MyBetsModelSelector()
}

export const myBetsModelPrimitives = selectFromMyBets()._id.amount.charityId.createdAt.percentageSplit.rideType.updatedAt
