// import { AxiosResponse } from 'axios'
import { applySnapshot, Instance, SnapshotOut, types } from 'mobx-state-tree'

import { emitter, LogoutEvent } from '../../utils/events'
import { JwtModel, JwtModelType } from '../api-store'
// import { JwtModel } from '../api-store'
import { withRootStore } from '../extensions'
import { env } from '../root.store'

// interface AuthenticationResponse extends AxiosResponse {
//   data: {
//     expiresIn: string
//     accessToken: string
//     refreshToken: string
//     user: {
//       // _id: string
//       email: string
//       createdAt: string
//       firstName: string
//       lastName: string
//       updatedAt: string
//     }
//   }
// }

/**
 * A SessionTokenStore model.
 */

export const SessionTokenStoreModel = types
  .model('SessionTokenStoreModel')
  .props({
    isBootstrapped: types.optional(types.boolean, false),
    token: types.maybe(types.string),
    refreshToken: types.maybe(types.string),
  })
  .extend(withRootStore)
  .actions((self) => ({
    setRefreshToken(token?: string) {
      console.log('setRefreshToken', token)
      self.refreshToken = token
    },
    setToken(token?: string) {
      console.log('setToken', token)
      self.token = token
      env.gqlHttpClient.setHeaders({ authorization: `bearer ${token}` })
      // const root = self.rootStore
      // root.services.setToken(token)
    },
  }))
  .actions((self) => ({
    setCode(data: JwtModelType) {
      if (JwtModel.is(data)) {
        const jwt = JwtModel.create(data)
        // console.log('is jwt', jwt, !!self.rootStore)
        self.setRefreshToken(jwt.refreshToken)
        self.setToken(jwt.accessToken)
      }
    },
  }))
  .actions((self) => {
    // const root = self.rootStore

    const logout = () => {
      self.setToken(undefined)
      self.rootStore.session.clearUser()
      // self.rootStore.session.clearChannel()
      // self.rootStore.session.clearShare()
      applySnapshot(self, {})
    }

    const login = async (email: string, password: string) => {
      try {
        console.log('login', { email, password })
        // ... yield can be used in async/await style
        // const response: AuthenticationResponse = await root.services.api.session.post('/auth/login', {
        //   email,
        //   password,
        // })
        // const { accessToken } = response.data
        // console.log('logged in', { email, password, accessToken })
        // if (accessToken) {
        //   self.setToken(accessToken)
        // }
      } catch (error) {
        // ... including try/catch error handling
        console.error('unable to login', { error })
        logout()
      }
      console.log('JWT', { token: self.token })
      // The action will return a promise that resolves to the returned value
      // (or rejects with anything thrown from the action)
      return self.token
    }

    return { login, logout }
  })
  .actions((self) => {
    const afterCreate = () => {
      self.isBootstrapped = false
      console.log('token', self.token)
      self.setToken(self.token)
      // self.setToken(
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWE1MzBkYjFjOWVkODMzZmQ4NDM0ZiIsImlhdCI6MTU5MTMxOTE1NSwiZXhwIjoxNTkxMzIyNzU1fQ.EQqELb20xdvqg6i12f-RkXCr1Os0LEO9VNMephDlAso'
      // )
      emitter.addListener(LogoutEvent, self.logout)
      self.isBootstrapped = true
    }
    const beforeDestroy = () => {
      emitter.removeListener(LogoutEvent, self.logout)
      return
    }
    return { afterCreate, beforeDestroy }
  })
  .views((self) => ({
    get isLoggedIn() {
      return self.token !== undefined
    },
  }))

/**
 * The SessionTokenStore instance.
 */
export type SessionTokenStore = Instance<typeof SessionTokenStoreModel>

/**
 * The data of a SessionTokenStore.
 */
export type SessionTokenStoreSnapshot = SnapshotOut<typeof SessionTokenStoreModel>
