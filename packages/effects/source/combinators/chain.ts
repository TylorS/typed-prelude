import { Effects } from '../Effect'

export function* chain<A, E1, B, E2>(
  f: (a: A) => Effects<E1, B>,
  effect: Effects<E2, A>,
): Effects<E1 & E2, B> {
  const a = yield* effect
  const b = yield* f(a)

  return b
}
