import { Match, oneOf } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { HookEffects } from './types'
import { useCallback } from './useCallback'
import { useMemo } from './useMemo'

export function* useMatches<A, B>(
  value: A,
  matches: ReadonlyArray<Match<A, B>>,
): HookEffects<unknown, Maybe<B>> {
  const match = yield* useMemo(oneOf, [matches])
  const getMatch = yield* useCallback((value: A) => call(value, match), [match])

  return getMatch(value)
}

const call = <A, B>(value: A, match: Match<A, B>) => match(value)
