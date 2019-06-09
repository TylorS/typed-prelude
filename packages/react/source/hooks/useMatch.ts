import { execPure } from '@typed/env'
import { Match } from '@typed/logic'
import { Maybe, Nothing } from '@typed/maybe'
import { isNullOrUndefined } from 'util'
import { useDisposable } from './useDisposable'
import { usePureState } from './usePureState'

export function useMatch<A, B>(match: Match<A, B>, value: A | undefined | null): Maybe<B> {
  const [matchedValue, setMatchedValue] = usePureState(
    isNullOrUndefined(value) ? Nothing : match(value),
  )

  useDisposable(
    () => execPure(setMatchedValue(() => (isNullOrUndefined(value) ? Nothing : match(value)))),
    [value],
  )

  return matchedValue
}
