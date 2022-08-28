import {Instance, SnapshotOut, types} from 'mobx-state-tree';
import {withRootStore} from '../extensions';

/**
 * A SessionUserStore model.
 */

const RegisterUsers = types.model('RegisterUsers', {
  _id: types.number,
  email: types.union(types.undefined, types.string),
  firstName: types.union(types.undefined, types.string),
  lastName: types.union(types.undefined, types.string),
  password: types.union(types.undefined, types.string),
});

export const SessionUserStoreModel = types
  .model('SessionUserStoreModel')
  .props({
    user: types.maybe(RegisterUsers),
  })
  .extend(withRootStore)
  .actions(self => ({
    setUser(user: any) {
      self.user = user;
    },
  }));
// .actions((self) => {
//   const root = self.rootStore
//   const getUser = async () => {
//     try {
//       const response: IUserResponse = await root.services.api.session.get('/users')
//       const { data } = response
//       self.setUser(data)
//     } catch (error) {
//       console.error('unable to getUser', { error })
//     }
//     return self
//   }

//   return { getUser }
// })

/**
 * The SessionUserStore instance.
 */
export type SessionUserStore = Instance<typeof SessionUserStoreModel>;

/**
 * The data of a SessionUserStore.
 */
export type SessionUserStoreSnapshot = SnapshotOut<
  typeof SessionUserStoreModel
>;
