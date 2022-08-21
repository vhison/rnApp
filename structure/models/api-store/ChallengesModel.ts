import { Instance } from "mobx-state-tree"
import { ChallengesModelBase } from "./ChallengesModel.base"

/* The TypeScript type of an instance of ChallengesModel */
export interface ChallengesModelType extends Instance<typeof ChallengesModel.Type> {}

/* A graphql query fragment builders for ChallengesModel */
export { selectFromChallenges, challengesModelPrimitives, ChallengesModelSelector } from "./ChallengesModel.base"

/**
 * ChallengesModel
 */
export const ChallengesModel = ChallengesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
