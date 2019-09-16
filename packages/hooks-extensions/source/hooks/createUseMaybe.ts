import { CreateHookContext, createUseCallback, InitialValue, withCreateHook } from '@typed/hooks'
import { Just, Maybe, Nothing } from '@typed/maybe'
import { createUsePureState } from './createUsePureState'

export const createUseMaybe = <A>(
  context: CreateHookContext,
  maybe: InitialValue<Maybe<A>> = Nothing,
) => {
  const createUseMaybeHook = withCreateHook(
    createHook => [createHook(createUsePureState), createHook(createUseCallback)] as const,
    ([useState, useCallback], maybe: InitialValue<Maybe<A>> = Nothing) => {
      const [state, setState] = useState(maybe)
      const just = useCallback((value: A) => setState(Just.of(value)), [state])
      const clear = useCallback(() => setState(Nothing), [state])

      return [state, just, clear] as const
    },
  )

  return createUseMaybeHook(context, maybe)
}
