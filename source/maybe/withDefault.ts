import { curry } from '../lambda'
import { fromJust } from './fromJust'
import { isJust } from './isJust'
import { Maybe } from './Maybe'

/**
 * Given a default value and a Maybe returns the default value if the Maybe is a
 * Nothing or the value contained in a Just.
 * @name withDefault<A>(defaultValue: A, maybe: Maybe<A>): A
 */
export const withDefault: WithDefault = curry(__withDefault)

function __withDefault<A>(defaultValue: A, maybe: Maybe<A>): A {
  return isJust(maybe) ? fromJust(maybe) : defaultValue
}

export interface WithDefault {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}
