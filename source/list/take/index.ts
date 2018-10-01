import { curry } from '../../lambda'

export const take: {
  <A>(n: number, list: A[]): A[]
  <A>(n: number): (list: A[]) => A[]
} = curry(<A>(n: number, list: A[]) => list.slice(0, n < 0 ? Infinity : n))
