import { Instance } from "mobx-state-tree"
import { FavoriteRideModelBase } from "./FavoriteRideModel.base"

/* The TypeScript type of an instance of FavoriteRideModel */
export interface FavoriteRideModelType extends Instance<typeof FavoriteRideModel.Type> {}

/* A graphql query fragment builders for FavoriteRideModel */
export { selectFromFavoriteRide, favoriteRideModelPrimitives, FavoriteRideModelSelector } from "./FavoriteRideModel.base"

/**
 * FavoriteRideModel
 */
export const FavoriteRideModel = FavoriteRideModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
