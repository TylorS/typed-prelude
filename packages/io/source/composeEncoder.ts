import { curry, pipe2 } from '@typed/lambda'
import { Encoder } from './encoder'
import { Type } from './types'

/**
 * Composes an encoder with a type through function composition Type >>> Encoder
 */
export const composeEncoder = curry(__composeEncoder) as {
  <A, B, C>(encoder: Encoder<A, B>, type: Type<C, A>): Type<C, B>
  <A, B>(encoder: Encoder<A, B>): <C>(type: Type<C, A>) => Type<C, B>
}

function __composeEncoder<A, B, C>(encoder: Encoder<A, B>, type: Type<C, A>): Type<C, B> {
  return {
    ...type,
    encode: pipe2(type.encode, encoder.encode),
  }
}
