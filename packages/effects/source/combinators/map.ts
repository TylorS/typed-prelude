import { Arity1 } from '@typed/lambda'
import { Effects } from '../Effect'

export function* map<E, A, B>(fn: Arity1<A, B>, effect: Effects<E, A>): Effects<E, B> {
  return fn(yield* effect)
}
