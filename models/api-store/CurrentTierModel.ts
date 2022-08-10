import { Instance } from "mobx-state-tree"
import { CurrentTierModelBase } from "./CurrentTierModel.base"

/* The TypeScript type of an instance of CurrentTierModel */
export interface CurrentTierModelType extends Instance<typeof CurrentTierModel.Type> {}

/* A graphql query fragment builders for CurrentTierModel */
export { selectFromCurrentTier, currentTierModelPrimitives, CurrentTierModelSelector } from "./CurrentTierModel.base"

/**
 * CurrentTierModel
 */
export const CurrentTierModel = CurrentTierModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
