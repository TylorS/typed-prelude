import { Effects, get } from '@typed/effects'
import {
  HookEffects,
  HookEnv,
  runWithHooks,
  useMatches,
  useMemo,
  useMemoEffect,
} from '@typed/hooks'
import { Match } from '@typed/logic'
import { fromJust, isNothing, Just, Maybe } from '@typed/maybe'
import { HookManagerEnv } from './HookManagerEnv'

export function* useMatchManager<A, E, B>(
  matchAgainst: A,
  matches: ReadonlyArray<Match<A, () => HookEffects<E, B>>>,
): Effects<E & HookEnv & HookManagerEnv, Maybe<B>> {
  const { getEnvironmentByKey } = yield* get<E & HookEnv & HookManagerEnv>()
  const modifiedMatches = yield* useMemo(ms => ms.map(m => Match.map(c => [m, c] as const, m)), [
    matches,
  ])
  const match = yield* useMatches(matchAgainst, modifiedMatches)

  return yield* useMemoEffect(
    function*(maybeMatch): Effects<E & HookEnv, Maybe<B>> {
      if (isNothing(maybeMatch)) {
        return maybeMatch
      }

      const [m, computation] = fromJust(maybeMatch)
      const hookEnvironment = yield* getEnvironmentByKey(m)

      return Just.of(yield* runWithHooks(computation(), hookEnvironment))
    },
    [match],
  )
}
