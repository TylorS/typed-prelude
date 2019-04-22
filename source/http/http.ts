import { Either, Left, Right } from '@typed/either'
import { Env } from '@typed/env'
import { ArgsOf, Fn } from '@typed/lambda'
import { Loadable, Loading } from '@typed/loadable'
import { HttpEnv, HttpOptions, HttpResponse } from './types'

export function http(
  url: string,
  options: HttpOptions = {},
): Env<HttpEnv, Loadable<Either<Error, HttpResponse>>> {
  return {
    runEnv: (f, { http }) => {
      let hasLoaded = false
      const ifNotLoaded = <A extends Fn>(f: A) => (...args: ArgsOf<A>) => {
        if (!hasLoaded) {
          hasLoaded = true

          return f(...args)
        }
      }

      f(Loading)

      return http(
        url,
        options,
        ifNotLoaded((response: HttpResponse) => f(Loadable.of(Right.of(response)))),
        ifNotLoaded((error: Error) => f(Loadable.of(Left.of(error)))),
      )
    },
  }
}
