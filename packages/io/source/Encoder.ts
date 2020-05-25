import { Effects, PureEffect } from '@typed/effects'
import { curry } from '@typed/lambda'
import { IsNever } from './common'

export interface Encoder<E, I, O> {
  readonly encode: (i: I) => IsNever<E> extends true ? PureEffect<O> : Effects<E, O>
}

export namespace Encoder {
  export type Env<A> = A extends Encoder<infer R, any, any> ? R : never
  export type Input<A> = A extends Encoder<any, infer R, any> ? R : never
  export type Output<A> = A extends Encoder<any, any, infer R> ? R : never
}

export const encode: {
  <E, I, O>(encoder: Encoder<E, I, O>, input: I): Effects<E, O>
  <E, I, O>(encoder: Encoder<E, I, O>): (input: I) => Effects<E, O>
} = curry(__encode)

function* __encode<E, I, O>(encoder: Encoder<E, I, O>, input: I): Effects<E, O> {
  return yield* encoder.encode(input)
}
