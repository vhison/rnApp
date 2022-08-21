import { Instance } from "mobx-state-tree"
import { WorkoutRidesModelBase } from "./WorkoutRidesModel.base"

/* The TypeScript type of an instance of WorkoutRidesModel */
export interface WorkoutRidesModelType extends Instance<typeof WorkoutRidesModel.Type> {}

/* A graphql query fragment builders for WorkoutRidesModel */
export { selectFromWorkoutRides, workoutRidesModelPrimitives, WorkoutRidesModelSelector } from "./WorkoutRidesModel.base"

/**
 * WorkoutRidesModel
 */
export const WorkoutRidesModel = WorkoutRidesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
