import { Arity1, curry } from '@typed/lambda'
import { chain } from './chain'
import { Loadable } from './Loadable'
import { map } from './map'

export const ap: {
  <A, B>(fn: Loadable<Arity1<A, B>>, value: Loadable<A>): Loadable<B>
  <A, B>(fn: Loadable<Arity1<A, B>>): (value: Loadable<A>) => Loadable<B>
} = curry(__ap)

function __ap<A, B>(fn: Loadable<Arity1<A, B>>, value: Loadable<A>): Loadable<B> {
  return chain(f => map(f, value), fn)
}
