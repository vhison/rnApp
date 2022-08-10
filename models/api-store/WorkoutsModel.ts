import { Instance } from "mobx-state-tree"
import { WorkoutsModelBase } from "./WorkoutsModel.base"

/* The TypeScript type of an instance of WorkoutsModel */
export interface WorkoutsModelType extends Instance<typeof WorkoutsModel.Type> {}

/* A graphql query fragment builders for WorkoutsModel */
export { selectFromWorkouts, workoutsModelPrimitives, WorkoutsModelSelector } from "./WorkoutsModel.base"

/**
 * WorkoutsModel
 */
export const WorkoutsModel = WorkoutsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
