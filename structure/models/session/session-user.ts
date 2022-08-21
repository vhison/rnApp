/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable camelcase */
// import { AxiosResponse } from 'axios'
import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { JwtModel, JwtModelType, UserModel, UserModelType, PelotonsModel, PelotonsModelType } from '../api-store'
import { withRootStore } from '../extensions'

/**
 * A SessionUserStore model.
 */
export const SessionUserStoreModel = types
  .model('SessionUserStoreModel')
  .props({
    user: types.maybe(UserModel),
    pelotonUser: types.maybe(PelotonsModel),
  })
  .extend(withRootStore)
  // .views((self) => ({
  //   get name() {
  //     if (self.firstName && self.lastName) {
  //       return `${self.firstName} ${self.lastName}`
  //     }
  //     return ''
  //   },
  // }))
  .actions((self) => ({
    setCode(data: JwtModelType) {
      if (JwtModel.is(data)) {
        const jwt = JwtModel.create(data)
        console.log('is jwt', jwt, !!self.rootStore)
        console.log('is jwt', jwt, !!self.rootStore)
        // self.setRefreshToken(jwt.refreshToken)
        // self.setToken(jwt.accessToken)
        self.rootStore.session.setRefreshToken(jwt.refreshToken)
        self.rootStore.session.setToken(jwt.accessToken)
      }
    },
  }))
  .actions((self) => ({
    clearUser() {
      self.user = undefined
      self.pelotonUser = undefined
    },
    async verifyCode(params: { phoneNumber: string; code: string }) {
      const { phoneNumber, code } = params
      const response = await self.rootStore.api.mutateVerifyCode({ code, phoneNumber })
      console.log('response success===>>', response, JwtModel.is(response?.verifyCode))
      if (response?.verifyCode) {
        self.setCode(response?.verifyCode)
      }
    },
    setUser(data: UserModelType) {
      self.user = data
    },
    setPelotonUser(data: PelotonsModelType) {
      self.pelotonUser = data
    },
  }))
  .actions((self) => ({
    // async fetchMe() {
    //   try {
    //     const user = await self.rootStore.api.queryMe()
    //     console.log('self.user', self.user)
    //     if ('me' in user && user.me) {
    //       if (UserModel.is(user.me)) {
    //         self.setUser(user.me)
    //         console.log('self.user', self.user)
    //       }
    //     }
    //   } catch (error) {
    //     console.error('UserModel.fetchMe', error)
    //   }
    // },
  }))

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
export type SessionUserStore = Instance<typeof SessionUserStoreModel>

/**
 * The data of a SessionUserStore.
 */
export type SessionUserStoreSnapshot = SnapshotOut<typeof SessionUserStoreModel>
