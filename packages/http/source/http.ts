import { ArgsOf, Fn } from '@typed/lambda'
import { Failure, Loading, Success } from '@typed/remote-data'
import { HttpOptions, HttpRequest, HttpResponse } from './types'

export function http<A = unknown>(url: string, options: HttpOptions = {}): HttpRequest<A> {
  return {
    url,
    options,
    type: 'lazy',
    runEnv: (f, { http }) => {
      let hasLoaded = false
      const ifNotLoaded = <A extends Fn>(f: A) => (...args: ArgsOf<A>) => {
        if (!hasLoaded) {
          hasLoaded = true

          return f(...args)
        }
      }

      return http(url, options, {
        success: ifNotLoaded((response: HttpResponse<A>) => f(Success.of(response))),
        failure: ifNotLoaded((error: Error) => f(Failure.of(error))),
        onStart: () => f(Loading),
      })
    },
  }
}
