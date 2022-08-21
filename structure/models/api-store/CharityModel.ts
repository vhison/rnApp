import { Instance } from "mobx-state-tree"
import { CharityModelBase } from "./CharityModel.base"

/* The TypeScript type of an instance of CharityModel */
export interface CharityModelType extends Instance<typeof CharityModel.Type> {}

/* A graphql query fragment builders for CharityModel */
export { selectFromCharity, charityModelPrimitives, CharityModelSelector } from "./CharityModel.base"

/**
 * CharityModel
 */
export const CharityModel = CharityModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
