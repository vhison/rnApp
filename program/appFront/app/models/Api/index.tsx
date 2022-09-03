// General api to access data
import { BASE_URL } from './ApiConstants'

export default function Api(path: string, params: string, method: string, token: string) {
  console.log('path: ', path)
  // let options
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { token: token }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  }
  console.log(BASE_URL + path)
  return fetch(BASE_URL + path, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => {
      throw error
    })
}
