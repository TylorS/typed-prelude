import { TimerEnv } from '@typed/effects'
import {
  ChannelEffects,
  HookEffects,
  HookEnv,
  useEffectBy,
  useMatches,
  useMemo,
} from '@typed/hooks'
import { id } from '@typed/lambda'
import { Match } from '@typed/logic'
import { fromJust, isNothing, Just, Maybe, Nothing } from '@typed/maybe'
import { PatchEnv } from '@typed/render'
import { VNode } from './domain'
import { useKeyManager } from './useKeyManager'

export function* useMatchManager<A, E, B extends VNode>(
  matchAgainst: A,
  matches: ReadonlyArray<Match<A, () => HookEffects<E, B>>>,
): ChannelEffects<E & TimerEnv & HookEnv & PatchEnv<VNode, B>, Maybe<B>> {
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

    return Just.of(yield* useKeyManager<E, VNode>(m, computation))
  })

  return currentValue as Maybe<B>
}
