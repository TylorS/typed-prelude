import { curry } from '@typed/lambda'
import { isJust } from './isJust'
import { Maybe } from './Maybe'

/**
 * Returns the left-most non-`Nothing` value if there is one, or returns
 * `Nothing`
 * @name alt<A>(x: Maybe<A>, y: Maybe<A>): Maybe<A>
 */
export const alt = curry(__alt) as {
  <A>(x: Maybe<A>, y: Maybe<A>): Maybe<A>
  <A>(x: Maybe<A>): (y: Maybe<A>) => Maybe<A>
}

function __alt<A>(x: Maybe<A>, y: Maybe<A>): Maybe<A> {
  return isJust(x) ? x : y
}
