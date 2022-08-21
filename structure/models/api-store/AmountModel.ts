import { Instance } from "mobx-state-tree"
import { AmountModelBase } from "./AmountModel.base"

/* The TypeScript type of an instance of AmountModel */
export interface AmountModelType extends Instance<typeof AmountModel.Type> {}

/* A graphql query fragment builders for AmountModel */
export { selectFromAmount, amountModelPrimitives, AmountModelSelector } from "./AmountModel.base"

/**
 * AmountModel
 */
export const AmountModel = AmountModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
