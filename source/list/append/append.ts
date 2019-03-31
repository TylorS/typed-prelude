import { curry } from '@typed/lambda'

export const append = curry(_append) as {
  <A>(value: A, list: ReadonlyArray<A>): A[]
  <A>(value: A): (list: ReadonlyArray<A>) => A[]
}

function _append<A>(value: A, list: ReadonlyArray<A>): A[] {
  return list.concat([value])
}
