import { Instance } from "mobx-state-tree"
import { AcceptChallengesModelBase } from "./AcceptChallengesModel.base"

/* The TypeScript type of an instance of AcceptChallengesModel */
export interface AcceptChallengesModelType extends Instance<typeof AcceptChallengesModel.Type> {}

/* A graphql query fragment builders for AcceptChallengesModel */
export { selectFromAcceptChallenges, acceptChallengesModelPrimitives, AcceptChallengesModelSelector } from "./AcceptChallengesModel.base"

/**
 * AcceptChallengesModel
 */
export const AcceptChallengesModel = AcceptChallengesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
