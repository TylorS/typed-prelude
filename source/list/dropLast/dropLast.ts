import { curry } from '../../lambda'

export const dropLast: {
  <A>(quantity: number, list: A[]): A[]
  <A>(quantity: number): (list: A[]) => A[]
} = curry(<A>(quantity: number, list: A[]): A[] => list.slice(0, list.length - quantity))
