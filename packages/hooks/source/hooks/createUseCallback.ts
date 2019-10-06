import { Fn, memoize } from '@typed/lambda'
import { CreateHookContext } from '../types'
import { withCreateHook } from '../withCreateHook'
import { createUseMemo } from './createUseMemo'

const EMPTY: ReadonlyArray<any> = []

export const createUseCallback = <A extends readonly any[], B>(
  context: CreateHookContext,
  fn: Fn<A, B>,
  deps: ReadonlyArray<any>,
) => {
  const createUseCallbackHook = withCreateHook(
    createHook => [createHook(createUseMemo)] as const,
    ([useMemo], fn: Fn<A, B>, deps: ReadonlyArray<any> = EMPTY): Fn<A, B> =>
      useMemo<ReadonlyArray<any>, Fn<A, B>>(() => memoize(fn), deps),
  )

  return createUseCallbackHook(context, fn, deps)
}
