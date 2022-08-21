import { Instance } from "mobx-state-tree"
import { DonationModelBase } from "./DonationModel.base"

/* The TypeScript type of an instance of DonationModel */
export interface DonationModelType extends Instance<typeof DonationModel.Type> {}

/* A graphql query fragment builders for DonationModel */
export { selectFromDonation, donationModelPrimitives, DonationModelSelector } from "./DonationModel.base"

/**
 * DonationModel
 */
export const DonationModel = DonationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
