import { curry, Predicate } from '../lambda'
import { not } from './not'

export const allPass: {
  <A>(predicates: Array<Predicate<A>>, value: A): boolean
  <A>(predicates: Array<Predicate<A>>): Predicate<A>
} = curry(__allPass)

function __allPass<A>(predicates: Array<Predicate<A>>, value: A): boolean {
  const predicateCount = predicates.length

  for (let i = 0; i < predicateCount; ++i) {
    if (not(predicates[i](value))) {
      return false
    }
  }

  return true
}
