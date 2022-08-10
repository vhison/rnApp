import { Instance } from "mobx-state-tree"
import { MyBetsModelBase } from "./MyBetsModel.base"

/* The TypeScript type of an instance of MyBetsModel */
export interface MyBetsModelType extends Instance<typeof MyBetsModel.Type> {}

/* A graphql query fragment builders for MyBetsModel */
export { selectFromMyBets, myBetsModelPrimitives, MyBetsModelSelector } from "./MyBetsModel.base"

/**
 * MyBetsModel
 */
export const MyBetsModel = MyBetsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
