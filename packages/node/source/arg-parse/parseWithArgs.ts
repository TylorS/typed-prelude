import { Effects, runWith } from '@typed/effects'

export function* runWithArgs<E, A>(
  effect: Effects<E, A>,
  args: readonly string[],
): Effects<Omit<E, 'args'>, A> {
  return yield* runWith(effect, { args })
}
