import { Pure } from '@typed/env'
import {
  CreateHookContext,
  createUseMemo,
  InitialValue,
  ValueOrUpdate,
  withCreateHook,
} from '@typed/hooks'
import { Tuple } from '@typed/tuple'
import { createUsePureState } from './createUsePureState'

const setFirst = <A, B>(setTuple: (value: ValueOrUpdate<Tuple<A, B>>) => Pure<Tuple<A, B>>) => (
  value: A,
) => setTuple(([, b]) => [value, b])

const setSecond = <A, B>(setTuple: (value: ValueOrUpdate<Tuple<A, B>>) => Pure<Tuple<A, B>>) => (
  value: B,
) => setTuple(([a]) => [a, value])

export const createUseTuple = <A, B>(
  context: CreateHookContext,
  initialValue: InitialValue<Tuple<A, B>>,
) => {
  const createUseTupleHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseMemo)] as const,
    ([useState, useMemo], initialValue: InitialValue<Tuple<A, B>>) => {
      const [tuple, setTuple] = useState(initialValue)
      const first = useMemo(setFirst, [setTuple])
      const second = useMemo(setSecond, [setTuple])

      return [tuple, first, second] as const
    },
  )

  return createUseTupleHook(context, initialValue)
}
