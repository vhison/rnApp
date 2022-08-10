/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
import { Instance, SnapshotOut, types } from 'mobx-state-tree'

import { MappingError } from '../../utils/errors/errors.mapping'
import { ShareModel, ShareModelType } from '../api-store'
import { withRootStore } from '../extensions'

/**
 * A SessionShareStore model.
 */

export const SessionShareStoreModel = types
  .model('SessionShareStoreModel')
  .props({
    share: types.maybe(ShareModel),
  })
  .extend(withRootStore)
  .actions((self) => ({
    clearShare() {
      self.share = undefined
    },
    setShare(data: ShareModelType) {
      self.share = data
    },
    async createShare() {
      // const channelId = self.rootStore.session.channel?._id
      // const userId = self.rootStore.session.user?._id
      // console.log('createShare channelId', channelId)
      // console.log('createShare userId', userId)
      // if (channelId && userId) {
      //   const response = await self.rootStore.api.mutateCreateShare({
      //     channelId: channelId,
      //     hash: '',
      //     url: '',
      //     userId: userId,
      //     message: '',
      //   })
      //   if (ShareModel.is(response.createShare)) {
      //     self.rootStore.session.setShare(response.createShare)
      //   } else {
      //     MappingError.check(ShareModel.name, ShareModel, response.createShare)
      //   }
      // }
    },
  }))
// .actions((self) => ({
//   setShare(user: Partial<ShareModelType>) {
//     const keys = Object.keys(user) as Array<keyof ShareModelType>
//     keys.forEach((key) => {
//       const value = user[key]
//       console.log('casedKey', { key, value })
//       if (value && Object.prototype.hasOwnProperty.call(self, key)) {
//         self[key] = value
//       }
//     })
//   },
// }))

/**
 * The SessionShareStore instance.
 */
export type SessionShareStore = Instance<typeof SessionShareStoreModel>

/**
 * The data of a SessionShareStore.
 */
export type SessionShareStoreSnapshot = SnapshotOut<typeof SessionShareStoreModel>
