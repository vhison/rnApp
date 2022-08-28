import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { withRootStore } from '../extensions'

/**
 * A SessionUserStore model.
 */

const RegisterUsers = types.model('RegisterUsers', {
  _id: types.number,
  email: types.union(types.undefined, types.string),
  firstName: types.union(types.undefined, types.string),
  lastName: types.union(types.undefined, types.string),
  password: types.union(types.undefined, types.string),
})

export const SessionUserStoreModel = types
  .model('SessionUserStoreModel')
  .props({
    user: types.maybe(RegisterUsers),
    input: types.optional(types.number, 0),
  })
  .extend(withRootStore)
  .actions(self => ({
    setUser(user: any) {
      self.user = user
    },
    setInput(note: number) {
      self.input = note
    },
  }))

/**
 * The SessionUserStore instance.
 */
export type SessionUserStore = Instance<typeof SessionUserStoreModel>

/**
 * The data of a SessionUserStore.
 */
export type SessionUserStoreSnapshot = SnapshotOut<typeof SessionUserStoreModel>
