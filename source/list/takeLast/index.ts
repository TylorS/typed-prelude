import { curry } from '../../lambda'
import { drop } from '../drop'

export const takeLast: {
  <A>(n: number, list: A[]): A[]
  <A>(n: number): (list: A[]) => A[]
} = curry(<A>(n: number, list: A[]) => drop(n >= 0 ? list.length - n : 0, list))
