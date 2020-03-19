import { Env } from '@typed/env'
import { Resume } from '@typed/env/source/Resume'
import { Capabilities, Effect } from './Effect'

export const startEffect = <A extends Effect<any, any>>(effect: A): Env<Capabilities<A>, A> => (
  _: Capabilities<A>,
) => Resume.create<A>(cb => cb(effect[Symbol.iterator]() as A))
