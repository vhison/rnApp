import { Instance } from "mobx-state-tree"
import { HomeChallengesModelBase } from "./HomeChallengesModel.base"

/* The TypeScript type of an instance of HomeChallengesModel */
export interface HomeChallengesModelType extends Instance<typeof HomeChallengesModel.Type> {}

/* A graphql query fragment builders for HomeChallengesModel */
export { selectFromHomeChallenges, homeChallengesModelPrimitives, HomeChallengesModelSelector } from "./HomeChallengesModel.base"

/**
 * HomeChallengesModel
 */
export const HomeChallengesModel = HomeChallengesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
