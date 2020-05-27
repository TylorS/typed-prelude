import { curry } from '@typed/lambda'
import { NewType } from '@typed/new-type'
import { Validation } from '@typed/validation'

export interface Decoder<A> {
  readonly decode: (i: unknown) => Validation<DecodeError, A>
}

export type TypeOf<A> = A extends Decoder<infer R> ? R : never

export interface DecodeError {
  readonly message: string
  readonly path?: DecodeErrorPath
}

// period.spaced.path.segments.for.object.properties
export type DecodeErrorPath = NewType<string, { readonly DecodeErrorPath: unique symbol }>

export const decode: {
  <A>(decoder: Decoder<A>, input: unknown): Validation<DecodeError, A>
  <A>(decoder: Decoder<A>): (input: unknown) => Validation<DecodeError, A>
} = curry(__decode)

function __decode<A>(decoder: Decoder<A>, input: unknown): Validation<DecodeError, A> {
  return decoder.decode(input)
}
