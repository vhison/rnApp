import { Instance } from "mobx-state-tree"
import { FollowersModelBase } from "./FollowersModel.base"

/* The TypeScript type of an instance of FollowersModel */
export interface FollowersModelType extends Instance<typeof FollowersModel.Type> {}

/* A graphql query fragment builders for FollowersModel */
export { selectFromFollowers, followersModelPrimitives, FollowersModelSelector } from "./FollowersModel.base"

/**
 * FollowersModel
 */
export const FollowersModel = FollowersModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
