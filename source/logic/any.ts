import { curry, Predicate } from '@typed/lambda'

// tslint:disable-next-line:variable-name
export const any = curry(__any) as {
  <A>(predicate: Predicate<A>, list: A[]): boolean
  <A>(predicate: Predicate<A>): (list: A[]) => boolean
}

function __any<A>(predicate: Predicate<A>, list: A[]): boolean {
  for (const value of list) {
    if (predicate(value)) {
      return true
    }
  }

  return false
}
