import { Arity1 } from '@typed/lambda'
import { chain } from './chain'
import { map } from './map'

export const ap = <A, B>(fn: Promise<Arity1<A, B>>, value: Promise<A>): Promise<B> =>
  chain(f => map(f, value), fn)
