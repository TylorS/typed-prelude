import { Effect, sequence } from '@typed/effects'
import { fromRight, isLeft, isRight, Left, map, Right } from '@typed/either'
import { isRecord } from '@typed/logic'
import { hasOwnProperty, keysOf } from '@typed/objects'
import { concat } from '@typed/validation'
import { Decoder } from '../Decoder'
import { Encoder } from '../Encoder'
import { Type } from '../Type'
import { EnvsOfProps, Props } from './helpers'

export type UnknownRecordType<E> = Type<'UnknownRecord', E, Readonly<Record<PropertyKey, unknown>>>

export const Record: UnknownRecordType<unknown> = {
  name: 'UnknownRecord',
  is: isRecord,
  *decode(i) {
    if (isRecord(i)) {
      return Right.of(i as Readonly<Record<PropertyKey, unknown>>)
    }

    return Left.of([{ message: `Expected 'Readonly<Record<PropertyKey, unknown>>'` }])
  },
  encode: Effect.of,
}

export type RecordType<E, Name extends string, A extends Props<any>> = Type<
  Name,
  E & EnvsOfProps<A>,
  { readonly [K in keyof A]: Decoder.Output<A[K]> },
  { readonly [K in keyof A]: Decoder.Input<A[K]> }
>

export function record<A extends Props<any>, Name extends string>(
  props: A,
  name: Name,
): RecordType<EnvsOfProps<A>, Name, A> {
  function* decode(i: unknown) {
    const either = yield* Record.decode(i)

    if (isLeft(either)) {
      return either
    }

    const obj = fromRight(either)
    const propsToCheck = keysOf(props)
    const keyValuePairs = yield* sequence(function* (k) {
      const either = yield* props[k as keyof A].decode(obj[k as any])

      return map((v) => [k, v] as const, either)
    }, propsToCheck)

    if (keyValuePairs.every((kv) => isRight(kv))) {
      return Object.fromEntries(
        keyValuePairs.map((kv) => fromRight(kv as Right<readonly [keyof A, any]>)),
      )
    }

    return concat(...keyValuePairs)
  }

  function* encode(a: { readonly [K in keyof A]?: Encoder.Input<A[K]> }) {
    const record = {} as { [K in keyof A]?: Encoder.Output<A[K]> }

    // tslint:disable-next-line:forin
    for (const k in keysOf(a)) {
      record[k] = yield* props[k].encode(a[k])
    }

    return record
  }

  function is(a: unknown) {
    if (!Record.is(a)) {
      return false
    }

    for (const k of keysOf(props)) {
      if (!hasOwnProperty(k, props) || !props[k as keyof A].is((a as A)[k as keyof A])) {
        return false
      }
    }

    return true
  }

  return {
    name,
    is: is as RecordType<EnvsOfProps<A>, Name, A>['is'],
    decode: decode as RecordType<EnvsOfProps<A>, Name, A>['decode'],
    encode: encode as RecordType<EnvsOfProps<A>, Name, A>['encode'],
  }
}
