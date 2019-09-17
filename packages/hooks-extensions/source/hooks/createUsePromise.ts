import { disposeAll, withIsDisposed } from '@typed/disposable'
import { execPure } from '@typed/env'
import { CreateHookContext, createUseEffect, withCreateHook } from '@typed/hooks'
import { Fn } from '@typed/lambda'
import { createUseRemoteData } from './createUseRemoteData'

export const createUsePromise = <A extends readonly any[], B, C = unknown>(
  context: CreateHookContext,
  fn: Fn<A, PromiseLike<B>>,
  deps: A,
) => {
  const createUsePromiseHook = withCreateHook(
    createHook => [createHook(createUseRemoteData), createHook(createUseEffect)] as const,
    ([useRemoteData, useEffect], fn: Fn<A, PromiseLike<B>>, deps: A) => {
      const [remoteData, { succeeded, failed, loading, clear }] = useRemoteData<C, B>()
      const effectDisposable = useEffect(
        (...args) => {
          const loadingDisposable = execPure(loading)
          const dataDisposable = withIsDisposed(isDisposed =>
            fn(...args).then(
              b => !isDisposed() && execPure(succeeded(b)),
              a => !isDisposed() && execPure(failed(a)),
            ),
          )

          return disposeAll([loadingDisposable, dataDisposable])
        },
        { args: deps },
      )

      const clearDisposable = { dispose: () => execPure(clear) }

      return [remoteData, disposeAll([effectDisposable, clearDisposable])] as const
    },
  )

  return createUsePromiseHook(context, fn, deps)
}
