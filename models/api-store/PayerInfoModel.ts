import { Instance } from "mobx-state-tree"
import { PayerInfoModelBase } from "./PayerInfoModel.base"

/* The TypeScript type of an instance of PayerInfoModel */
export interface PayerInfoModelType extends Instance<typeof PayerInfoModel.Type> {}

/* A graphql query fragment builders for PayerInfoModel */
export { selectFromPayerInfo, payerInfoModelPrimitives, PayerInfoModelSelector } from "./PayerInfoModel.base"

/**
 * PayerInfoModel
 */
export const PayerInfoModel = PayerInfoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
