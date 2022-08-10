/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ParticipantsBase
 * auto generated base class for the model ParticipantsModel.
 */
export const ParticipantsModelBase = ModelBase
  .named('Participants')
  .props({
    __typename: types.optional(types.literal("Participants"), "Participants"),
    _id: types.identifier,
    createdAt: types.union(types.undefined, types.frozen()),
    total_count: types.union(types.undefined, types.number),
    updatedAt: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ParticipantsModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get total_count() { return this.__attr(`total_count`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
}
export function selectFromParticipants() {
  return new ParticipantsModelSelector()
}

export const participantsModelPrimitives = selectFromParticipants()._id.createdAt.total_count.updatedAt
