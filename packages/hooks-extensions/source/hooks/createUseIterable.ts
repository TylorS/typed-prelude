import { Pure } from '@typed/env'
import {
  CreateHookContext,
  createUseMemo,
  InitialValue,
  ValueOrUpdate,
  withCreateHook,
} from '@typed/hooks'
import { append, contains, enumerate } from '@typed/iterable'
import { Fn, Predicate } from '@typed/lambda'
import { Just, Nothing } from '@typed/maybe'
import { createUsePureState } from './createUsePureState'

export const createUseIterable = <A>(
  context: CreateHookContext,
  initialValue: InitialValue<Iterable<A>>,
) => {
  const createHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseMemo)] as const,
    ([useState, useMemo], initial: InitialValue<Iterable<A>>) => {
      const [list, setIterable] = useState<Iterable<A>>(initial)
      const updateFns = useMemo(createUpdateFns, [setIterable, list, useMemo])

      return [list, updateFns] as const
    },
  )

  return createHook(context, initialValue)
}

function createUpdateFns<A>(
  updateIterable: (value: ValueOrUpdate<Iterable<A>>) => Pure<Iterable<A>>,
  iterable: Iterable<A>,
  useMemo: <A extends readonly any[], B>(fn: Fn<A, B>, deps?: A | undefined) => B,
) {
  return {
    append: (value: A) => updateIterable(append(value)),
    includes: useMemo(_ => (value: A) => contains(value, iterable), [iterable]),
    find: useMemo(
      _ => (predicate: Predicate<A>) => {
        for (const tuple of enumerate(iterable)) {
          if (predicate(tuple[0])) {
            return Just.of(tuple)
          }
        }

        return Nothing
      },
      [iterable],
    ),
    updateList: updateIterable,
  } as const
}
