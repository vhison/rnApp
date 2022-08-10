import { Instance } from "mobx-state-tree"
import { PelotonsModelBase } from "./PelotonsModel.base"

/* The TypeScript type of an instance of PelotonsModel */
export interface PelotonsModelType extends Instance<typeof PelotonsModel.Type> {}

/* A graphql query fragment builders for PelotonsModel */
export { selectFromPelotons, pelotonsModelPrimitives, PelotonsModelSelector } from "./PelotonsModel.base"

/**
 * PelotonsModel
 */
export const PelotonsModel = PelotonsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
