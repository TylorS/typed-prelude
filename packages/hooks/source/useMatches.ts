import { co, Effects } from '@typed/effects'
import { Match, oneOf } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { HookEnv } from './HookEnvironment'
import { useMemo } from './useMemo'

export const useMatches: <A, B>(
  value: A,
  matches: ReadonlyArray<Match<A, B>>,
) => Effects<HookEnv, Maybe<B>> = co(function* useMatches<A, B>(
  value: A,
  matches: ReadonlyArray<Match<A, B>>,
) {
  const match = yield* useMemo(oneOf, [matches])
  const maybe: Maybe<B> = yield* useMemo(call, [value, match])

  return maybe
})

const call = <A, B>(value: A, match: Match<A, B>) => match(value)
