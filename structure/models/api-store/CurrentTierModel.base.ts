/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CurrentTierBase
 * auto generated base class for the model CurrentTierModel.
 */
export const CurrentTierModelBase = ModelBase
  .named('CurrentTier')
  .props({
    __typename: types.optional(types.literal("CurrentTier"), "CurrentTier"),
    _id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    detailed_badge_image_url: types.union(types.undefined, types.string),
    has_reward: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.string),
    metric_display_unit: types.union(types.undefined, types.string),
    metric_display_value: types.union(types.undefined, types.number),
    metric_value: types.union(types.undefined, types.number),
    simple_badge_image_url: types.union(types.undefined, types.number),
    title: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CurrentTierModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get detailed_badge_image_url() { return this.__attr(`detailed_badge_image_url`) }
  get has_reward() { return this.__attr(`has_reward`) }
  get id() { return this.__attr(`id`) }
  get metric_display_unit() { return this.__attr(`metric_display_unit`) }
  get metric_display_value() { return this.__attr(`metric_display_value`) }
  get metric_value() { return this.__attr(`metric_value`) }
  get simple_badge_image_url() { return this.__attr(`simple_badge_image_url`) }
  get title() { return this.__attr(`title`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromCurrentTier() {
  return new CurrentTierModelSelector()
}

export const currentTierModelPrimitives = selectFromCurrentTier()._id.createdAt.detailed_badge_image_url.has_reward.metric_display_unit.metric_display_value.metric_value.simple_badge_image_url.title.updatedAt
