import { Disposable, dispose } from '@typed/disposable'
import { handle, Pure, runPure } from '@typed/env'
import {
  CreateHookContext,
  createUseCallback,
  createUseRef,
  createUseState,
  withCreateHook,
} from '@typed/hooks'
import { HttpRequest, HttpResponse } from '@typed/http'
import { Fn } from '@typed/lambda'
import { isLoading, NoData, RemoteData } from '@typed/remote-data'
import { createUseHttpEnv } from '../channels'

export const createUseHttp = <A extends readonly any[], B>(
  context: CreateHookContext,
  fn: Fn<A, HttpRequest<B>>,
) => {
  const createUseHttpHook = withCreateHook(
    createHook =>
      [
        createHook(createUseState),
        createHook(createUseHttpEnv),
        createHook(createUseRef),
        createHook(createUseCallback),
      ] as const,
    ([useState, useHttpEnv, useRef, useCallback], fn: Fn<A, HttpRequest<B>>) => {
      const httpEnv = useHttpEnv()
      const disposableRef = useRef<Disposable>()
      const [remoteData, setRemoteData] = useState<RemoteData<Error, HttpResponse<B>>>(NoData)
      const makeRequest = useCallback(
        (...args: A) => {
          const request = fn(...args)
          const type = request.options.type || 'always-fetch'

          if (type === 'prefer-current' && disposableRef.current) {
            dispose(disposableRef.current)
            disposableRef.current = null
          }

          if (type === 'prefer-last' && isLoading(remoteData)) {
            return disposableRef.current!
          }

          const disposable = (disposableRef.current = runPure(
            setRemoteData,
            handle(httpEnv, request),
          ))

          return disposable
        },
        [httpEnv],
      )
      const clear = Pure.fromIO(() => setRemoteData(NoData))

      return [remoteData, makeRequest, clear] as const
    },
  )

  return createUseHttpHook(context, fn)
}