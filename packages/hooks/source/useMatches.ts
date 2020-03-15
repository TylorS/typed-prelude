import { Match, oneOf } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { HookEffects } from './HookEffects'
import { useMemo } from './useMemo'

export function* useMatches<A, B>(
  value: A,
  matches: ReadonlyArray<Match<A, B>>,
): HookEffects<unknown, Maybe<B>> {
  const match = yield* useMemo(oneOf, [matches])
  const maybe: Maybe<B> = yield* useMemo(call, [value, match])

  return maybe
}

const call = <A, B>(value: A, match: Match<A, B>) => match(value)
