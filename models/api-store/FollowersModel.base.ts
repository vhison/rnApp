/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * FollowersBase
 * auto generated base class for the model FollowersModel.
 */
export const FollowersModelBase = ModelBase
  .named('Followers')
  .props({
    __typename: types.optional(types.literal("Followers"), "Followers"),
    _id: types.identifier,
    authed_user_follows: types.union(types.undefined, types.string),
    category: types.union(types.undefined, types.string),
    createdAt: types.union(types.undefined, types.frozen()),
    id: types.union(types.undefined, types.string),
    image_url: types.union(types.undefined, types.string),
    is_profile_private: types.union(types.undefined, types.string),
    location: types.union(types.undefined, types.string),
    total_followers: types.union(types.undefined, types.number),
    total_following: types.union(types.undefined, types.number),
    total_workouts: types.union(types.undefined, types.number),
    updatedAt: types.union(types.undefined, types.frozen()),
    username: types.union(types.undefined, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class FollowersModelSelector extends QueryBuilder {
  get _id() { return this.__attr(`_id`) }
  get authed_user_follows() { return this.__attr(`authed_user_follows`) }
  get category() { return this.__attr(`category`) }
  get createdAt() { return this.__attr(`createdAt`) }
  get id() { return this.__attr(`id`) }
  get image_url() { return this.__attr(`image_url`) }
  get is_profile_private() { return this.__attr(`is_profile_private`) }
  get location() { return this.__attr(`location`) }
  get total_followers() { return this.__attr(`total_followers`) }
  get total_following() { return this.__attr(`total_following`) }
  get total_workouts() { return this.__attr(`total_workouts`) }
  get updatedAt() { return this.__attr(`updatedAt`) }
  get username() { return this.__attr(`username`) }
}
export function selectFromFollowers() {
  return new FollowersModelSelector()
}

export const followersModelPrimitives = selectFromFollowers()._id.authed_user_follows.category.createdAt.image_url.is_profile_private.location.total_followers.total_following.total_workouts.updatedAt.username
