import { Disposable } from '@typed/disposable'
import { Left, Right } from '@typed/either'
import { Resume } from '@typed/env'
import { ArgsOf, Fn } from '@typed/lambda'
import { isValidStatus } from './isValidStatus'
import { HttpEnv, HttpOptions, HttpRequest, HttpResponse } from './types'

export function* http<A = unknown>(url: string, options: HttpOptions = {}): HttpRequest<A> {
  return yield ({ http }: HttpEnv) =>
    Resume.create((f) => {
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
    })
}

function handleSuccess<A>(response: HttpResponse<A>) {
  if (isValidStatus(response)) {
    return Right.of(response)
  }

  const errorMessage = response.responseText || response.statusText

  return Left.of(new Error(errorMessage))
}
