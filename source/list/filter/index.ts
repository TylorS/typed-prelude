import { curry, Predicate } from '../../lambda'

export const filter: {
  <A>(predicate: Predicate<A>, list: A[]): A[]
  <A>(predicate: Predicate<A>): (list: A[]) => A[]
} = curry(<A>(predicate: Predicate<A>, list: A[]): A[] => list.filter(predicate))
