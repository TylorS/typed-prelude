import { Env } from '@typed/env'
import { Resume } from '@typed/env/source/Resume'
import { Capabilities, Effect, IteratorOf } from './Effect'

export const startEffect = <A extends Effect<any, any>>(
  effect: A,
): Env<Capabilities<A>, IteratorOf<A>> => (_: Capabilities<A>) =>
  Resume.create<IteratorOf<A>>(cb => cb(effect[Symbol.iterator]() as IteratorOf<A>))
