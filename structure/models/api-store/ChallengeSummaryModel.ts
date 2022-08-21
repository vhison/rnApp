import { Instance } from "mobx-state-tree"
import { ChallengeSummaryModelBase } from "./ChallengeSummaryModel.base"

/* The TypeScript type of an instance of ChallengeSummaryModel */
export interface ChallengeSummaryModelType extends Instance<typeof ChallengeSummaryModel.Type> {}

/* A graphql query fragment builders for ChallengeSummaryModel */
export { selectFromChallengeSummary, challengeSummaryModelPrimitives, ChallengeSummaryModelSelector } from "./ChallengeSummaryModel.base"

/**
 * ChallengeSummaryModel
 */
export const ChallengeSummaryModel = ChallengeSummaryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
