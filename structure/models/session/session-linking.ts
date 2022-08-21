import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { Linking } from 'react-native'
import { URL } from 'react-native-url-polyfill'
import { withRootStore } from '../extensions'

/**
 * A SessionLinkingStore model.
 */

export const SessionLinkingModel = types
  .model('SessionLinkingModel')
  .props({
    linkingUrl: types.maybe(types.string),
  })
  .extend(withRootStore)
  .actions((self) => ({
    setLinkingUrl(url: string) {
      self.linkingUrl = url
      console.log('url set in state', self.linkingUrl)
    },
  }))
  .actions((self) => ({
    clearLinkingUrl() {
      self.linkingUrl = ''
    },
  }))
  .actions((self) => {
    const onUrl = (options: { url: string }) => {
      console.log('url', options)
      self.setLinkingUrl(options.url)
    }

    const afterCreate = async () => {
      Linking.addEventListener('url', onUrl)
      const url = await Linking.getInitialURL()
      if (url) {
        self.setLinkingUrl(url)
      }
      // self.setLinkingUrl('')
    }
    const beforeDestroy = () => {
      Linking.removeEventListener('url', onUrl)
    }
    return { afterCreate, beforeDestroy }
  })
  .views((self) => ({
    get joinCode(): string | null {
      // parse code from url
      // https://rides.peddle.bet/join/[code]
      if (self.linkingUrl) {
        console.log('got the linking url >> ', self.linkingUrl)
        if (self.linkingUrl.indexOf('rides') > -1) {
          try {
            const url = new URL(self.linkingUrl)
            console.log('got the linking url >>>>', url)            
            const [a, b, rootPath, joinPath, code] = url.pathname.split('/')
            console.log('SessionLinking.code parsed', rootPath, joinPath, code)
            console.log("SessionLinking.code : ", code)
            return code
          } catch (error) {
            console.log('got the linking url error >> ', error)
          }
        }
      }
      return null
    },
  }))

/**
 * The SessionLinkingStore instance.
 */
export type SessionLinkingStore = Instance<typeof SessionLinkingModel>

/**
 * The data of a SessionLinkingStore.
 */
export type SessionLinkingStoreSnapshot = SnapshotOut<typeof SessionLinkingModel>
