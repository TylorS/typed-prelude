import { curry } from '@typed/lambda'

/**
 * Replace a value at a given index
 * @param index :: int
 * @param value :: a
 * @param list :: [a]
 * @returns :: [a]
 */
export const update = curry(function update<A>(
  index: number,
  value: A,
  list: ReadonlyArray<A>,
): A[] {
  const length = list.length
  const newList = list.slice()

  if (length === 0 || index < 0 || index >= length) {
    return newList
  }

  newList[index] = value

  return newList
}) as {
  <A>(index: number, value: A, list: ReadonlyArray<A>): A[]
  <A>(index: number, value: A): (list: ReadonlyArray<A>) => A[]
  (index: number): {
    <A>(value: A, list: ReadonlyArray<A>): A[]
    <A>(value: A): (list: ReadonlyArray<A>) => A[]
  }
}
