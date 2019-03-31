import { curry } from '@typed/lambda'

export const prepend = curry(<A>(value: A, list: A[]): A[] => [value].concat(list)) as {
  <A>(value: A, list: ReadonlyArray<A>): A[]
  <A>(value: A): (list: ReadonlyArray<A>) => A[]
}
