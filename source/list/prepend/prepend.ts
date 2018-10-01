import { curry } from '../../lambda'

export const prepend: {
  <A>(value: A, list: A[]): A[]
  <A>(value: A): (list: A[]) => A[]
} = curry(<A>(value: A, list: A[]): A[] => [value].concat(list))
