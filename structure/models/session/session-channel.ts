/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
// import { AxiosResponse } from 'axios'
import { Instance, SnapshotOut, types } from 'mobx-state-tree'

// import { ChannelModel, ChannelModelType } from '../api-store'
import { withRootStore } from '../extensions'

/**
 * A SessionChannelStore model.
 */
export const SessionChannelStoreModel = types
  .model('SessionChannelStoreModel')
  .props({
    // channel: types.maybe(ChannelModel),
  })
  .extend(withRootStore)
  .actions((self) => ({
    // clearChannel() {
    //   self.channel = undefined
    // },
    // setChannel(data: ChannelModelType) {
    //   self.channel = data
    // },
    async createOrJoin() {
      console.log('createOrJoin')
      const userId = self.rootStore.session.user?._id
      console.log('createOrJoin userId', userId)
      // if (userId) {
      //   try {
      //     const channel = await self.rootStore.api.mutateCreateOrJoin({ userId, channelName: userId })
      //     if (ChannelModel.is(channel.createOrJoin)) {
      //       self.rootStore.session.setChannel(channel.createOrJoin)
      //     }
      //   } catch (error) {
      //     console.error('createOrJoin', error)
      //   }
      // }
    },
  }))

/**
 * The SessionChannelStore instance.
 */
export type SessionChannelStore = Instance<typeof SessionChannelStoreModel>

/**
 * The data of a SessionChannelStore.
 */
export type SessionChannelStoreSnapshot = SnapshotOut<typeof SessionChannelStoreModel>
