import { curry } from '@typed/lambda'

/**
 * Insert a value at a given index
 * @param index :: int
 * @param value :: a
 * @param list :: [a]
 * @returns :: [a]
 */
export const insert = curry(__insert) as {
  <A>(index: number, value: A, list: ReadonlyArray<A>): A[]
  <A>(index: number, value: A): (list: ReadonlyArray<A>) => A[]
  <A>(index: number): {
    (value: A, list: A[]): A[]
    (value: A): (list: A[]) => A[]
  }
}

function __insert<A>(index: number, value: A, list: ReadonlyArray<A>): A[] {
  const length = list.length

  if (length === 0) {
    return [value]
  }

  const newList = []
  let i = 0

  for (; i < index; ++i) {
    newList[i] = list[i]
  }

  newList[i++] = value

  for (; i <= length; ++i) {
    newList[i] = list[i - 1]
  }

  return newList
}
