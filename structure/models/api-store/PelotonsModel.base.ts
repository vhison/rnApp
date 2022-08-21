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
 * PelotonsBase
 * auto generated base class for the model PelotonsModel.
 */
export const PelotonsModelBase = ModelBase
  .named('Pelotons')
  .props({
    __typename: types.optional(types.literal("Pelotons"), "Pelotons"),
    _id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    pelotonId: types.union(types.undefined, types.string),
    session_id: types.union(types.undefined, types.string),
    updatedAt: types.union(types.undefined, types.frozen()),
    userId: types.union(types.undefined, types.late((): any => UserModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PelotonsModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get pelotonId() { return this.__attr(`pelotonId`) }
  get session_id() { return this.__attr(`session_id`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  userId(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`userId`, UserModelSelector, builder) }
}
export function selectFromPelotons() {
  return new PelotonsModelSelector()
}

export const pelotonsModelPrimitives = selectFromPelotons()._id.createdAt.pelotonId.session_id.updatedAt
