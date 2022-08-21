import { Instance } from "mobx-state-tree"
import { BetModelBase } from "./BetModel.base"

/* The TypeScript type of an instance of BetModel */
export interface BetModelType extends Instance<typeof BetModel.Type> {}

/* A graphql query fragment builders for BetModel */
export { selectFromBet, betModelPrimitives, BetModelSelector } from "./BetModel.base"

/**
 * BetModel
 */
export const BetModel = BetModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
