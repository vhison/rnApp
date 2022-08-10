import { Instance } from "mobx-state-tree"
import { BetChallengesModelBase } from "./BetChallengesModel.base"

/* The TypeScript type of an instance of BetChallengesModel */
export interface BetChallengesModelType extends Instance<typeof BetChallengesModel.Type> {}

/* A graphql query fragment builders for BetChallengesModel */
export { selectFromBetChallenges, betChallengesModelPrimitives, BetChallengesModelSelector } from "./BetChallengesModel.base"

/**
 * BetChallengesModel
 */
export const BetChallengesModel = BetChallengesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
