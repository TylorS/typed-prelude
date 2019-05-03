import { Arity1, curry } from '@typed/lambda'
import { map } from './map'
import { Maybe } from './Maybe'
import { withDefault } from './withDefault'

/**
 * Used for performing side-effects with a Maybe
 */
export const unwrap: {
  <A, B>(fn: Arity1<A, B>, maybe: Maybe<A>): B | null
  <A, B>(fn: Arity1<A, B>, maybe: Maybe<A>): B | null
} = curry(<A, B>(fn: Arity1<A, B>, maybe: Maybe<A>): B | null => withDefault(null, map(fn, maybe)))
