import { Disposable } from '@typed/disposable'
import { Either } from '@typed/either'
import { chain, Env, handle, mapTo, Pure } from '@typed/env'
import { HttpEnv, HttpRequest, HttpResponse, LoadableResponse } from '@typed/http'
import { Loadable } from '@typed/loadable'
import { Maybe } from '@typed/maybe'
import { useCallback, useMemo, useState } from '../tagged'
import { useBoolean } from './useBoolean'
import { useEnv } from './useEnv'

export function useHttp<A>(fn: () => HttpRequest<A>, httpEnv: HttpEnv, deps?: any[]): UseHttp<[], A>
export function useHttp<A extends any[], B>(
  fn: (...args: A) => HttpRequest<B>,
  httpEnv: HttpEnv,
  values: A,
): UseHttp<A, B>
export function useHttp<A extends any[], B>(
  fn: (...args: A) => HttpRequest<B>,
  httpEnv: HttpEnv,
  values: A,
): UseHttp<A, B> {
  const [disposable, setDisposable] = useState(Disposable.None)
  const [isLoading, setIsLoading] = useBoolean(false)
  const deps = [fn, ...values]
  const makeRequest = useCallback((...values: A): Pure<LoadableResponse> => {
    const httpRequest = fn(...values)
    const requestType = httpRequest.options.type

    if (isLoading && requestType === 'prefer-last') {
      return Pure.empty
    }

    if (isLoading && requestType === 'prefer-current') {
      disposable.dispose()
    }

    const request = handle(httpEnv, httpRequest)
    const makeRequest = chain(
      () => chain(x => mapTo(x, setIsLoading(false)), request),
      setIsLoading(true),
    )

    return Env.create((cb, resources) => {
      const disposable = makeRequest.runEnv(cb, resources)

      setDisposable(disposable)

      return disposable
    })
  }, deps)

  const request = useMemo(() => makeRequest(...values), deps)
  const response = useEnv(request, httpEnv)

  return [response, makeRequest]
}

export type UseHttp<A extends any[], B> = [
  Maybe<Loadable<Either<Error, HttpResponse<B>>>>,
  (...values: A) => Pure<Loadable<Either<Error, HttpResponse<B>>>>
]
