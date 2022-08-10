import { Instance } from "mobx-state-tree"
import { RidesModelBase } from "./RidesModel.base"

/* The TypeScript type of an instance of RidesModel */
export interface RidesModelType extends Instance<typeof RidesModel.Type> {}

/* A graphql query fragment builders for RidesModel */
export { selectFromRides, ridesModelPrimitives, RidesModelSelector } from "./RidesModel.base"

/**
 * RidesModel
 */
export const RidesModel = RidesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
