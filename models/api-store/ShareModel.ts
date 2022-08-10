import { Instance } from "mobx-state-tree"
import { ShareModelBase } from "./ShareModel.base"

/* The TypeScript type of an instance of ShareModel */
export interface ShareModelType extends Instance<typeof ShareModel.Type> {}

/* A graphql query fragment builders for ShareModel */
export { selectFromShare, shareModelPrimitives, ShareModelSelector } from "./ShareModel.base"

/**
 * ShareModel
 */
export const ShareModel = ShareModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
