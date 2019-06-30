import { Disposable } from '@typed/disposable'
import { chain, Env, handle, mapTo, Pure } from '@typed/env'
import { HttpEnv, HttpRequest, HttpResponse } from '@typed/http'
import { id } from '@typed/lambda'
import { unpack } from '@typed/maybe'
import { NoData, RemoteData } from '@typed/remote-data'
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
  const makeRequest = useCallback((...values: A): Pure<RemoteData<Error, HttpResponse<B>>> => {
    const httpRequest = fn(...values)
    const requestType = httpRequest.options.type

    if (isLoading && requestType === 'prefer-last') {
      return Pure.of(NoData)
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
  const remoteData = unpack(id, (): RemoteData<Error, HttpResponse<B>> => NoData, response)

  return [remoteData, makeRequest]
}

export type UseHttp<A extends any[], B> = [
  RemoteData<Error, HttpResponse<B>>,
  (...values: A) => Pure<RemoteData<Error, HttpResponse<B>>>
]
