import { isSet } from '@typed/logic'
import { Guard, TypeOf } from './Guard'
import { refinement } from './refinement'

export const Set: Guard<ReadonlySet<unknown>> = { is: isSet }

export const set = <A extends Guard<never>>(g: A) =>
  refinement(Set, (s): s is ReadonlySet<TypeOf<A>> => Array.from(s.values()).every(g.is))
