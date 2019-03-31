import { curry } from '@typed/lambda'

export const dropLast = curry(
  <A>(quantity: number, list: ReadonlyArray<A>): A[] => list.slice(0, list.length - quantity),
) as {
  <A>(quantity: number, list: ReadonlyArray<A>): A[]
  <A>(quantity: number): (list: ReadonlyArray<A>) => A[]
}
