import { curry } from '@typed/lambda'
import { equals } from '@typed/logic'

const isZero = equals(0)

/**
 * Remove values from a list at a given index.
 * @param index :: int
 * @param amount :: int
 * @param list :: [a]
 * @returns :: [a]
 */
export const remove = curry(function remove<A>(
  index: number,
  amount: number,
  list: ReadonlyArray<A>,
): A[] {
  const length = list.length

  if (isZero(amount) || isZero(length) || index >= length) {
    return list.slice()
  }

  if (isZero(index) && amount >= length) {
    return []
  }

  const newList = Array(length - Math.abs(index) - 1)

  for (let i = 0; i < index; ++i) {
    newList[i] = list[i]
  }

  for (let i = index + amount; i < length; ++i) {
    newList[i - amount] = list[i]
  }

  return newList
}) as {
  <A>(index: number, amount: number, list: ReadonlyArray<A>): A[]
  (index: number, amount: number): <A>(list: ReadonlyArray<A>) => A[]
  (index: number): {
    <A>(amount: number, list: ReadonlyArray<A>): A[]
    (amount: number): <A>(list: ReadonlyArray<A>) => A[]
  }
}
