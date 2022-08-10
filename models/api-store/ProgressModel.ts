import { Instance } from "mobx-state-tree"
import { ProgressModelBase } from "./ProgressModel.base"

/* The TypeScript type of an instance of ProgressModel */
export interface ProgressModelType extends Instance<typeof ProgressModel.Type> {}

/* A graphql query fragment builders for ProgressModel */
export { selectFromProgress, progressModelPrimitives, ProgressModelSelector } from "./ProgressModel.base"

/**
 * ProgressModel
 */
export const ProgressModel = ProgressModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
