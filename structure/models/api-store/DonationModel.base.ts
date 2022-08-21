/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/**
 * DonationBase
 * auto generated base class for the model DonationModel.
 */
export const DonationModelBase = ModelBase
  .named('Donation')
  .props({
    __typename: types.optional(types.literal("Donation"), "Donation"),
    _id: types.identifier,
    amount: types.union(types.undefined, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    email: types.union(types.undefined, types.string),
    first_name: types.union(types.undefined, types.string),
    last_name: types.union(types.undefined, types.string),
    organization_id: types.union(types.undefined, types.string),
    organizationName: types.union(types.undefined, types.string),
    pledgeUserId: types.union(types.undefined, types.string),
    status: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DonationModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get amount() { return this.__attr(`amount`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get email() { return this.__attr(`email`) }
  get first_name() { return this.__attr(`first_name`) }
  get last_name() { return this.__attr(`last_name`) }
  get organization_id() { return this.__attr(`organization_id`) }
  get organizationName() { return this.__attr(`organizationName`) }
  get pledgeUserId() { return this.__attr(`pledgeUserId`) }
  get status() { return this.__attr(`status`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromDonation() {
  return new DonationModelSelector()
}

export const donationModelPrimitives = selectFromDonation()._id.amount.createdAt.email.first_name.last_name.organization_id.organizationName.pledgeUserId.status.updatedAt
