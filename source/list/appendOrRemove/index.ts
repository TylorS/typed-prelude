import { curry, id } from '@typed/lambda'
import { fromJust, isNothing } from '@typed/maybe'
import { append } from '../append/append'
import { findIndex } from '../findIndex'
import { remove } from '../remove'

export const appendOrRemove = curry(
  <A>(item: A, items: ReadonlyArray<A>): A[] => __appendOrRemove(item, items, id),
) as {
  <A>(item: A, items: ReadonlyArray<A>): A[]
  <A>(item: A): (items: ReadonlyArray<A>) => A[]
}

export const appendOrRemoveBy = curry(__appendOrRemove) as {
  <A, B = A>(item: A, items: ReadonlyArray<A>, comparison: (value: A) => B): A[]
  <A>(item: A, items: ReadonlyArray<A>): <B = A>(comparison: (value: A) => B) => A[]
  <A>(item: A): {
    <B = A>(items: ReadonlyArray<A>, comparison: (value: A) => B): A[]
    (items: ReadonlyArray<A>): <B = A>(comparison: (value: A) => B) => A[]
  }
}

function __appendOrRemove<A, B = A>(
  item: A,
  items: ReadonlyArray<A>,
  comparison: (value: A) => B,
): A[] {
  const b = comparison(item)
  const index = findIndex(a => comparison(a) === b, items)

  if (isNothing(index)) {
    return append(item, items)
  }

  return remove(fromJust(index), 1, items)
}
