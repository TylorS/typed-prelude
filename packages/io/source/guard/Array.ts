import { isArray } from '@typed/logic'
import { Guard, TypeOf } from './Guard'
import { refinement } from './refinement'

export const Array: Guard<ReadonlyArray<unknown>> = Guard.is(isArray)

export const array = <G extends Guard<never>>(g: G): Guard<ReadonlyArray<TypeOf<G>>> =>
  refinement(Array, (u): u is ReadonlyArray<TypeOf<G>> => u.every(g.is))
