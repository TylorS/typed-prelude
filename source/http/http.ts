import { Left, Right } from '@typed/either'
import { ArgsOf, Fn } from '@typed/lambda'
import { Loadable, Loading } from '@typed/loadable'
import { HttpOptions, HttpRequest, HttpResponse } from './types'

export function http(url: string, options: HttpOptions = {}): HttpRequest {
  return {
    url,
    options,
    runEnv: (f, { http }) => {
      let hasLoaded = false
      const ifNotLoaded = <A extends Fn>(f: A) => (...args: ArgsOf<A>) => {
        if (!hasLoaded) {
          hasLoaded = true

          return f(...args)
        }
      }

      return http(url, options, {
        success: ifNotLoaded((response: HttpResponse) => f(Loadable.of(Right.of(response)))),
        failure: ifNotLoaded((error: Error) => f(Loadable.of(Left.of(error)))),
        onStart: () => f(Loading),
      })
    },
  }
}
