import { id } from '../../lambda'
import { equals } from '../../logic'

function __move<A>(fromIndex: number, toIndex: number, list: A[]): A[] {
  const length = list.length
  const newArray = Array(length)

  if (outOfBounds(length, toIndex) || outOfBounds(length, fromIndex)) {
    return list
  }

  for (let i = 0; i < length; ++i) {
    newArray[i] = list[findMovedIndex(i, fromIndex, toIndex)]
  }
}

function __findMovedIndex(i: number, fromIndex: number, toIndex: number): number {
  if (equals(i, toIndex)) {
    return fromIndex
  }

  return ifElse(
    () => lessThan(toIndex, fromIndex),
    ifElse(between(fromIndex, toIndex), id, increment),
    ifElse(between(toIndex, fromIndex), id, decrement),
    i,
  )
}

function outOfBounds(length: number, value: number) {
  return value < 0 || value >= length
}

function between(min: number, max: number): (num: number) => boolean {
  return or(lessThan(min), greaterThan(max))
}
