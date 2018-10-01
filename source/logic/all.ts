import { curry, Predicate } from '../lambda'
import { not } from './not'

export const all = curry(__all)

function __all<A>(predicate: Predicate<A>, list: A[]): boolean {
  for (const value of list) {
    if (not(predicate(value))) {
      return false
    }
  }

  return true
}
