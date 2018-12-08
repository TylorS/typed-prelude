import { curry } from '../../lambda'
import { drop } from '../drop'

export const takeLast = curry(<A>(n: number, list: A[]) =>
  drop(n >= 0 ? list.length - n : 0, list),
) as {
  <A>(n: number, list: A[]): A[]
  <A>(n: number): (list: A[]) => A[]
}
