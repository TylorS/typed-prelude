import { curry } from '../../lambda'

export const slice = curry(
  <A>(from: number, to: number, list: A[]): A[] => list.slice(from, to),
) as {
  <A>(from: number, to: number, list: A[]): A[]
  (from: number, to: number): <A>(list: A[]) => A[]
  (from: number): {
    <A>(to: number, list: A[]): A[]
    (to: number): <A>(list: A[]) => A[]
  }
}
