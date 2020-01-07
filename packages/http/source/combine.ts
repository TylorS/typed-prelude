import { Disposable, disposeAll } from '@typed/disposable'
import { Env, handle, runPure } from '@typed/env'
import { isDoneLoading, Loaded, RemoteData } from '@typed/remote-data'
import { HttpRequest, HttpRequestEnv, HttpRequestValue, HttpResponse } from './types'

export type Combined<A extends ReadonlyArray<HttpRequest<any, any>>> = {
  readonly [K in keyof A]: Loaded<Error, HttpResponse<HttpRequestValue<A[K]>>>
}

export type CombinedEnv<A extends ReadonlyArray<HttpRequest<any, any>>> = {
  readonly [K in keyof A]: HttpRequestEnv<A[K]>
}[number]

export function combine<A extends ReadonlyArray<HttpRequest<any, any>>>(
  ...requests: A
): Env<CombinedEnv<A>, Combined<A>> {
  return Env.create((cb, env) => {
    const hasValues = Array(requests.length).fill(false)
    const values = Array(requests.length)

    function onHttp(b: RemoteData<Error, HttpResponse<any>>, index: number) {
      hasValues[index] = isDoneLoading(b)
      values[index] = b

      if (hasValues.every(Boolean)) {
        return cb(values as any)
      }

      return Disposable.None
    }

    const disposables: Disposable[] = [
      ...requests.map((request, i) =>
        runPure(
          (data: RemoteData<Error, HttpResponse<any>>) => onHttp(data, i),
          handle(env, request),
        ),
      ),
    ]

    return disposeAll(disposables)
  })
}
