import {Instance, onSnapshot, SnapshotOut, types} from 'mobx-state-tree';
import * as Storage from '../utils/storage';
import {SessionStore} from './session';
export const env = {
  // gqlHttpClient: createHttpClient(`${baseURL}/graphql`),
  // gqlWsClient: new SubscriptionClient(`wss:${baseURL.replace('http:', '').replace('https:', '')}/graphql`, {
  //   reconnect: true,
  // }),
};
export const RootStoreModel = types.model('RootStore').props({
  session: types.optional(SessionStore, {}),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;

let rootStore: RootStore | null = null;

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = 'root';

export const getDefaultStore = async () => {
  if (rootStore === null) {
    try {
      // load data from storage
      const data = await Storage.load(ROOT_STATE_STORAGE_KEY);
      console.log(
        '[root.store.getDefaultStore] loaded data from storage',
        RootStoreModel.is(data),
      );
      // console.log(
      //   '[root.store.getDefaultStore] loaded data from storage',
      //   JSON.stringify(data, null, 10),
      // );
      if (RootStoreModel.is(data)) {
        // @ts-ignore
        // rootStore = RootStoreModel.create({}, env) // Allows you to clear all data on disk on app startup
        rootStore = RootStoreModel.create(data, env); // Normal mode of operation
      } else {
        rootStore = RootStoreModel.create({}, env);
      }
    } catch (error) {
      // if there's any problems loading, then let's at least fallback to an empty state
      // instead of crashing.
      rootStore = RootStoreModel.create({}, env);
      // but please inform us what happened
      console.error(
        '[root.store.getDefaultStore] unable to load storage from cache',
        {error},
      );
    }
    // track changes & save to storage
    // console.log('[root.store.getDefaultStore] setup onSnapshot', !!rootStore);
    // onSnapshot(rootStore, (snapshot) => Storage.save(ROOT_STATE_STORAGE_KEY, snapshot))
    onSnapshot(rootStore, async snapshot => {
      // console.log(
      //   '[root.store.getDefaultStore] snap! onSnapshot ---------------------------------------------------------------------------------'
      // )
      const isSuccessfullySaved = await Storage.save(
        ROOT_STATE_STORAGE_KEY,
        snapshot,
      );
      // console.log('[root.store.getDefaultStore] snap! onSnapshot isSuccessfullySaved', isSuccessfullySaved)
      return isSuccessfullySaved;
    });
  }

  return rootStore;
};
