import { Disposable } from '@typed/disposable'
import { Env } from '@typed/env'
import { Loaded, RemoteData } from '@typed/remote-data'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
export type HttpHeaders = Readonly<Record<string, string | undefined>>

export type HttpOptions = {
  readonly method?: HttpMethod
  readonly headers?: HttpHeaders
  readonly body?: string
  readonly type?: 'always-fetch' | 'prefer-last' | 'prefer-current'
}

// @ts-ignore - Allow phantom type
export type HttpResponse<A = unknown> = {
  readonly responseText: string
  readonly status: number
  readonly statusText: string
  readonly headers: HttpHeaders
}

export type HttpRequest<A = unknown, E extends HttpEnv = HttpEnv> = Env<
  E,
  RemoteData<Error, HttpResponse<A>>
> & {
  readonly url: string
  readonly options: HttpOptions
}

export type HttpCallbacks = {
  success: (response: HttpResponse) => Disposable
  failure: (error: Error) => Disposable
  onStart?: () => Disposable
}

export interface HttpEnv {
  readonly http: (url: string, options: HttpOptions, callbacks: HttpCallbacks) => Disposable
}

export interface TestHttpEnv extends HttpEnv {
  readonly getResponses: () => ReadonlyArray<Loaded<Error, HttpResponse>>
}
