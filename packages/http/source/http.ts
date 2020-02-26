import { Disposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Either, Left, Right } from '@typed/either'
import { Env } from '@typed/env'
import { ArgsOf, Fn } from '@typed/lambda'
import { HttpEnv, HttpOptions, HttpRequest, HttpResponse } from './types'

export function http<A = unknown>(url: string, options: HttpOptions = {}): HttpRequest<A> {
  return Effect.fromEnv(
    Env.create<HttpEnv, Either<Error, HttpResponse<A>>>((f, { http }) => {
      let hasLoaded = false
      const ifNotLoaded = <A extends Fn>(f: A) => (...args: ArgsOf<A>): Disposable => {
        if (!hasLoaded) {
          hasLoaded = true

          return f(...args)
        }

        return Disposable.None
      }

      return http(url, options, {
        success: ifNotLoaded((response: HttpResponse<A>) => f(handleSuccess(response))),
        failure: ifNotLoaded((error: Error) => f(Left.of(error))),
      })
    }),
  )
}

function handleSuccess<A>(response: HttpResponse<A>) {
  if (isValidStatus(response)) {
    return Right.of(response)
  }

  const errorMessage = response.responseText || response.statusText

  return Left.of(new Error(errorMessage))
}

function isValidStatus({ status }: HttpResponse<any>) {
  return status >= 200 && status < 300
}
