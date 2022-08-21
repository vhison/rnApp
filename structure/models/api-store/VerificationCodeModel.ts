import { Instance } from "mobx-state-tree"
import { VerificationCodeModelBase } from "./VerificationCodeModel.base"

/* The TypeScript type of an instance of VerificationCodeModel */
export interface VerificationCodeModelType extends Instance<typeof VerificationCodeModel.Type> {}

/* A graphql query fragment builders for VerificationCodeModel */
export { selectFromVerificationCode, verificationCodeModelPrimitives, VerificationCodeModelSelector } from "./VerificationCodeModel.base"

/**
 * VerificationCodeModel
 */
export const VerificationCodeModel = VerificationCodeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
