import { Effect, EffectIterator } from './Effect'

export const startEffect = <A extends Effect<any, any, any>>(effect: A): EffectIterator<A> =>
  effect[Symbol.iterator]() as EffectIterator<A>
