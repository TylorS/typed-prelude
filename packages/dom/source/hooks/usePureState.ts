import { Pure } from '@typed/env'
import { equals } from '@typed/logic'
import { useState } from '../tagged'

export type PureState<A> = [A, <B extends A>(updateState: (state: A) => B) => Pure<B>]

export function usePureState<A>(defaultValue: A | (() => A)): PureState<A> {
  const [state, setState] = useState(defaultValue)
  const setPureState = <B extends A>(updateState: (state: A) => B) =>
    Pure.fromIO(() => {
      const updatedState = updateState(state)

      if (!equals(state, updatedState)) {
        setState(updatedState)
      }

      return updatedState
    })

  return [state, setPureState]
}
