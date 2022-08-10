import { Instance } from "mobx-state-tree"
import { PaymentModelBase } from "./PaymentModel.base"

/* The TypeScript type of an instance of PaymentModel */
export interface PaymentModelType extends Instance<typeof PaymentModel.Type> {}

/* A graphql query fragment builders for PaymentModel */
export { selectFromPayment, paymentModelPrimitives, PaymentModelSelector } from "./PaymentModel.base"

/**
 * PaymentModel
 */
export const PaymentModel = PaymentModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
