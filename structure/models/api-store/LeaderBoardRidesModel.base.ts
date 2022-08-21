/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LeaderBoardRidesBase
 * auto generated base class for the model LeaderBoardRidesModel.
 */
export const LeaderBoardRidesModelBase = ModelBase
  .named('LeaderBoardRides')
  .props({
    __typename: types.optional(types.literal("LeaderBoardRides"), "LeaderBoardRides"),
    _id: types.identifier,
    countdown: types.union(types.undefined, types.null, types.string),
    created_at: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    duration: types.union(types.undefined, types.null, types.string),
    end_time: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.string),
    join_token: types.union(types.undefined, types.null, types.string),
    pedaling_end_time: types.union(types.undefined, types.null, types.string),
    pedaling_start_time: types.union(types.undefined, types.null, types.number),
    ride_id: types.union(types.undefined, types.null, types.string),
    scheduled_start_time: types.union(types.undefined, types.null, types.string),
    server_time: types.union(types.undefined, types.null, types.string),
    start_time: types.union(types.undefined, types.null, types.number),
    status: types.union(types.undefined, types.null, types.string),
    title: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LeaderBoardRidesModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get countdown() { return this.__attr(`countdown`) }
  get created_at() { return this.__attr(`created_at`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get duration() { return this.__attr(`duration`) }
  get end_time() { return this.__attr(`end_time`) }
  get id() { return this.__attr(`id`) }
  get join_token() { return this.__attr(`join_token`) }
  get pedaling_end_time() { return this.__attr(`pedaling_end_time`) }
  get pedaling_start_time() { return this.__attr(`pedaling_start_time`) }
  get ride_id() { return this.__attr(`ride_id`) }
  get scheduled_start_time() { return this.__attr(`scheduled_start_time`) }
  get server_time() { return this.__attr(`server_time`) }
  get start_time() { return this.__attr(`start_time`) }
  get status() { return this.__attr(`status`) }
  get title() { return this.__attr(`title`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromLeaderBoardRides() {
  return new LeaderBoardRidesModelSelector()
}

export const leaderBoardRidesModelPrimitives = selectFromLeaderBoardRides()._id.countdown.created_at.createdAt.duration.end_time.join_token.pedaling_end_time.pedaling_start_time.ride_id.scheduled_start_time.server_time.start_time.status.title.updatedAt
