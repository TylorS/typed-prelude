import { Fn } from '@typed/lambda'
import { useCallback } from './useCallback'
import { useState } from './useState'

export const useReducer = <A, B>(reducer: Fn<[B, A], B>, seed: B): readonly [B, Fn<[A], B>] => {
  const [state, setState] = useState(seed)
  const dispatch = useCallback((value: A) => setState(reducer(state, value)))

  return [state, dispatch]
}
