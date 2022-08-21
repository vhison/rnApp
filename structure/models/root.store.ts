import Constants from 'expo-constants'
import { Instance, onPatch, onSnapshot, SnapshotOut, types } from 'mobx-state-tree'
import { createHttpClient } from 'mst-gql'
// import { SubscriptionClient } from 'subscriptions-transport-ws'

import * as Storage from '../utils/storage'
import { RootStore as APIRootStore } from './api-store'
import { SessionStore } from './session'

const isDev = __DEV__ && !Constants.isDevice
// https://api-dev.peddle.bet
// const baseURL = isDev
//   ? 'https://66bfa93204fc.ngrok.io'
//   : 'https://66bfa93204fc.ngrok.io'
const baseURL = isDev
  ? 'https://api-dev.peddle.bet'
  : 'https://api-dev.peddle.bet'

console.log('root.store baseURL', baseURL)

// const baseWebSocketURL = isDev
//   ? 'ws://localhost:3000/graphql'
//   : 'wss://wh6frg2fz8.execute-api.us-east-1.amazonaws.com/dev'

// console.log('root.store baseWebSocketURL', baseWebSocketURL)

export const env = {
  gqlHttpClient: createHttpClient(`${baseURL}/graphql`),
  // gqlWsClient: new SubscriptionClient(baseWebSocketURL, {
  //   // https://github.com/apollographql/subscriptions-transport-ws
  //   timeout: 5000,
  //   reconnect: true,
  //   lazy: true,
  // }),
}

export const RootStoreModel = types.model('RootStore').props({
  // api: types.optional(APIRootStore, () => APIRootStore.create(undefined, env)),
  api: types.optional(APIRootStore, {}),
  session: types.optional(SessionStore, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>

let rootStore: RootStore | null = null

/**
 * The key we'll be saving our state as within async storage.
 */
const ROOT_STATE_STORAGE_KEY = 'root'

export const getDefaultStore = async () => {
  if (rootStore === null) {
    try {
      // load data from storage
      const data = await Storage.load(ROOT_STATE_STORAGE_KEY)
      console.log('loaded data from storage', data, RootStoreModel.is(data))
      if (RootStoreModel.is(data)) {
        // @ts-ignore
        rootStore = RootStoreModel.create(data, env)
      } else {
        rootStore = RootStoreModel.create({}, env)
      }
    } catch (error) {
      // if there's any problems loading, then let's at least fallback to an empty state
      // instead of crashing.
      rootStore = RootStoreModel.create({}, env)
      // but please inform us what happened
      console.error('unable to load storage from cache', { error })
    }
    // track changes & save to storage
    console.log('setup onSnapshot', !!rootStore)
    onSnapshot(rootStore, (snapshot) => {
      console.log('snap! onSnapshot')
      Storage.save(ROOT_STATE_STORAGE_KEY, snapshot)
      // Storage.clear()
    })
    console.log('setup onPatch', !!rootStore)
    onPatch(rootStore, (snapshot) => {
      console.log('snap! onPatch')
      // Storage.save(ROOT_STATE_STORAGE_KEY, snapshot)
    })
    onPatch(rootStore.session, (snapshot) => {
      console.log('snap! onPatch')
      // Storage.save(ROOT_STATE_STORAGE_KEY, snapshot)
    })
  }

  return rootStore
}
