import { Pure } from '@typed/env'
import {
  CreateHookContext,
  createUseMemo,
  InitialValue,
  ValueOrUpdate,
  withCreateHook,
} from '@typed/hooks'
import { Fn, Predicate } from '@typed/lambda'
import { append, findIndex, includes } from '@typed/list'
import { map } from '@typed/maybe'
import { createUsePureState } from './createUsePureState'

const emptyList = (): any[] => []

export const createUseList = <A>(
  context: CreateHookContext,
  initialValue: InitialValue<ReadonlyArray<A>> = emptyList,
) => {
  const createHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseMemo)] as const,
    ([useState, useMemo], initial: InitialValue<ReadonlyArray<A>>) => {
      const [list, setList] = useState<ReadonlyArray<A>>(initial)
      const updateFns = useMemo(createUpdateFns, [setList, list, useMemo])

      return [list, updateFns] as const
    },
  )

  return createHook(context, initialValue)
}

function createUpdateFns<A>(
  updateList: (value: ValueOrUpdate<ReadonlyArray<A>>) => Pure<ReadonlyArray<A>>,
  list: ReadonlyArray<A>,
  useMemo: <A extends readonly any[], B>(fn: Fn<A, B>, deps?: A | undefined) => B,
) {
  return {
    append: (value: A) => updateList(append(value)),
    includes: useMemo(_ => (value: A) => includes(value, list), [list]),
    find: useMemo(
      _ => (predicate: Predicate<A>) =>
        map((index: number) => [list[index], index] as const, findIndex(predicate, list)),
      [list],
    ),
    updateList,
  } as const
}
