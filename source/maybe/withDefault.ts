import { curry } from '@typed/lambda'
import { fromJust } from './fromJust'
import { isJust } from './isJust'
import { Maybe } from './Maybe'

/**
 * Given a default value and a Maybe returns the default value if the Maybe is a
 * Nothing or the value contained in a Just.
 * @name withDefault<A>(defaultValue: A, maybe: Maybe<A>): A
 */
export const withDefault = curry(__withDefault) as {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}

function __withDefault<A>(defaultValue: A, maybe: Maybe<A>): A {
  return isJust(maybe) ? fromJust(maybe) : defaultValue
}
