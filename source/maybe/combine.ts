import { curry } from '@typed/lambda'
import { combineArray } from './combineArray'
import { Maybe } from './Maybe'

/**
 * Applies a function with the values contained in 2 `Maybes` if both are
 * `Just`s. If either `Maybe`s are `Nothing` then `Nothing` is returned.
 * @name combine<A, B, C>(f: (a: A, b: B) => C, a: Maybe<A>, b: Maybe<B>): Maybe<C>
 */
export const combine = curry(__combine) as {
  <A, B, C>(f: (valueA: A, valueB: B) => C, maybeA: Maybe<A>, maybeB: Maybe<B>): Maybe<C>
  <A, B, C>(f: (valueA: A, valueB: B) => C, maybeA: Maybe<A>): (maybeB: Maybe<B>) => Maybe<C>

  <A, B, C>(f: (valueA: A, valueB: B) => C): {
    (maybeA: Maybe<A>, maybeB: Maybe<B>): Maybe<C>
    (maybeA: Maybe<A>): (maybeB: Maybe<B>) => Maybe<C>
  }
}

function __combine<A, B, C>(
  f: (valueA: A, valueB: B) => C,
  maybeA: Maybe<A>,
  maybeB: Maybe<B>,
): Maybe<C> {
  return combineArray(f, [maybeA, maybeB])
}
