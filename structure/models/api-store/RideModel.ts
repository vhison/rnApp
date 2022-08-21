import { Instance } from "mobx-state-tree"
import { RideModelBase } from "./RideModel.base"

/* The TypeScript type of an instance of RideModel */
export interface RideModelType extends Instance<typeof RideModel.Type> {}

/* A graphql query fragment builders for RideModel */
export { selectFromRide, rideModelPrimitives, RideModelSelector } from "./RideModel.base"

/**
 * RideModel
 */
export const RideModel = RideModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
