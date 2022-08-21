import { Instance } from "mobx-state-tree"
import { ParticipantsModelBase } from "./ParticipantsModel.base"

/* The TypeScript type of an instance of ParticipantsModel */
export interface ParticipantsModelType extends Instance<typeof ParticipantsModel.Type> {}

/* A graphql query fragment builders for ParticipantsModel */
export { selectFromParticipants, participantsModelPrimitives, ParticipantsModelSelector } from "./ParticipantsModel.base"

/**
 * ParticipantsModel
 */
export const ParticipantsModel = ParticipantsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
