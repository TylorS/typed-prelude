import { curry } from '@typed/lambda'

export const drop = curry(
  <A>(quantity: number, list: ReadonlyArray<A>): A[] => list.slice(quantity),
) as {
  <A>(quantity: number, list: ReadonlyArray<A>): A[]
  <A>(quantity: number): (list: ReadonlyArray<A>) => A[]
}
