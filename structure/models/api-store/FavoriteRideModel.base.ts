/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RideModel, RideModelType } from "./RideModel"
import { RideModelSelector } from "./RideModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * FavoriteRideBase
 * auto generated base class for the model FavoriteRideModel.
 */
export const FavoriteRideModelBase = ModelBase
  .named('FavoriteRide')
  .props({
    __typename: types.optional(types.literal("FavoriteRide"), "FavoriteRide"),
    _id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    rideId: types.union(types.undefined, types.late((): any => RideModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FavoriteRideModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  rideId(builder?: string | RideModelSelector | ((selector: RideModelSelector) => RideModelSelector)) { return this.__child(`rideId`, RideModelSelector, builder) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromFavoriteRide() {
  return new FavoriteRideModelSelector()
}

export const favoriteRideModelPrimitives = selectFromFavoriteRide()._id.createdAt.updatedAt
