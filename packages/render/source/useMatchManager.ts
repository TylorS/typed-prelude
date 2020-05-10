import { TimerEnv } from '@typed/effects'
import {
  ChannelEffects,
  HookEffects,
  HookEnv,
  useEffectBy,
  useMatches,
  useMemo,
  UseRef,
} from '@typed/hooks'
import { id } from '@typed/lambda'
import { Match } from '@typed/logic'
import { fromJust, isNothing, Just, Maybe, Nothing } from '@typed/maybe'
import { PatchEnv } from './Patch'
import { useKeyManager } from './useKeyManager'

export function* useMatchManager<A, E, B, C>(
  matchAgainst: A,
  matches: ReadonlyArray<Match<A, (ref: UseRef<C>[0], setRef: UseRef<C>[1]) => HookEffects<E, B>>>,
  initial?: C | null,
): ChannelEffects<E & TimerEnv & HookEnv & PatchEnv<C, B>, Maybe<B>> {
  const modifiedMatches = yield* useMemo(
    (ms) => ms.map((m) => Match.map((c) => [m, c] as const, m)),
    [matches],
  )
  const match = yield* useMatches(matchAgainst, modifiedMatches)
  const [currentValue] = yield* useEffectBy([match], id, function* (maybe) {
    if (isNothing(maybe)) {
      return Nothing
    }

    const [m, computation] = fromJust(maybe)

    return Just.of(yield* useKeyManager<E, B, C>(m, computation, initial))
  })

  return currentValue
}
