import { differenceWith, filter, get, includes, isEqual, isNull, isUndefined, keys } from 'lodash'
import { IModelType } from 'mobx-state-tree'

interface IMappingErrorProps {
  message: string
  isAbleToMap: boolean
  json: any
}

export class MappingError extends Error {
  public static check(modelName: string, model: IModelType<any, any>, json: any) {
    if (!__DEV__) {
      return
    }
    const isAbleToMap = model.is(json)
    console.log('isAbleToMap', isAbleToMap, model, json)
    if (!isAbleToMap) {
      // console.log('json', json.workDestination)
      const tab = '\t\t'
      const modelKeys = filter(keys(model.properties), (key) => {
        const prop = model.properties[key]
        console.log('modelKeys', key, tab, prop.name, tab, prop.isType, keys(prop))
        // return includes(['identifier(string)', 'string', 'number', 'boolean'], prop.name)
        return !includes(['parent'], key)
      })
      // const payloadKeys = keys(dotize.convert(json))
      const payloadKeys = keys(json)
      const badKeys = differenceWith(modelKeys, payloadKeys, (keyA, keyB) => {
        if (isUndefined(get(json, keyA)) || isNull(get(json, keyA))) {
          return false
        }
        return isEqual(keyA, keyB)
      })
      console.log('modelKeys', modelKeys)
      console.log('payloadKeys', payloadKeys)
      console.log('badKeys', badKeys)
      const message = `Failed to map ${modelName} with culprit keys ${JSON.stringify(badKeys)}`
      if (badKeys.length > 0) {
        const mappingError = new MappingError({
          isAbleToMap,
          message,
          json,
        })
        throw mappingError
      } else {
        const msg = `Missing bad key or perhaps MST property should be a virtual? ${model}`
        console.warn(msg)
        // throw new Error(msg)
      }
    }
  }

  public isAbleToMap: boolean
  public data: any
  public json: any

  private constructor(params: IMappingErrorProps) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(params.message)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, MappingError)
    }

    this.data = { message: 'MappingError' }
    this.json = params.json
    this.isAbleToMap = params.isAbleToMap
    this.message = params.message

    // Use to cause messages like "ApiError: message" instead of the default "Error: message"
    this.name = this.constructor.name
  }
}
