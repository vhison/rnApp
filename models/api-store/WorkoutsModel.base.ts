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
import { WorkoutMetricsModel, WorkoutMetricsModelType } from "./WorkoutMetricsModel"
import { WorkoutMetricsModelSelector } from "./WorkoutMetricsModel.base"
import { RootStoreType } from "./index"


/**
 * WorkoutsBase
 * auto generated base class for the model WorkoutsModel.
 */
export const WorkoutsModelBase = ModelBase
  .named('Workouts')
  .props({
    __typename: types.optional(types.literal("Workouts"), "Workouts"),
    _id: types.identifier,
    betId: types.union(types.undefined, types.late((): any => BetModel)),
    created: types.union(types.undefined, types.null, types.number),
    created_at: types.union(types.undefined, types.null, types.number),
    createdAt: types.union(types.undefined, types.frozen()),
    device_time_created_at: types.union(types.undefined, types.null, types.number),
    device_type: types.union(types.undefined, types.null, types.string),
    duration: types.union(types.undefined, types.null, types.string),
    end_time: types.union(types.undefined, types.null, types.number),
    fitness_discipline: types.union(types.undefined, types.null, types.string),
    has_leaderboard_metrics: types.union(types.undefined, types.null, types.boolean),
    has_pedaling_metrics: types.union(types.undefined, types.null, types.boolean),
    id: types.union(types.undefined, types.null, types.string),
    is_total_work_personal_record: types.union(types.undefined, types.null, types.boolean),
    metrics_type: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    peloton_id: types.union(types.undefined, types.null, types.string),
    platform: types.union(types.undefined, types.null, types.string),
    public: types.union(types.undefined, types.null, types.string),
    ride: types.union(types.undefined, types.late((): any => RideModel)),
    rideId: types.union(types.undefined, types.late((): any => RideModel)),
    start_time: types.union(types.undefined, types.null, types.number),
    status: types.union(types.undefined, types.null, types.string),
    timezone: types.union(types.undefined, types.null, types.string),
    title: types.union(types.undefined, types.null, types.string),
    total_leaderboard_users: types.union(types.undefined, types.null, types.number),
    total_work: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
    user_id: types.union(types.undefined, types.null, types.string),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
    workout_type: types.union(types.undefined, types.null, types.string),
    workoutMetrics: types.union(types.undefined, types.array(types.late((): any => WorkoutMetricsModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class WorkoutsModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get created() { return this.__attr(`created`) }
  get created_at() { return this.__attr(`created_at`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get device_time_created_at() { return this.__attr(`device_time_created_at`) }
  get device_type() { return this.__attr(`device_type`) }
  get duration() { return this.__attr(`duration`) }
  get end_time() { return this.__attr(`end_time`) }
  get fitness_discipline() { return this.__attr(`fitness_discipline`) }
  get has_leaderboard_metrics() { return this.__attr(`has_leaderboard_metrics`) }
  get has_pedaling_metrics() { return this.__attr(`has_pedaling_metrics`) }
  get id() { return this.__attr(`id`) }
  get is_total_work_personal_record() { return this.__attr(`is_total_work_personal_record`) }
  get metrics_type() { return this.__attr(`metrics_type`) }
  get name() { return this.__attr(`name`) }
  get peloton_id() { return this.__attr(`peloton_id`) }
  get platform() { return this.__attr(`platform`) }
  get public() { return this.__attr(`public`) }
  get start_time() { return this.__attr(`start_time`) }
  get status() { return this.__attr(`status`) }
  get timezone() { return this.__attr(`timezone`) }
  get title() { return this.__attr(`title`) }
  get total_leaderboard_users() { return this.__attr(`total_leaderboard_users`) }
  get total_work() { return this.__attr(`total_work`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get user_id() { return this.__attr(`user_id`) }
  get workout_type() { return this.__attr(`workout_type`) }
  betId(builder?: string | BetModelSelector | ((selector: BetModelSelector) => BetModelSelector)) { return this.__child(`betId`, BetModelSelector, builder) }
  ride(builder?: string | RideModelSelector | ((selector: RideModelSelector) => RideModelSelector)) { return this.__child(`ride`, RideModelSelector, builder) }
  rideId(builder?: string | RideModelSelector | ((selector: RideModelSelector) => RideModelSelector)) { return this.__child(`rideId`, RideModelSelector, builder) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
  workoutMetrics(builder?: string | WorkoutMetricsModelSelector | ((selector: WorkoutMetricsModelSelector) => WorkoutMetricsModelSelector)) { return this.__child(`workoutMetrics`, WorkoutMetricsModelSelector, builder) }
}
export function selectFromWorkouts() {
  return new WorkoutsModelSelector()
}

export const workoutsModelPrimitives = selectFromWorkouts()._id.created.created_at.createdAt.device_time_created_at.device_type.duration.end_time.fitness_discipline.has_leaderboard_metrics.has_pedaling_metrics.is_total_work_personal_record.metrics_type.name.peloton_id.platform.public.start_time.status.timezone.title.total_leaderboard_users.total_work.updatedAt.user_id.workout_type
