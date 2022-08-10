import { Instance } from "mobx-state-tree"
import { LeaderBoardRidesModelBase } from "./LeaderBoardRidesModel.base"

/* The TypeScript type of an instance of LeaderBoardRidesModel */
export interface LeaderBoardRidesModelType extends Instance<typeof LeaderBoardRidesModel.Type> {}

/* A graphql query fragment builders for LeaderBoardRidesModel */
export { selectFromLeaderBoardRides, leaderBoardRidesModelPrimitives, LeaderBoardRidesModelSelector } from "./LeaderBoardRidesModel.base"

/**
 * LeaderBoardRidesModel
 */
export const LeaderBoardRidesModel = LeaderBoardRidesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
