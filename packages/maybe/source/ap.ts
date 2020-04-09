import { curry } from '@typed/lambda'
import { chain } from './chain'
import { map } from './map'
import { Maybe } from './Maybe'

/**
 * Applies the function contained in a `Maybe` to the value contained in a
 * second `Maybe`.
 * @name ap<A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B>
 */
export const ap = curry(__ap) as {
  <A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B>
  <A, B>(fn: Maybe<(value: A) => B>): (value: Maybe<A>) => Maybe<B>
}

function __ap<A, B>(fn: Maybe<(value: A) => B>, maybe: Maybe<A>): Maybe<B> {
  return chain((f) => map(f, maybe), fn)
}
