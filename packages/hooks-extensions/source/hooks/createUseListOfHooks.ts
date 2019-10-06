import { Disposable } from '@typed/disposable'
import {
  CreateHookContext,
  createUseEffect,
  createUseMemo,
  HooksContext,
  withCreateHook,
} from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { map } from '@typed/list'
import { createUseHooksManager } from '../channels/HooksManagerChannel'

const contextListMap = new Map()

export function createUseListOfHooks<A, B, C>(
  context: CreateHookContext,
  fn: Arity1<A, B>,
  by: Arity1<A, C>,
  list: ReadonlyArray<A>,
) {
  const createManageListOfHooksHook = withCreateHook(
    createHook =>
      [
        createHook(createUseMemo),
        createHook(createUseHooksManager),
        createHook(createUseEffect),
      ] as const,
    (
      [useMemo, useHooksManager, useEffect],
      fn: Arity1<A, B>,
      by: Arity1<A, C>,
      list: ReadonlyArray<A>,
    ): ReadonlyArray<B> => {
      const { withHooks } = useHooksManager()
      const contextMap = useMemo(
        _ =>
          new Map<
            C,
            Arity1<A, B> & {
              readonly context: HooksContext
            }
          >(),
        [withHooks],
      )

      useEffect(cleanupContextMap, { args: [contextMap, useMemo(map(by), [list])] })

      const values = list.map((value: A) => {
        const key = by(value)

        if (!contextMap.has(key)) {
          contextMap.set(key, withHooks(fn))
        }

        const f = contextMap.get(key)!

        contextListMap.set(key, f)

        return f(value)
      })

      return values
    },
  )

  return createManageListOfHooksHook(context, fn, by, list)
}

function cleanupContextMap<A, B, C>(
  contextMap: Map<
    C,
    Arity1<A, B> & {
      readonly context: HooksContext
    }
  >,
  keys: C[],
) {
  for (const key of Array.from(contextMap.keys())) {
    if (!keys.includes(key)) {
      const fn = contextMap.get(key)

      if (fn) {
        fn.context.dispose()
        contextMap.delete(key)
      }
    }
  }

  return Disposable.None
}
