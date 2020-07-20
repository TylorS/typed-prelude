import { catchFailure, Effects, fail, FailEnv, PureEffect } from '@typed/effects'
import { Either, Left, mapLeft } from '@typed/either'
import { curry } from '@typed/lambda'
import { isNotUndefined } from '@typed/logic'
import { Just, Maybe, Nothing } from '@typed/maybe'
import { toString } from '@typed/strings'
import * as G from '../guard/Guard'

export interface Decoder<I, O> {
  readonly expected: string
  readonly decode: (i: I) => DecodeEffect<O>
}

export type InputOf<A> = A extends Decoder<infer R, any> ? R : never
export type TypeOf<A> = A extends Decoder<any, infer R> ? R : never

export type DecodeEffect<A> = Effects<DecodeFailure, A>

export const DecodeFailure = Symbol.for('DecodeFailure')
export interface DecodeFailure extends FailEnv<typeof DecodeFailure, DecodeError> {}

/**
 * An decoding error.
 * Note: Is and MUST continue to be JSON-safe
 */
export interface DecodeError {
  readonly key: Maybe<string>
  readonly expected: string
  readonly actual: string
  readonly errors: ReadonlyArray<DecodeError>
}

export namespace DecodeError {
  export const create = (
    expected: string,
    actual: string,
    options: { readonly key?: string; readonly errors?: ReadonlyArray<DecodeError> } = {},
  ): DecodeError => ({
    expected,
    actual,
    key: isNotUndefined(options.key) ? Just.of(options.key) : Nothing,
    errors: options.errors ?? [],
  })
}

export const decode: {
  <A, B>(decoder: Decoder<A, B>, input: A): Effects<DecodeFailure, B>
  <A, B>(decoder: Decoder<A, B>): (input: A) => Effects<DecodeFailure, B>
} = curry(__decode)

function* __decode<A, B>(decoder: Decoder<A, B>, input: A) {
  return yield* decoder.decode(input)
}

export namespace Decoder {
  export const fromGuard = <A>(guard: G.Guard<A>, expected: string): Decoder<unknown, A> => ({
    expected,
    *decode(i) {
      if (guard.is(i)) {
        return i
      }

      return yield* fail(DecodeFailure, DecodeError.create(expected, toString(i)))
    },
  })
}

export const decodeFailure = (e: DecodeError) => fail(DecodeFailure, e)

export function catchDecodeFailure<A>(effect: DecodeEffect<A>): PureEffect<Either<DecodeError, A>>
export function catchDecodeFailure<A, B>(
  effect: DecodeEffect<A>,
  onError: (error: DecodeError) => B,
): PureEffect<Either<readonly [DecodeError, B], A>>

export function* catchDecodeFailure<A, B = DecodeError>(
  effect: DecodeEffect<A>,
  onError?: (error: DecodeError) => B,
): PureEffect<Either<DecodeError | readonly [DecodeError, B], A>> {
  function* myEffect() {
    const x = yield* effect

    return Either.of<DecodeError, A>(x)
  }

  const either = yield* catchFailure(myEffect(), DecodeFailure, Left.of)

  return mapLeft((e) => (onError ? ([e, onError(e)] as const) : e), either)
}
