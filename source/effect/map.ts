import { Arity1, curry } from '../lambda'
import { Effect } from './Effect'

export const map = curry(__map) as {
  <A, B, C extends {} = {}>(f: Arity1<A, B>, effect: Effect<A, C>): Effect<B, C>
  <A, B>(f: Arity1<A, B>): <C extends {} = {}>(effect: Effect<A, C>) => Effect<B, C>
}

function __map<A, B, C extends {} = {}>(f: Arity1<A, B>, effect: Effect<A, C>): Effect<B, C> {
  return Effect.create((cb, resources) => effect.runEffect((a, t) => cb(f(a), t), resources))
}
