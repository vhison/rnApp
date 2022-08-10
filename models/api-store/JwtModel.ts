import { Instance } from "mobx-state-tree"
import { JwtModelBase } from "./JwtModel.base"

/* The TypeScript type of an instance of JwtModel */
export interface JwtModelType extends Instance<typeof JwtModel.Type> {}

/* A graphql query fragment builders for JwtModel */
export { selectFromJwt, jwtModelPrimitives, JwtModelSelector } from "./JwtModel.base"

/**
 * JwtModel
 */
export const JwtModel = JwtModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
