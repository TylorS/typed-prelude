import { TimerEnv } from '@typed/effects'
import {
  HookEffects,
  HookEnv,
  useMatches,
  useMemo,
  ChannelEffects,
  useEffectBy,
  UseRef,
} from '@typed/hooks'
import { Match } from '@typed/logic'
import { fromJust, isNothing, Maybe, Nothing } from '@typed/maybe'
import { useKeyManager } from './useKeyManager'
import { PatchEnv } from './Patch'
import { id } from '@typed/lambda'

export function useMatchManager<A, E, B>(
  matchAgainst: A,
  matches: ReadonlyArray<Match<A, () => HookEffects<E, B>>>,
): ChannelEffects<E & TimerEnv & HookEnv & PatchEnv<B, B>, Maybe<B>>

export function useMatchManager<A, E, B, C>(
  matchAgainst: A,
  matches: ReadonlyArray<Match<A, () => HookEffects<E, B>>>,
  initial: C,
): ChannelEffects<E & TimerEnv & HookEnv & PatchEnv<C, B>, Maybe<B>>

// TODO: Need to do this in a way that keeps the current version saved somewhere for reference
export function* useMatchManager<A, E, B, C>(
  matchAgainst: A,
  matches: ReadonlyArray<Match<A, (ref: UseRef<C>) => HookEffects<E, B>>>,
  initial?: C,
): ChannelEffects<E & TimerEnv & HookEnv & PatchEnv<C, B>, Maybe<B>> {
  const modifiedMatches = yield* useMemo(ms => ms.map(m => Match.map(c => [m, c] as const, m)), [
    matches,
  ])
  const match = yield* useMatches(matchAgainst, modifiedMatches)

  const [currentValue] = yield* useEffectBy([match], id, function*(maybe) {
    if (isNothing(maybe)) {
      return
    }

    const [m, computation] = fromJust(maybe)

    return yield* useKeyManager(m, computation, initial as C)
  })

  return currentValue ?? Nothing
}
