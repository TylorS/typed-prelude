import { Disposable } from '@typed/disposable'
import { Either } from '@typed/either'
import { Env } from '@typed/env'
import { Loadable } from '@typed/loadable'

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

export type HttpRequest<E extends HttpEnv = HttpEnv> = Env<E, Loadable<Either<Error, HttpResponse>>>

export type HttpEnv = {
  readonly http: (
    url: string,
    options: HttpOptions,
    success: (response: HttpResponse) => void,
    failure: (error: Error) => void,
  ) => Disposable
}
