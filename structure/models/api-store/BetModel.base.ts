/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { SettingsModel, SettingsModelType } from "./SettingsModel"
import { SettingsModelSelector } from "./SettingsModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * BetBase
 * auto generated base class for the model BetModel.
 */
export const BetModelBase = ModelBase
  .named('Bet')
  .props({
    __typename: types.optional(types.literal("Bet"), "Bet"),
    _id: types.identifier,
    amount: types.union(types.undefined, types.number),
    charityId: types.union(types.undefined, types.string),
    complete: types.union(types.undefined, types.boolean),
    createdAt: types.union(types.undefined, types.frozen()),
    percentageSplit: types.union(types.undefined, types.number),
    reward: types.union(types.undefined, types.boolean),
    rideId: types.union(types.undefined, types.late((): any => UserModel)),
    rideType: types.union(types.undefined, types.string),
    settings: types.union(types.undefined, types.late((): any => SettingsModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BetModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get amount() { return this.__attr(`amount`) }
  get charityId() { return this.__attr(`charityId`) }
  get complete() { return this.__attr(`complete`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get percentageSplit() { return this.__attr(`percentageSplit`) }
  get reward() { return this.__attr(`reward`) }
  get rideType() { return this.__attr(`rideType`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  rideId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`rideId`, UserModelSelector, builder) }
  settings(builder?: string | SettingsModelSelector | ((selector: SettingsModelSelector) => SettingsModelSelector)) { return this.__child(`settings`, SettingsModelSelector, builder) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromBet() {
  return new BetModelSelector()
}

export const betModelPrimitives = selectFromBet()._id.amount.charityId.complete.createdAt.percentageSplit.reward.rideType.updatedAt
