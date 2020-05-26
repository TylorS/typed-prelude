import { sequence } from '@typed/effects'
import { fromRight, isLeft, isRight, map, Right } from '@typed/either'
import { hasOwnProperty, keysOf } from '@typed/objects'
import { concat } from '@typed/validation'
import { Decoder } from '../Decoder'
import { Encoder } from '../Encoder'
import { Type } from '../Type'
import { EnvsOfProps, Props } from './helpers'
import { Record } from './Record'

export type PartialType<E, A extends Props<E>, Name extends string = 'Partial'> = Type<
  Name,
  E,
  { readonly [K in keyof A]?: Encoder.Output<A[K]> },
  { readonly [K in keyof A]?: Decoder.Input<A[K]> }
>

export function partial<A extends Props<any>>(props: A): PartialType<EnvsOfProps<A>, A>
export function partial<A extends Props<any>, Name extends string>(
  props: A,
  name: Name,
): PartialType<EnvsOfProps<A>, A, Name>

export function partial<A extends Props<any>, Name extends string = 'Partial'>(
  props: A,
  name: Name = 'Partial' as Name,
): PartialType<EnvsOfProps<A>, A, Name> {
  function* decode(i: unknown) {
    const either = yield* Record.decode(i)

    if (isLeft(either)) {
      return either
    }

    const obj = fromRight(either)
    const propsToCheck = keysOf(obj).filter((k) => hasOwnProperty(k, props)) as (keyof A)[]

    const keyValuesPairs = yield* sequence(function* (k) {
      const either = yield* props[k].decode(obj[k])

      return map((v) => [k, v] as const, either)
    }, propsToCheck)

    if (keyValuesPairs.every((kv) => isRight(kv))) {
      return Object.fromEntries(
        keyValuesPairs.map((kv) => fromRight(kv as Right<readonly [keyof A, any]>)),
      )
    }

    return concat(...keyValuesPairs)
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
    if (Record.is(a)) {
      const propsToCheck = keysOf(a).filter((k) => hasOwnProperty(k, props)) as (keyof A)[]

      return propsToCheck.every((k) => props[k].is(a[k]))
    }

    return false
  }

  return {
    name,
    is: is as PartialType<EnvsOfProps<A>, A>['is'],
    decode: decode as PartialType<EnvsOfProps<A>, A>['decode'],
    encode: encode as PartialType<EnvsOfProps<A>, A>['encode'],
  }
}
