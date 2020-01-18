import { Match, oneOf } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { useMemo } from './useMemo'

export function* useMatches<A, B>(value: A, matches: ReadonlyArray<Match<A, B>>) {
  const match = yield* useMemo(oneOf, [matches])
  const maybe: Maybe<B> = yield* useMemo((x, f) => f(x), [value, match] as const)

  return maybe
}
