import { curry } from '../../lambda'

export const drop: {
  <A>(quantity: number, list: A[]): A[]
  <A>(quantity: number): (list: A[]) => A[]
} = curry(<A>(quantity: number, list: A[]): A[] => list.slice(quantity))
