import { curry } from '@typed/lambda'
import { equals } from '@typed/logic'

const isZero = equals(0)

export const remove = curry(function remove<A>(index: number, amount: number, list: A[]): A[] {
  const length = list.length

  if (isZero(amount) || isZero(length) || index >= length) {
    return list
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
  <A>(index: number, amount: number, list: A[]): A[]
  (index: number, amount: number): <A>(list: A[]) => A[]
  (index: number): {
    <A>(amount: number, list: A[]): A[]
    (amount: number): <A>(list: A[]) => A[]
  }
}
