/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * BetChallengesBase
 * auto generated base class for the model BetChallengesModel.
 */
export const BetChallengesModelBase = ModelBase
  .named('BetChallenges')
  .props({
    __typename: types.optional(types.literal("BetChallenges"), "BetChallenges"),
    _id: types.union(types.undefined, types.string),
    created_at: types.union(types.undefined, types.string),
    duration: types.union(types.undefined, types.string),
    endDate: types.union(types.undefined, types.string),
    numberOFWeek: types.union(types.undefined, types.string),
    rank: types.union(types.undefined, types.number),
    startDate: types.union(types.undefined, types.string),
    title: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class BetChallengesModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get created_at() { return this.__attr(`created_at`) }
  get duration() { return this.__attr(`duration`) }
  get endDate() { return this.__attr(`endDate`) }
  get numberOFWeek() { return this.__attr(`numberOFWeek`) }
  get rank() { return this.__attr(`rank`) }
  get startDate() { return this.__attr(`startDate`) }
  get title() { return this.__attr(`title`) }
}
export function selectFromBetChallenges() {
  return new BetChallengesModelSelector()
}

export const betChallengesModelPrimitives = selectFromBetChallenges()._id.created_at.duration.endDate.numberOFWeek.rank.startDate.title
