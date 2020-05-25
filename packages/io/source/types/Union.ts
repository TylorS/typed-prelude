import { combine, Effect } from '@typed/effects'
import { fromRight, isRight } from '@typed/either'
import { toString } from '@typed/strings'
import { concat } from '@typed/validation'
import { Decoder } from '../Decoder'
import { Encoder } from '../Encoder'
import { Mixed, Type } from '../Type'
import { CombinedTypeEnv, shouldUseIdentity } from './helpers'

export type UnionType<E, Name extends string, A extends ReadonlyArray<Mixed>> = Type<
  Name,
  E,
  Decoder.Input<A[number]>,
  Decoder.Output<A[number]>,
  Encoder.Output<A[number]>
>

const getUnionName = (types: readonly Mixed[]): string => types.map((t) => t.name).join(' | ')

export function union<
  A extends readonly [Mixed, Mixed, ...ReadonlyArray<Mixed>],
  Name extends string
>(types: A, name: Name = getUnionName(types) as Name): UnionType<CombinedTypeEnv<A>, Name, A> {
  const is = (a: unknown) => types.some((t) => t.is(a))

  function* decode(i: unknown) {
    const eithers = yield* combine(...types.map((t) => t.decode(i)))

    for (const either of eithers) {
      if (isRight(either)) {
        return fromRight(either)
      }
    }

    return concat(...eithers)
  }

  return {
    name,
    is: is as UnionType<CombinedTypeEnv<A>, Name, A>['is'],
    decode: decode as UnionType<CombinedTypeEnv<A>, Name, A>['decode'],
    encode: (shouldUseIdentity(types)
      ? Effect.of
      : function* (a) {
          for (const type of types) {
            if (type.is(a)) {
              return type.encode(a)
            }
          }

          throw new Error(`Unable to encode ${toString(a)}`)
        }) as UnionType<CombinedTypeEnv<A>, Name, A>['encode'],
  }
}
