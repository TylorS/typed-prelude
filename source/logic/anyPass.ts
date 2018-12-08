import { curry, Predicate } from '../lambda'

export const anyPass = curry(__anyPass) as {
  <A>(predicates: Array<Predicate<A>>, value: A): boolean
  <A>(predicates: Array<Predicate<A>>): (value: A) => boolean
}

function __anyPass<A>(predicates: Array<Predicate<A>>, value: A): boolean {
  for (const predicate of predicates) {
    if (predicate(value)) {
      return true
    }
  }

  return false
}
