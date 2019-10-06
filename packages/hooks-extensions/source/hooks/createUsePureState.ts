import {
  CreateHookContext,
  createUseMemo,
  createUseState,
  getUpdatedValue,
  InitialValue,
  ValueOrUpdate,
  withCreateHook,
} from '@typed/hooks'

import { Pure } from '@typed/env'

/* Use Pure for setting state since it is a side-effect. */
export const createUsePureState = <A>(
  context: CreateHookContext,
  initialState: InitialValue<A>,
) => {
  const createUsePureStateHook = withCreateHook(
    createHook => [createHook(createUseState), createHook(createUseMemo)] as const,
    ([useState, useMemo], initial: InitialValue<A>) => {
      const [state, setState] = useState<A>(initial)
      const setPureState = useMemo(
        _ => (update: ValueOrUpdate<A>): Pure<A> =>
          Pure.fromIO(() => setState(getUpdatedValue(state, update))),
        [state],
      )

      return [state, setPureState] as const
    },
  )

  return createUsePureStateHook(context, initialState)
}
