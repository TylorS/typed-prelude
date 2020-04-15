import { Effects } from '@typed/effects'
import {
  HookEffects,
  HookEnv,
  HooksManagerEnv,
  useMatches,
  useMemo,
  useMemoEffect,
} from '@typed/hooks'
import { Match } from '@typed/logic'
import { fromJust, isNothing, Just, Maybe, Nothing } from '@typed/maybe'
import { useKeyManager } from './useKeyManager'

export function* useMatchManager<A, E, B>(
  matchAgainst: A,
  matches: ReadonlyArray<Match<A, () => HookEffects<E, B>>>,
): Effects<E & HookEnv & HooksManagerEnv, Maybe<B>> {
  const modifiedMatches = yield* useMemo(
    (ms) => ms.map((m) => Match.map((c) => [m, c] as const, m)),
    [matches],
  )
  const match = yield* useMatches(matchAgainst, modifiedMatches)

  return yield* useMemoEffect(
    function* (maybeMatch): Effects<E & HookEnv & HooksManagerEnv, Maybe<B>> {
      if (isNothing(maybeMatch)) {
        return Nothing
      }

      const [m, computation] = fromJust(maybeMatch)

      return Just.of(yield* useKeyManager(m, computation()))
    },
    [match],
  )
}
