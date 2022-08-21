/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CharityBase
 * auto generated base class for the model CharityModel.
 */
export const CharityModelBase = ModelBase
  .named('Charity')
  .props({
    __typename: types.optional(types.literal("Charity"), "Charity"),
    _id: types.identifier,
    alias: types.union(types.undefined, types.string),
    city: types.union(types.undefined, types.string),
    country: types.union(types.undefined, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    disbursement_type: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.string),
    name: types.union(types.undefined, types.string),
    ngo_id: types.union(types.undefined, types.string),
    postal_code: types.union(types.undefined, types.string),
    profile_url: types.union(types.undefined, types.string),
    region: types.union(types.undefined, types.string),
    street1: types.union(types.undefined, types.string),
    street2: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CharityModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get alias() { return this.__attr(`alias`) }
  get city() { return this.__attr(`city`) }
  get country() { return this.__attr(`country`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get disbursement_type() { return this.__attr(`disbursement_type`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get ngo_id() { return this.__attr(`ngo_id`) }
  get postal_code() { return this.__attr(`postal_code`) }
  get profile_url() { return this.__attr(`profile_url`) }
  get region() { return this.__attr(`region`) }
  get street1() { return this.__attr(`street1`) }
  get street2() { return this.__attr(`street2`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromCharity() {
  return new CharityModelSelector()
}

export const charityModelPrimitives = selectFromCharity()._id.alias.city.country.createdAt.disbursement_type.name.ngo_id.postal_code.profile_url.region.street1.street2.updatedAt
