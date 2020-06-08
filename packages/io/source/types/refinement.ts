import { Refinement } from '@typed/lambda'
import * as D from '../decoder'
import { Any, Type } from './Type'

export function refinement<A extends Any, B extends Type.Of<A>>(
  type: A,
  refinementF: Refinement<Type.Of<A>, B>,
  name: string = type.name,
): Type<B, Type.Encoding<A> extends Type.Of<A> ? B : Type.Encoding<A>> {
  const is = (u: unknown): u is B => type.is(u) && refinementF(u)

  return {
    name,
    is,
    ...D.Decoder.fromGuard({ is }, name),
    encode: type.encode,
  }
}
