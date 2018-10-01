import { curry } from '../../lambda'

export const append: {
  <A>(value: A, list: A[]): A[]
  <A>(value: A): (list: A[]) => A[]
} = curry(_append)

function _append<A>(value: A, list: A[]): A[] {
  return list.concat([value])
}
