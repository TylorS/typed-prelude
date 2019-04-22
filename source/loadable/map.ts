import { Arity1, curry, pipe } from '@typed/lambda'
import { chain } from './chain'
import { Loadable } from './Loadable'

/**
 * Map over a loadable value.
 */
export const map = curry(__map) as {
  <A, B>(fn: Arity1<A, B>, loadable: Loadable<A>): Loadable<B>
  <A, B>(fn: Arity1<A, B>): (loadable: Loadable<A>) => Loadable<B>
}

function __map<A, B>(fn: Arity1<A, B>, loadable: Loadable<A>): Loadable<B> {
  return chain(
    pipe(
      fn,
      Loadable.of,
    ),
    loadable,
  )
}
