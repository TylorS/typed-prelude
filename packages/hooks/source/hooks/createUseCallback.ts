import { Fn, memoize } from '@typed/lambda'
import { CreateHookContext } from '../types'
import { withCreateHook } from '../withCreateHook'
import { createUseMemo } from './createUseMemo'

export const createUseCallback = <A extends readonly any[], B>(
  context: CreateHookContext,
  fn: Fn<A, B>,
  deps: ReadonlyArray<any>,
) => {
  const createUseCallbackHook = withCreateHook(
    createHook => [createHook(createUseMemo)] as const,
    ([useMemo], fn: Fn<A, B>, deps: ReadonlyArray<any> = []): Fn<A, B> => {
      return useMemo<readonly any[], Fn<A, B>>(
        () => memoize(fn as any) /*TODO: why is this required?*/,
        deps,
      )
    },
  )

  return createUseCallbackHook(context, fn, deps)
}
