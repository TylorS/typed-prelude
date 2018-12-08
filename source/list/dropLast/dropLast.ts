import { curry } from '../../lambda'

export const dropLast = curry(
  <A>(quantity: number, list: A[]): A[] => list.slice(0, list.length - quantity),
) as {
  <A>(quantity: number, list: A[]): A[]
  <A>(quantity: number): (list: A[]) => A[]
}
