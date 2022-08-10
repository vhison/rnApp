/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LeaderBoardRidesModel, LeaderBoardRidesModelType } from "./LeaderBoardRidesModel"
import { LeaderBoardRidesModelSelector } from "./LeaderBoardRidesModel.base"
import { RootStoreType } from "./index"


/**
 * LeaderBoardBase
 * auto generated base class for the model LeaderBoardModel.
 */
export const LeaderBoardModelBase = ModelBase
  .named('LeaderBoard')
  .props({
    __typename: types.optional(types.literal("LeaderBoard"), "LeaderBoard"),
    _id: types.identifier,
    countdown: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    duration: types.union(types.undefined, types.null, types.string),
    end_time: types.union(types.undefined, types.null, types.number),
    id: types.union(types.undefined, types.null, types.string),
    leaderboard_rank: types.union(types.undefined, types.null, types.number),
    pedaling_end_time: types.union(types.undefined, types.null, types.string),
    pedaling_start_time: types.union(types.undefined, types.null, types.number),
    ride: types.union(types.undefined, types.null, types.late((): any => LeaderBoardRidesModel)),
    ride_id: types.union(types.undefined, types.null, types.string),
    scheduled_start_time: types.union(types.undefined, types.null, types.string),
    server_time: types.union(types.undefined, types.null, types.string),
    start_time: types.union(types.undefined, types.null, types.number),
    status: types.union(types.undefined, types.null, types.string),
    total_leaderboard_users: types.union(types.undefined, types.null, types.number),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LeaderBoardModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get countdown() { return this.__attr(`countdown`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get duration() { return this.__attr(`duration`) }
  get end_time() { return this.__attr(`end_time`) }
  get id() { return this.__attr(`id`) }
  get leaderboard_rank() { return this.__attr(`leaderboard_rank`) }
  get pedaling_end_time() { return this.__attr(`pedaling_end_time`) }
  get pedaling_start_time() { return this.__attr(`pedaling_start_time`) }
  get ride_id() { return this.__attr(`ride_id`) }
  get scheduled_start_time() { return this.__attr(`scheduled_start_time`) }
  get server_time() { return this.__attr(`server_time`) }
  get start_time() { return this.__attr(`start_time`) }
  get status() { return this.__attr(`status`) }
  get total_leaderboard_users() { return this.__attr(`total_leaderboard_users`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get userId() { return this.__attr(`userId`) }
  ride(builder?: string | LeaderBoardRidesModelSelector | ((selector: LeaderBoardRidesModelSelector) => LeaderBoardRidesModelSelector)) { return this.__child(`ride`, LeaderBoardRidesModelSelector, builder) }
}
export function selectFromLeaderBoard() {
  return new LeaderBoardModelSelector()
}

export const leaderBoardModelPrimitives = selectFromLeaderBoard()._id.countdown.createdAt.duration.end_time.leaderboard_rank.pedaling_end_time.pedaling_start_time.ride_id.scheduled_start_time.server_time.start_time.status.total_leaderboard_users.updatedAt.userId
