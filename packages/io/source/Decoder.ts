import { Effects, FailEnv, orFail } from '@typed/effects'
import { curry } from '@typed/lambda'
import { NewType } from '@typed/new-type'

export interface Decoder<A> {
  readonly decode: (i: unknown) => A
}

export const DecodeFailure = Symbol.for('DecodeFailure')
export type DecodeFailure = FailEnv<typeof DecodeFailure, ReadonlyArray<DecodeError>>

export type DecoderEnv = {
  readonly decoderContext: DecoderContext
}

export interface DecodeError {
  readonly message: string
  readonly path?: DecodeErrorPath
}

// period.spaced.path.segments.for.object.properties
export type DecodeErrorPath = NewType<string, { readonly DecodeErrorPath: unique symbol }>

export namespace Decoder {
  export type Value<A> = A extends Decoder<infer R> ? R : never
}

export const decode: {
  <E, I, O>(decoder: Decoder<I, O>, value: I): Effects<E & DecodeFailure, O>
  <E, I, O>(decoder: Decoder<I, O>): (value: I) => Effects<E & DecodeFailure, O>
} = curry(__decode)

function* __decode<E, I, O>(decoder: Decoder<I, O>, input: I): Effects<E & DecodeFailure, O> {
  return yield* orFail(DecodeFailure, decoder.decode(input))
}
