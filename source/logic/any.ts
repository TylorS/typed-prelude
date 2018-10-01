import { curry, Predicate } from '../lambda'

// tslint:disable-next-line:variable-name
export const any: {
  <A>(predicate: Predicate<A>, list: A[]): boolean
  <A>(predicate: Predicate<A>): (list: A[]) => boolean
} = curry(__any)

function __any<A>(predicate: Predicate<A>, list: A[]): boolean {
  for (const value of list) {
    if (predicate(value)) {
      return true
    }
  }

  return false
}
