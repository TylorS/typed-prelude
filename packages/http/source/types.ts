import { Disposable } from '@typed/disposable'
import { Effects } from '@typed/effects'
import { Either } from '@typed/either'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
export type HttpHeaders = Readonly<Record<string, string | undefined>>

export type HttpOptions = {
  readonly method?: HttpMethod
  readonly headers?: HttpHeaders
  readonly body?: string
}

// @ts-ignore - Allow phantom type
export type HttpResponse<A = unknown> = {
  readonly responseText: string
  readonly status: number
  readonly statusText: string
  readonly headers: HttpHeaders
}

export interface HttpRequest<A = unknown>
  extends Effects<HttpEnv, Either<Error, HttpResponse<A>>> {}

export type HttpCallbacks = {
  readonly success: (response: HttpResponse) => Disposable
  readonly failure: (error: Error) => Disposable
}

export interface HttpEnv {
  readonly http: (url: string, options: HttpOptions, callbacks: HttpCallbacks) => Disposable
}

export interface TestHttpEnv extends HttpEnv {
  readonly getResponses: () => ReadonlyArray<Either<Error, HttpResponse>>
}

export type HttpRequestValue<A> = A extends HttpRequest<infer R> ? R : never
