import { Disposable } from '@typed/disposable'
import { Either } from '@typed/either'
import { Env } from '@typed/env'
import { Loadable } from '@typed/loadable'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'

export type HttpOptions = {
  readonly method?: HttpMethod
  readonly headers?: Readonly<Record<string, string | undefined>>
  readonly body?: string
  readonly type?: 'always-fetch' | 'prefer-last' | 'prefer-current'
}

export type HttpResponse = {
  readonly responseText: string
  readonly status: number
  readonly statusText: string
  readonly headers: Readonly<Record<string, string | undefined>>
}

export type LoadableResponse = Loadable<Either<Error, HttpResponse>>

export interface HttpRequest<E extends HttpEnv = HttpEnv> extends Env<E, LoadableResponse> {
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
  readonly getResponses: () => ReadonlyArray<Either<Error, HttpResponse>>
}
