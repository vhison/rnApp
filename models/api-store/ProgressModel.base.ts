/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CurrentTierModel, CurrentTierModelType } from "./CurrentTierModel"
import { CurrentTierModelSelector } from "./CurrentTierModel.base"
import { RootStoreType } from "./index"


/**
 * ProgressBase
 * auto generated base class for the model ProgressModel.
 */
export const ProgressModelBase = ModelBase
  .named('Progress')
  .props({
    __typename: types.optional(types.literal("Progress"), "Progress"),
    _id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    current_tier: types.union(types.undefined, types.late((): any => CurrentTierModel)),
    has_joined: types.union(types.undefined, types.string),
    metric_display_unit: types.union(types.undefined, types.string),
    metric_display_unit_to_next_tier: types.union(types.undefined, types.string),
    metric_display_value: types.union(types.undefined, types.number),
    metric_display_value_to_next_tier: types.union(types.undefined, types.number),
    metric_value: types.union(types.undefined, types.number),
    next_tier: types.union(types.undefined, types.late((): any => CurrentTierModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ProgressModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get has_joined() { return this.__attr(`has_joined`) }
  get metric_display_unit() { return this.__attr(`metric_display_unit`) }
  get metric_display_unit_to_next_tier() { return this.__attr(`metric_display_unit_to_next_tier`) }
  get metric_display_value() { return this.__attr(`metric_display_value`) }
  get metric_display_value_to_next_tier() { return this.__attr(`metric_display_value_to_next_tier`) }
  get metric_value() { return this.__attr(`metric_value`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  current_tier(builder?: string | CurrentTierModelSelector | ((selector: CurrentTierModelSelector) => CurrentTierModelSelector)) { return this.__child(`current_tier`, CurrentTierModelSelector, builder) }
  next_tier(builder?: string | CurrentTierModelSelector | ((selector: CurrentTierModelSelector) => CurrentTierModelSelector)) { return this.__child(`next_tier`, CurrentTierModelSelector, builder) }
}
export function selectFromProgress() {
  return new ProgressModelSelector()
}

export const progressModelPrimitives = selectFromProgress()._id.createdAt.has_joined.metric_display_unit.metric_display_unit_to_next_tier.metric_display_value.metric_display_value_to_next_tier.metric_value.updatedAt
