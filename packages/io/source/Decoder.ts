import { Effects, FailEnv, orFail, PureEffect } from '@typed/effects'
import { curry } from '@typed/lambda'
import { NewType } from '@typed/new-type'
import { Validation } from '@typed/validation'
import { IsNever } from './common'

export interface Decoder<E, I, O> {
  readonly decode: (
    i: I,
  ) => IsNever<E> extends true
    ? PureEffect<Validation<DecodeError, O>>
    : Effects<E, Validation<DecodeError, O>>
}

export const DecodeFailure = Symbol.for('DecodeFailure')
export type DecodeFailure = FailEnv<typeof DecodeFailure, ReadonlyArray<DecodeError>>

export interface DecodeError {
  readonly message: string
  readonly path?: DecodeErrorPath
}

// period.spaced.path.segments.for.object.properties
export type DecodeErrorPath = NewType<string, { readonly DecodeErrorPath: unique symbol }>

export namespace Decoder {
  export type Env<A> = A extends Decoder<infer R, any, any> ? R : never
  export type Input<A> = A extends Decoder<any, infer R, any> ? R : never
  export type Output<A> = A extends Decoder<any, any, infer R> ? R : never
}

export const decode: {
  <E, I, O>(decoder: Decoder<E, I, O>, value: I): Effects<E & DecodeFailure, O>
  <E, I, O>(decoder: Decoder<E, I, O>): (value: I) => Effects<E & DecodeFailure, O>
} = curry(__decode)

function* __decode<E, I, O>(decoder: Decoder<E, I, O>, input: I): Effects<E & DecodeFailure, O> {
  return yield* orFail(DecodeFailure, decoder.decode(input))
}
