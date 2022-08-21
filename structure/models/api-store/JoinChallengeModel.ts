import { Instance } from "mobx-state-tree"
import { JoinChallengeModelBase } from "./JoinChallengeModel.base"

/* The TypeScript type of an instance of JoinChallengeModel */
export interface JoinChallengeModelType extends Instance<typeof JoinChallengeModel.Type> {}

/* A graphql query fragment builders for JoinChallengeModel */
export { selectFromJoinChallenge, joinChallengeModelPrimitives, JoinChallengeModelSelector } from "./JoinChallengeModel.base"

/**
 * JoinChallengeModel
 */
export const JoinChallengeModel = JoinChallengeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
