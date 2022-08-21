/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ChallengeSummaryBase
 * auto generated base class for the model ChallengeSummaryModel.
 */
export const ChallengeSummaryModelBase = ModelBase
  .named('ChallengeSummary')
  .props({
    __typename: types.optional(types.literal("ChallengeSummary"), "ChallengeSummary"),
    _id: types.identifier,
    background_image_url: types.union(types.undefined, types.string),
    challenge_type: types.union(types.undefined, types.string),
    community_progress: types.union(types.undefined, types.null, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    description: types.union(types.undefined, types.string),
    digital_background_image_url: types.union(types.undefined, types.string),
    end_time: types.union(types.undefined, types.number),
    id: types.union(types.undefined, types.string),
    start_time: types.union(types.undefined, types.number),
    status: types.union(types.undefined, types.string),
    symbol_image_url: types.union(types.undefined, types.string),
    title: types.union(types.undefined, types.number),
    type: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ChallengeSummaryModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get background_image_url() { return this.__attr(`background_image_url`) }
  get challenge_type() { return this.__attr(`challenge_type`) }
  get community_progress() { return this.__attr(`community_progress`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get description() { return this.__attr(`description`) }
  get digital_background_image_url() { return this.__attr(`digital_background_image_url`) }
  get end_time() { return this.__attr(`end_time`) }
  get id() { return this.__attr(`id`) }
  get start_time() { return this.__attr(`start_time`) }
  get status() { return this.__attr(`status`) }
  get symbol_image_url() { return this.__attr(`symbol_image_url`) }
  get title() { return this.__attr(`title`) }
  get type() { return this.__attr(`type`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromChallengeSummary() {
  return new ChallengeSummaryModelSelector()
}

export const challengeSummaryModelPrimitives = selectFromChallengeSummary()._id.background_image_url.challenge_type.community_progress.createdAt.description.digital_background_image_url.end_time.start_time.status.symbol_image_url.title.type.updatedAt
