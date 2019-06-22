import { Disposable } from '@typed/disposable'
import { Either } from '@typed/either'
import { chain, Env, handle, mapTo, Pure } from '@typed/env'
import { HttpRequest, HttpResponse, LoadableResponse } from '@typed/http'
import { Loadable } from '@typed/loadable'
import { Maybe } from '@typed/maybe'
import { useMemo, useState } from 'react'
import { useBoolean, useEnv } from '../hooks'
import { useHttpContext } from './HttpContext'

export function useHttp<A>(fn: (value: A) => HttpRequest, value: A): UseHttp<A> {
  const httpEnv = useHttpContext()
  const [disposable, setDisposable] = useState(Disposable.None)
  const [isLoading, setIsLoading] = useBoolean(false)
  const makeRequest = (value: A): Pure<LoadableResponse> => {
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

  return [response, makeRequest]
}

export type UseHttp<A> = [
  Maybe<Loadable<Either<Error, HttpResponse>>>,
  (value: A) => Pure<Loadable<Either<Error, HttpResponse>>>
]
