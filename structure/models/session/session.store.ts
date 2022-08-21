import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { SessionChannelStoreModel } from './session-channel'
import { SessionLinkingModel } from './session-linking'
import { SessionShareStoreModel } from './session-share'
import { SessionTokenStoreModel } from './session-token'
import { SessionUserStoreModel } from './session-user'

/**
 * A SessionStore model.
 */

export const SessionStore = types
  .compose(
    SessionChannelStoreModel,
    SessionLinkingModel,
    SessionShareStoreModel,
    SessionTokenStoreModel,
    SessionUserStoreModel
  )
  .named('SessionStore')

/**
 * The SessionStore instance.
 */
export type SessionStoreType = Instance<typeof SessionStore>

/**
 * The data of a SessionStore.
 */
export type SessionStoreSnapshot = SnapshotOut<typeof SessionStore>
