import { curry } from '@typed/lambda'
import { HttpEnv } from './types'

export const addHeader = curry(
  (name: string, value: string, { http }: HttpEnv): HttpEnv => {
    return {
      http: (url, options, callbacks) =>
        http(url, { ...options, headers: { ...options.headers, [name]: value } }, callbacks),
    }
  },
)

export const addAuthorizationHeader = addHeader('Authorization')
