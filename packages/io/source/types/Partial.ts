import { sequence } from '@typed/effects'
import { fromRight, isLeft, map } from '@typed/either'
import { hasOwnProperty, keysOf } from '@typed/objects'
import { concat } from '@typed/validation'
import { Decoder } from '../Decoder'
import { Encoder } from '../Encoder'
import { Type } from '../Type'
import { EnvsOfProps, Props } from './helpers'
import { Record } from './Record'

export type PartialType<E, A extends Props<E>> = Type<
  'Partial',
  E,
  { readonly [K in keyof A]?: Encoder.Output<A[K]> },
  { readonly [K in keyof A]?: Decoder.Input<A[K]> }
>

export function partial<A extends Props<any>>(props: A): PartialType<EnvsOfProps<A>, A> {
  function* decode(i: unknown) {
    const either = yield* Record.decode(i)

    if (isLeft(either)) {
      return either
    }

    const obj = fromRight(either)
    const propsToCheck = keysOf(props).filter((k) => hasOwnProperty(k, obj)) as (keyof A)[]
    const validation = concat(
      ...(yield* sequence(function* (k) {
        const either = yield* props[k].decode(obj[k])

        return map((v) => [k, v] as const, either)
      }, propsToCheck)),
    )

    return map((entries) => Object.fromEntries(entries), validation)
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
      // tslint:disable-next-line:forin
      for (const k in keysOf(props)) {
        if (hasOwnProperty(k, a) && !props[k].is(a[k])) {
          return false
        }
      }

      return true
    }

    return false
  }

  return {
    name: 'Partial',
    is: is as PartialType<EnvsOfProps<A>, A>['is'],
    decode: decode as PartialType<EnvsOfProps<A>, A>['decode'],
    encode: encode as PartialType<EnvsOfProps<A>, A>['encode'],
  }
}
