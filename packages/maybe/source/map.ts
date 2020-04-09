import { curry } from '@typed/lambda'
import { chain } from './chain'
import { Maybe } from './Maybe'

/**
 * Applies a function to the value possibly contained in a `Maybe`. If the
 * maybe is a `Nothing` just the `Nothing` is returned.
 * @name map<A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
 */
export const map = curry(__map) as {
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B): (maybe: Maybe<A>) => Maybe<B>
}

function __map<A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B> {
  return chain((a) => Maybe.of(f(a)), maybe)
}
