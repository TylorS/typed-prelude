import { Fn } from '@typed/lambda'
import { CreateHookContext, InitialValue } from '../types'
import { withCreateHook } from '../withCreateHook'
import { createUseCallback } from './createUseCallback'
import { createUseState } from './createUseState'

export const createUseReducer = <A, B>(
  context: CreateHookContext,
  reducer: Fn<[B, A], B>,
  seed: InitialValue<B>,
) => {
  const createUseReducerHook = withCreateHook(
    createHook => [createHook(createUseState), createHook(createUseCallback)] as const,
    ([useState, useCallback], reducer: Fn<[B, A], B>, seed: InitialValue<B>) => {
      const [state, setState] = useState(seed)
      const dispatch = useCallback((value: A) => setState(reducer(state, value)), [state])

      return [state, dispatch] as const
    },
  )

  return createUseReducerHook(context, reducer, seed)
}
