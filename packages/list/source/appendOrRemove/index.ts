import { curry, id } from '@typed/lambda'
import { fromJust, isNothing } from '@typed/maybe'
import { append } from '../append/append'
import { findIndex } from '../findIndex'
import { remove } from '../remove'

/**
 * Append a value to a list if it does not exist or remove if it does exist.
 * Useful for toggling things on/off.
 *
 * @param item :: a
 * @param items :: [a]
 * @returns :: [a]
 */
export const appendOrRemove = curry(<A>(item: A, items: ReadonlyArray<A>): A[] =>
  __appendOrRemove(item, items, id),
) as {
  <A>(item: A, items: ReadonlyArray<A>): A[]
  <A>(item: A): (items: ReadonlyArray<A>) => A[]
}

/**
 * Append a value to a list if it does not exist or remove if it does exist.
 * Allows providing a custom comparison function.
 *
 * @param item :: a
 * @param items :: [a]
 * @param comparison :: (a -> b)
 * @returns :: [a]
 */
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
  const index = findIndex((a) => comparison(a) === b, items)

  if (isNothing(index)) {
    return append(item, items)
  }

  return remove(fromJust(index), 1, items)
}
