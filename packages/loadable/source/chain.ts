import { Arity1, curry } from '@typed/lambda'
import { isDoneLoading } from './isDoneLoading'
import { Loadable, Loading } from './Loadable'

/**
 * Chain together loadable values
 */
export const chain: {
  <A, B>(fn: Arity1<A, Loadable<B>>, loadable: Loadable<A>): Loadable<B>
  <A, B>(fn: Arity1<A, Loadable<B>>): (loadable: Loadable<A>) => Loadable<B>
} = curry(__chain)

function __chain<A, B>(fn: Arity1<A, Loadable<B>>, loadable: Loadable<A>): Loadable<B> {
  return isDoneLoading(loadable) ? fn(loadable.loaded) : Loading
}
