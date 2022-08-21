import { Instance } from "mobx-state-tree"
import { TransactionsModelBase } from "./TransactionsModel.base"

/* The TypeScript type of an instance of TransactionsModel */
export interface TransactionsModelType extends Instance<typeof TransactionsModel.Type> {}

/* A graphql query fragment builders for TransactionsModel */
export { selectFromTransactions, transactionsModelPrimitives, TransactionsModelSelector } from "./TransactionsModel.base"

/**
 * TransactionsModel
 */
export const TransactionsModel = TransactionsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
