import { Env } from '@typed/env'
import { Effect, EffectIterator, EffectResources } from './Effect'

export const startEffect = <A extends Effect<never, any>>(
  effect: A,
): Env<EffectResources<A>, EffectIterator<A>> =>
  Env.create<EffectResources<A>, EffectIterator<A>>(cb => cb(effect[Symbol.iterator]() as any))
