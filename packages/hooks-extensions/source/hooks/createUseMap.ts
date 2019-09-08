import { Pure } from '@typed/env'
import {
  CreateHookContext,
  createUseMemo,
  InitialValue,
  ValueOrUpdate,
  withCreateHook,
} from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { withMutations } from '@typed/map'
import { createUsePureState } from './createUsePureState'

export const createUseMap = <A, B>(
  context: CreateHookContext,
  initialValue: InitialValue<ReadonlyMap<A, B>> = new Map(),
) => {
  const createUseMapHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseMemo)] as const,
    ([useState, useMemo], initial: InitialValue<ReadonlyMap<A, B>>) => {
      const [map, setMap] = useState(initial)
      const updates = useMemo(set => updateMapFns<A, B>(set), [setMap])

      return [map, updates] as const
    },
  )

  return createUseMapHook(context, initialValue)
}

function updateMapFns<A, B>(
  setMap: (value: ValueOrUpdate<ReadonlyMap<A, B>>) => Pure<ReadonlyMap<A, B>>,
) {
  return {
    updateMap: setMap,
    withMutations: (fn: Arity1<Map<A, B>>) => setMap(withMutations(fn)),
  } as const
}
