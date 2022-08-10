/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ChallengeSummaryModel, ChallengeSummaryModelType } from "./ChallengeSummaryModel"
import { ChallengeSummaryModelSelector } from "./ChallengeSummaryModel.base"
import { ParticipantsModel, ParticipantsModelType } from "./ParticipantsModel"
import { ParticipantsModelSelector } from "./ParticipantsModel.base"
import { ProgressModel, ProgressModelType } from "./ProgressModel"
import { ProgressModelSelector } from "./ProgressModel.base"
import { RootStoreType } from "./index"


/**
 * ChallengesBase
 * auto generated base class for the model ChallengesModel.
 */
export const ChallengesModelBase = ModelBase
  .named('Challenges')
  .props({
    __typename: types.optional(types.literal("Challenges"), "Challenges"),
    _id: types.identifier,
    challenge_summary: types.union(types.undefined, types.late((): any => ChallengeSummaryModel)),
    createdAt: types.union(types.undefined, types.frozen()),
    participants: types.union(types.undefined, types.late((): any => ParticipantsModel)),
    progress: types.union(types.undefined, types.late((): any => ProgressModel)),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ChallengesModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  challenge_summary(builder?: string | ChallengeSummaryModelSelector | ((selector: ChallengeSummaryModelSelector) => ChallengeSummaryModelSelector)) { return this.__child(`challenge_summary`, ChallengeSummaryModelSelector, builder) }
  participants(builder?: string | ParticipantsModelSelector | ((selector: ParticipantsModelSelector) => ParticipantsModelSelector)) { return this.__child(`participants`, ParticipantsModelSelector, builder) }
  progress(builder?: string | ProgressModelSelector | ((selector: ProgressModelSelector) => ProgressModelSelector)) { return this.__child(`progress`, ProgressModelSelector, builder) }
}
export function selectFromChallenges() {
  return new ChallengesModelSelector()
}

export const challengesModelPrimitives = selectFromChallenges()._id.createdAt.updatedAt
