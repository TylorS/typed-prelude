import { Either } from '@typed/either'
import { handle, Pure } from '@typed/env'
import { HttpRequest, HttpResponse } from '@typed/http'
import { Loadable } from '@typed/loadable'
import { Maybe } from '@typed/maybe'
import { useCallback } from 'react'
import { useEnv } from '../hooks'
import { useHttpContext } from './HttpContext'

export function useHttp<A>(fn: (value: A) => HttpRequest, value: A): UseHttp<A> {
  const httpEnv = useHttpContext()
  const getRequest = useCallback(() => fn(value), [fn, value])
  const response = useEnv(getRequest(), httpEnv)
  const makeRequest = (value: A): Pure<Loadable<Either<Error, HttpResponse>>> =>
    handle(httpEnv, fn(value))

  return [response, makeRequest]
}

export type UseHttp<A> = [
  Maybe<Loadable<Either<Error, HttpResponse>>>,
  (value: A) => Pure<Loadable<Either<Error, HttpResponse>>>
]
