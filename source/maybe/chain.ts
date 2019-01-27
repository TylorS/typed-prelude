import { curry } from '@typed/lambda'
import { fromJust } from './fromJust'
import { isNothing } from './isNothing'
import { Maybe } from './Maybe'

/**
 * Maps a `Maybe` to another `Maybe`.
 * @name chain<A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
 */
export const chain = curry(__chain) as {
  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
}

function __chain<A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B> {
  return isNothing(maybe) ? maybe : f(fromJust(maybe))
}
