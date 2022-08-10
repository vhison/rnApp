/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { BetChallengesModel, BetChallengesModelType } from "./BetChallengesModel"
import { BetChallengesModelSelector } from "./BetChallengesModel.base"
import { RootStoreType } from "./index"


/**
 * SettingsBase
 * auto generated base class for the model SettingsModel.
 */
export const SettingsModelBase = ModelBase
  .named('Settings')
  .props({
    __typename: types.optional(types.literal("Settings"), "Settings"),
    challenges: types.union(types.undefined, types.array(types.late((): any => BetChallengesModel))),
    classes: types.union(types.undefined, types.string),
    numberOfRides: types.union(types.undefined, types.number),
    output: types.union(types.undefined, types.string),
    timeToCompleteDays: types.union(types.undefined, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class SettingsModelSelector extends QueryBuilder {
  get classes() { return this.__attr(`classes`) }
  get numberOfRides() { return this.__attr(`numberOfRides`) }
  get output() { return this.__attr(`output`) }
  get timeToCompleteDays() { return this.__attr(`timeToCompleteDays`) }
  challenges(builder?: string | BetChallengesModelSelector | ((selector: BetChallengesModelSelector) => BetChallengesModelSelector)) { return this.__child(`challenges`, BetChallengesModelSelector, builder) }
}
export function selectFromSettings() {
  return new SettingsModelSelector()
}

export const settingsModelPrimitives = selectFromSettings().classes.numberOfRides.output.timeToCompleteDays
