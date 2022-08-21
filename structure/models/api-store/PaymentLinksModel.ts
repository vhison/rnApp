import { Instance } from "mobx-state-tree"
import { PaymentLinksModelBase } from "./PaymentLinksModel.base"

/* The TypeScript type of an instance of PaymentLinksModel */
export interface PaymentLinksModelType extends Instance<typeof PaymentLinksModel.Type> {}

/* A graphql query fragment builders for PaymentLinksModel */
export { selectFromPaymentLinks, paymentLinksModelPrimitives, PaymentLinksModelSelector } from "./PaymentLinksModel.base"

/**
 * PaymentLinksModel
 */
export const PaymentLinksModel = PaymentLinksModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
