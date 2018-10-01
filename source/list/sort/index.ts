import { ComparisonNumbers, curry } from '../../lambda'

export const sort: {
  <A>(sortFn: SortFn<A>, list: A[]): A[]
  <A>(sortFn: SortFn<A>): (list: A[]) => A[]
} = curry(<A>(sortFn: SortFn<A>, list: A[]): A[] => list.slice().sort(sortFn))

export type SortFn<A> = (a: A, b: A) => ComparisonNumbers
