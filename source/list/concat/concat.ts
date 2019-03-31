import { curry } from '@typed/lambda'

export const concat = curry((a, b) => a.concat(b)) as {
  <A>(head: ReadonlyArray<A>, tail: ReadonlyArray<A>): A[]
  <A>(head: ReadonlyArray<A>): (tail: ReadonlyArray<A>) => A[]
}
