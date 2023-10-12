import Api from '..'
import { USERS } from '../ApiConstants'

export const getUserListsAPI = () => {
  return Api(USERS + '?page=1', '', 'get', '')
}

// export default function loginUserAPI(username, password) {
//   console.log('loginUserAPI: ', LOGIN + '?USERNAME=' + username + '&PASSWORD=' + password)
//   return Api(LOGIN + '?USERNAME=' + username + '&PASSWORD=' + password, null, 'post', null)
// }
