import { curry } from '@typed/lambda'
import { isJust } from './isJust'
import { Maybe } from './Maybe'

export const race = curry(<A>(a: Maybe<A>, b: Maybe<A>): Maybe<A> => (isJust(a) ? a : b)) as {
  <A>(a: Maybe<A>, b: Maybe<A>): Maybe<A>
  <A>(a: Maybe<A>): (b: Maybe<A>) => Maybe<A>
}
