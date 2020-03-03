import { Env } from '@typed/env/source'
import { Effect, EffectIterator } from './Effect'

export const startEffect = <A, B>(effect: Effect<A, B>): Env<A, EffectIterator<Effect<A, B>>> =>
  Env.fromIO(() => effect[Symbol.iterator]()) as Env<A, EffectIterator<Effect<A, B>>>
