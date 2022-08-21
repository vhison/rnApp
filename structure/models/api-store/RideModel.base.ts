/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * RideBase
 * auto generated base class for the model RideModel.
 */
export const RideModelBase = ModelBase
  .named('Ride')
  .props({
    __typename: types.optional(types.literal("Ride"), "Ride"),
    _id: types.identifier,
    complete: types.union(types.undefined, types.boolean),
    createdAt: types.union(types.undefined, types.frozen()),
    pelotonRideId: types.union(types.undefined, types.string),
    rideType: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RideModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get complete() { return this.__attr(`complete`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get pelotonRideId() { return this.__attr(`pelotonRideId`) }
  get rideType() { return this.__attr(`rideType`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromRide() {
  return new RideModelSelector()
}

export const rideModelPrimitives = selectFromRide()._id.complete.createdAt.pelotonRideId.rideType.updatedAt
