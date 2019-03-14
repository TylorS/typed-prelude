import { Future } from '@typed/future'
import { Disposable } from 'fuse-box/EventEmitter'

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
export interface Request<A extends {}> extends Future<Error, HttpResponse, HttpResources> {}

export type HttpResources = {
  readonly http: (
    url: string,
    options: HttpOptions,
    success: (response: HttpResponse) => void,
    failure: (error: Error) => void,
  ) => Disposable
}
