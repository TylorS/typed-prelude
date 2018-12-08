import { ComparisonNumbers, curry } from '../../lambda'

export const sort = curry(<A>(sortFn: SortFn<A>, list: A[]): A[] => list.slice().sort(sortFn)) as {
  <A>(sortFn: SortFn<A>, list: A[]): A[]
  <A>(sortFn: SortFn<A>): (list: A[]) => A[]
}

export type SortFn<A> = (a: A, b: A) => ComparisonNumbers
