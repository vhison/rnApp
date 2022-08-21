/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * WorkoutMetricsBase
 * auto generated base class for the model WorkoutMetricsModel.
 */
export const WorkoutMetricsModelBase = ModelBase
  .named('WorkoutMetrics')
  .props({
    __typename: types.optional(types.literal("workoutMetrics"), "workoutMetrics"),
    _id: types.identifier,
    average_value: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    display_name: types.union(types.undefined, types.null, types.string),
    display_unit: types.union(types.undefined, types.null, types.string),
    max_value: types.union(types.undefined, types.null, types.string),
    slug: types.union(types.undefined, types.null, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
    values: types.union(types.undefined, types.null, types.array(types.number)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class WorkoutMetricsModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get average_value() { return this.__attr(`average_value`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get display_name() { return this.__attr(`display_name`) }
  get display_unit() { return this.__attr(`display_unit`) }
  get max_value() { return this.__attr(`max_value`) }
  get slug() { return this.__attr(`slug`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get values() { return this.__attr(`values`) }
}
export function selectFromWorkoutMetrics() {
  return new WorkoutMetricsModelSelector()
}

export const workoutMetricsModelPrimitives = selectFromWorkoutMetrics()._id.average_value.createdAt.display_name.display_unit.max_value.slug.updatedAt.values
