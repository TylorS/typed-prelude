import { Disposable } from '@typed/disposable'
import { Env } from '@typed/env'
import { Loadable } from './Loadable'

export type HttpOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
  headers?: Record<string, string | undefined>
  body?: string
}

export type HttpResponse = {
  responseText: string
  status: number
  statusText: string
  headers: Record<string, string | undefined>
}

// A type-param is used to represent a parsed type
// @ts-ignore
export interface Request<A extends {}> extends Env<HttpEnv, Loadable<HttpResponse>> {}

export type HttpEnv = {
  readonly http: (
    url: string,
    options: HttpOptions,
    success: (response: HttpResponse) => void,
    failure: (error: Error) => void,
  ) => Disposable
}
