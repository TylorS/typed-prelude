import { execPure } from '@typed/env'
import { Match } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { useDisposable } from './useDisposable'
import { usePureState } from './usePureState'

export function useMatch<A, B>(match: Match<A, B>, value: A): Maybe<B> {
  const [matchedValue, setMatchedValue] = usePureState(() => match(value))

  useDisposable(() => execPure(setMatchedValue(() => match(value))), [value])

  return matchedValue
}
