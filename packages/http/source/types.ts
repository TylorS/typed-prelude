import { Disposable } from '@typed/disposable'
import { Env } from '@typed/env'
import { RemoteData } from '@typed/remote-data'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'

export type HttpOptions = {
  readonly method?: HttpMethod
  readonly headers?: Readonly<Record<string, string | undefined>>
  readonly body?: string
  readonly type?: 'always-fetch' | 'prefer-last' | 'prefer-current'
}

// @ts-ignore - Allow phantom type
export type HttpResponse<A = unknown> = {
  readonly responseText: string
  readonly status: number
  readonly statusText: string
  readonly headers: Readonly<Record<string, string | undefined>>
}

export interface HttpRequest<A = unknown, E extends HttpEnv = HttpEnv>
  extends Env<E, RemoteData<Error, HttpResponse<A>>> {
  readonly url: string
  readonly options: HttpOptions
}

export type HttpCallbacks = {
  success: (response: HttpResponse) => void
  failure: (error: Error) => void
  onStart?: () => void
}

export interface HttpEnv {
  readonly http: (url: string, options: HttpOptions, callbacks: HttpCallbacks) => Disposable
}

export interface TestHttpEnv extends HttpEnv {
  readonly getResponses: () => ReadonlyArray<RemoteData<Error, HttpResponse>>
}
