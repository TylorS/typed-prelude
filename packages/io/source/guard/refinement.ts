import { Refinement } from '@typed/lambda'
import { Guard } from './Guard'

export function refinement<A, B extends A>(from: Guard<A>, refinement: Refinement<A, B>): Guard<B> {
  return {
    is: (u): u is B => from.is(u) && refinement(u),
  }
}
