import { Flatten, UnNest } from '@typed/common'
import { combine, Effect } from '@typed/effects'
import { fromRight, isRight, Right } from '@typed/either'
import { concat } from '@typed/validation'
import { Decoder } from '../Decoder'
import { Encoder } from '../Encoder'
import { Mixed, Type } from '../Type'
import { CombinedTypeEnv, shouldUseIdentity } from './helpers'

export type IntersectionType<
  E,
  A extends ReadonlyArray<Mixed>,
  Name extends string = string
> = Type<
  Name,
  E,
  UnNest<Flatten<DecoderInputConsList<A>, unknown>>,
  UnNest<Flatten<DecoderOutputConsList<A>, unknown>>,
  UnNest<Flatten<EncoderOutputConsList<A>, unknown>>
>

const getIntersectionName = (types: readonly Mixed[]): string =>
  types.map((t) => t.name).join(' & ')

export function intersection<A extends ReadonlyArray<Mixed>, Name extends string = string>(
  types: A,
  name: Name = getIntersectionName(types) as Name,
): IntersectionType<CombinedTypeEnv<A>, A, Name> {
  const is = (u: unknown) => types.every((t) => t.is(u))

  function* decode(i: unknown) {
    const decoded = yield* combine(...types.map((t) => t.decode(i)))

    if (decoded.every((d) => isRight(d))) {
      return decoded.reduce((acc, d) => ({ ...acc, ...fromRight(d as Right<any>) }), {})
    }

    return concat(...decoded)
  }

  return {
    name,
    is: is as IntersectionType<CombinedTypeEnv<A>, A>['is'],
    decode: decode as IntersectionType<CombinedTypeEnv<A>, A>['decode'],
    encode: (shouldUseIdentity(types)
      ? Effect.of
      : function* (a: Type.Of<IntersectionType<CombinedTypeEnv<A>, A, Name>>) {
          const encoded = yield* combine(...types.map((t) => t.encode(a)))

          return encoded.reduce((acc, e) => ({ ...acc, ...e }), {})
        }) as IntersectionType<CombinedTypeEnv<A>, A, Name>['encode'],
  }
}

type DecoderInputConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [Decoder.Input<T>, DecoderInputConsList<TS>]
  : unknown
type DecoderOutputConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [Decoder.Output<T>, DecoderOutputConsList<TS>]
  : unknown
type EncoderOutputConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [Encoder.Output<T>, EncoderOutputConsList<TS>]
  : unknown
