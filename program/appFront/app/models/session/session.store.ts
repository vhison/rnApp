import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { SessionTokenStoreModel } from './session-token'
import { SessionUserStoreModel } from './session-user'

/**
 * A SessionStore model.
 */

export const SessionStore = types.compose(SessionTokenStoreModel, SessionUserStoreModel).named('SessionStore')

/**
 * The SessionStore instance.
 */
export type SessionStoreType = Instance<typeof SessionStore>

/**
 * The data of a SessionStore.
 */
export type SessionStoreSnapshot = SnapshotOut<typeof SessionStore>
