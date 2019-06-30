import { Pure } from '@typed/env'
import { pipe } from '@typed/lambda'
import { toggleOrSet } from '@typed/logic'
import { usePureState } from './usePureState'

export function useBoolean(defaultValue: boolean = false): UseBoolean {
  const [state, setState] = usePureState(defaultValue)

  return [
    state,
    pipe(
      toggleOrSet,
      setState,
    ),
  ]
}

export type UseBoolean = [boolean, (bool?: boolean) => Pure<boolean>]
