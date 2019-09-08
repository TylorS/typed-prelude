import { Pure } from '@typed/env'
import {
  CreateHookContext,
  createUseMemo,
  InitialValue,
  useMemo,
  ValueOrUpdate,
  withCreateHook,
} from '@typed/hooks'
import { Predicate } from '@typed/lambda'
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
      const updateFns = useMemo(createUpdateFns, [setList, list])

      return [list, updateFns] as const
    },
  )

  return createHook(context, initialValue)
}

function createUpdateFns<A>(
  updateList: (value: ValueOrUpdate<ReadonlyArray<A>>) => Pure<ReadonlyArray<A>>,
  list: ReadonlyArray<A>,
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
