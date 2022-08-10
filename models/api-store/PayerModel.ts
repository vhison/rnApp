import { Instance } from "mobx-state-tree"
import { PayerModelBase } from "./PayerModel.base"

/* The TypeScript type of an instance of PayerModel */
export interface PayerModelType extends Instance<typeof PayerModel.Type> {}

/* A graphql query fragment builders for PayerModel */
export { selectFromPayer, payerModelPrimitives, PayerModelSelector } from "./PayerModel.base"

/**
 * PayerModel
 */
export const PayerModel = PayerModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
