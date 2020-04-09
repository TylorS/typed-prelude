import { Env, Resume } from '@typed/env'
import { Capabilities, Effect } from '../Effect'

export const startEffect = <A extends Effect<any, any>>(effect: A): Env<Capabilities<A>, A> => (
  _: Capabilities<A>,
) => Resume.create<A>((cb) => cb(effect[Symbol.iterator]() as A))
