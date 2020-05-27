import { curry } from '@typed/lambda'

export interface Encoder<I, O> {
  readonly encode: (i: I) => O
}

export namespace Encoder {
  export type Input<A> = A extends Encoder<infer R, any> ? R : never
  export type Output<A> = A extends Encoder<any, infer R> ? R : never
}

export const encode: {
  <I, O>(encoder: Encoder<I, O>, input: I): O
  <I, O>(encoder: Encoder<I, O>): (input: I) => O
} = curry(__encode)

function __encode<I, O>(encoder: Encoder<I, O>, input: I): O {
  return encoder.encode(input)
}
