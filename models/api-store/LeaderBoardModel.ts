import { Instance } from "mobx-state-tree"
import { LeaderBoardModelBase } from "./LeaderBoardModel.base"

/* The TypeScript type of an instance of LeaderBoardModel */
export interface LeaderBoardModelType extends Instance<typeof LeaderBoardModel.Type> {}

/* A graphql query fragment builders for LeaderBoardModel */
export { selectFromLeaderBoard, leaderBoardModelPrimitives, LeaderBoardModelSelector } from "./LeaderBoardModel.base"

/**
 * LeaderBoardModel
 */
export const LeaderBoardModel = LeaderBoardModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
