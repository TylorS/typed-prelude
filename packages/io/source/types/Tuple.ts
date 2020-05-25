import { combine, Effects } from '@typed/effects'
import { fromRight, isRight, Left, Right } from '@typed/either'
import { isArray } from '@typed/logic'
import { toString } from '@typed/strings'
import { concat, Validation } from '@typed/validation'
import { DecodeError } from '../Decoder'
import { Mixed, Type } from '../Type'
import { CombinedTypeEnv } from './helpers'

export type TupleType<E, A extends ReadonlyArray<any>> = Type<'Tuple', E, A>

export function tuple<A extends ReadonlyArray<Mixed>>(
  types: A,
): TupleType<CombinedTypeEnv<A>, { readonly [K in keyof A]: Type.Output<A[K]> }> {
  type O = { readonly [K in keyof A]: Type.Output<A[K]> }

  const is = (u: unknown): u is O =>
    isArray(u) && u.length === types.length && u.every((v, i) => types[i].is(v))

  function* decode(u: unknown): Effects<CombinedTypeEnv<A>, Validation<DecodeError, O>> {
    if (is(u)) {
      const eithers = yield* combine(...u.map((v, i) => types[i].decode(v)))
      const successful = eithers.every((e) => isRight(e))

      return successful
        ? Right.of(eithers.map((e) => fromRight(e as Right<any>)))
        : concat(...eithers)
    }

    return Left.of([
      { message: `Expected [${types.map((t) => t.name).join(', ')}] but received: ${toString(u)}` },
    ])
  }

  function* encode(o: O) {
    return yield* combine(...o.map((v, i) => types[i].encode(v)))
  }

  return {
    name: 'Tuple',
    is,
    decode: decode as TupleType<CombinedTypeEnv<A>, O>['decode'],
    encode: encode as TupleType<CombinedTypeEnv<A>, O>['encode'],
  }
}
