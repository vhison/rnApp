import { Instance } from "mobx-state-tree"
import { WorkoutMetricsModelBase } from "./WorkoutMetricsModel.base"

/* The TypeScript type of an instance of WorkoutMetricsModel */
export interface WorkoutMetricsModelType extends Instance<typeof WorkoutMetricsModel.Type> {}

/* A graphql query fragment builders for WorkoutMetricsModel */
export { selectFromWorkoutMetrics, workoutMetricsModelPrimitives, WorkoutMetricsModelSelector } from "./WorkoutMetricsModel.base"

/**
 * WorkoutMetricsModel
 */
export const WorkoutMetricsModel = WorkoutMetricsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
