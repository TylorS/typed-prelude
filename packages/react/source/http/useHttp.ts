import { Disposable } from '@typed/disposable'
import { chain, Env, handle, mapTo, Pure } from '@typed/env'
import { HttpRequest, HttpResponse } from '@typed/http'
import { id } from '@typed/lambda'
import { unpack } from '@typed/maybe'
import { NoData, RemoteData } from '@typed/remote-data'
import { useMemo, useState } from 'react'
import { useBoolean, useEnv } from '../hooks'
import { useHttpContext } from './HttpContext'

export function useHttp<A, B>(fn: (value: A) => HttpRequest<B>, value: A): UseHttp<A, B> {
  const httpEnv = useHttpContext()
  const [disposable, setDisposable] = useState(Disposable.None)
  const [isLoading, setIsLoading] = useBoolean(false)
  const makeRequest = (value: A): Pure<RemoteData<Error, HttpResponse<B>>> => {
    const httpRequest = fn(value)
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
  }

  const request = useMemo(() => makeRequest(value), [fn, value])
  const response = useEnv(request, httpEnv)
  const remoteData = unpack(id, (): RemoteData<Error, HttpResponse<B>> => NoData, response)

  return [remoteData, makeRequest]
}

export type UseHttp<A, B> = [
  RemoteData<Error, HttpResponse<B>>,
  (value: A) => Pure<RemoteData<Error, HttpResponse<B>>>,
]
