import { curry } from '../lambda'
import { isJust } from './isJust'
import { Maybe } from './Maybe'

export const race: {
  <A>(a: Maybe<A>, b: Maybe<A>): Maybe<A>
  <A>(a: Maybe<A>): (b: Maybe<A>) => Maybe<A>
} = curry(<A>(a: Maybe<A>, b: Maybe<A>): Maybe<A> => (isJust(a) ? a : b))
