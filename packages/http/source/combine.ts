import { Disposable } from '@typed/disposable'
import { Effect, runEffect } from '@typed/effects'
import { Either } from '@typed/either'
import { Env, handle, runPure } from '@typed/env'
import { HttpEnv, HttpRequest, HttpRequestValue, HttpResponse } from './types'

export type Combined<A extends ReadonlyArray<HttpRequest<any>>> = {
  readonly [K in keyof A]: Either<Error, HttpResponse<HttpRequestValue<A[K]>>>
}

export function combine<A extends ReadonlyArray<HttpRequest<any>>>(
  ...requests: A
): Effect<HttpEnv, Combined<A>> {
  return Effect.fromEnv(
    Env.create<HttpEnv, Combined<A>>((cb, env) => {
      const hasValues = Array(requests.length).fill(false)
      const values = Array(requests.length)
      const disposable = Disposable.lazy()

      function onHttp(b: Either<Error, HttpResponse<any>>, index: number) {
        hasValues[index] = true
        values[index] = b

        if (hasValues.every(Boolean)) {
          return cb(values as any)
        }

        return Disposable.None
      }

      requests.forEach((request, i) => {
        const pure = handle(env, runEffect(request))

        disposable.addDisposable(
          runPure((either: Either<Error, HttpResponse<any>>) => onHttp(either, i), pure),
        )
      })

      return disposable
    }),
  )
}
