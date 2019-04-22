import { Arity1, curry } from '@typed/lambda'
import { isDoneLoading } from './isDoneLoading'
import { Loadable, Loaded } from './Loadable'

/**
 * Unwrap a loadable value
 */
export const unwrap: {
  <A, B>(fn: Arity1<A, B>, loadable: Loaded<A>): B
  <A, B>(fn: Arity1<A, B>, loadable: Loadable<A>): B | null

  <A, B>(fn: Arity1<A, B>): {
    (loadable: Loaded<A>): B
    (loadable: Loadable<A>): B | null
  }
} = curry(unwrapLoadable)

function unwrapLoadable<A, B>(fn: Arity1<A, B>, loadable: Loaded<A>): B
function unwrapLoadable<A, B>(fn: Arity1<A, B>, loadable: Loadable<A>): B | null
function unwrapLoadable<A, B>(fn: Arity1<A, B>, loadable: Loadable<A>): B | null {
  return isDoneLoading(loadable) ? fn(loadable.loaded) : null
}
