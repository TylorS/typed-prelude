import { curry, Predicate } from '../lambda'

export const anyPass: AnyPass = curry(__anyPass)

export type AnyPass = {
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
