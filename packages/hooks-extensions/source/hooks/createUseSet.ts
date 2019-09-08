import { Pure } from '@typed/env'
import { CreateHookContext, createUseMemo, ValueOrUpdate, withCreateHook } from '@typed/hooks'
import { Fn, Predicate } from '@typed/lambda'
import { findIndex } from '@typed/list'
import { map } from '@typed/maybe'
import { add } from '@typed/set'
import { createUsePureState } from './createUsePureState'

export function createUseSet<A>(
  context: CreateHookContext,
  initialValue: ReadonlySet<A> = new Set(),
) {
  const createUseSetHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseMemo)] as const,
    ([useState, useMemo], value: ReadonlySet<A>) => {
      const [set, setSet] = useState(value)
      const updates = useMemo(createUpdateSet, [setSet, set, useMemo])

      return [set, updates] as const
    },
  )

  return createUseSetHook(context, initialValue)
}

function createUpdateSet<A>(
  setSet: (update: ValueOrUpdate<ReadonlySet<A>>) => Pure<ReadonlySet<A>>,
  set: ReadonlySet<A>,
  useMemo: <A extends readonly any[], B>(fn: Fn<A, B>, deps?: A | undefined) => B,
) {
  return {
    append: (value: A) => setSet(add(value)),
    includes: useMemo(_ => (value: A) => set.has(value), [set]),
    find: useMemo(
      set => (predicate: Predicate<A>) => {
        const list = Array.from(set)

        return map((index: number) => [list[index], index] as const, findIndex(predicate, list))
      },
      [set],
    ),
  } as const
}
