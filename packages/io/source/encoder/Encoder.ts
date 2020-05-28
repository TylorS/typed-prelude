import { Flatten, UnNest } from '@typed/common'
import { id as identity } from '@typed/lambda'

export interface Encoder<I = any, O = any> {
  readonly encode: (i: I) => O
}

export type InputOf<E> = E extends Encoder<infer R, any> ? R : never
export type OutputOf<E> = E extends Encoder<any, infer R> ? R : never

export namespace Encoder {
  export const id = <A>(): Encoder<A, A> => ({ encode: identity })
}

export function partial<P extends Readonly<Record<PropertyKey, Encoder<any, any>>>>(
  properties: P,
): Encoder<
  Partial<{ readonly [K in keyof P]: InputOf<P[K]> }>,
  Partial<{ readonly [K in keyof P]: OutputOf<P[K]> }>
> {
  return {
    encode: (a) => {
      const o = {} as Partial<{ [K in keyof P]: OutputOf<P[K]> }>

      for (const k in properties) {
        if (k in a) {
          const v = a[k]
          o[k] = v === undefined ? undefined : properties[k].encode(v)
        }
      }

      return o
    },
  }
}

export function record<P extends Readonly<Record<PropertyKey, Encoder<any, any>>>>(
  properties: P,
): Encoder<
  { readonly [K in keyof P]: InputOf<P[K]> },
  { readonly [K in keyof P]: OutputOf<P[K]> }
> {
  return {
    encode: (a) => {
      const o = {} as { [K in keyof P]: OutputOf<P[K]> }

      // tslint:disable-next-line:forin
      for (const k in properties) {
        o[k] = properties[k].encode(a[k])
      }

      return o
    },
  }
}

export function array<I, O>(items: Encoder<I, O>): Encoder<readonly I[], readonly O[]> {
  return {
    encode: (as) => as.map(items.encode),
  }
}

export function tuple<A extends ReadonlyArray<Encoder>>(
  encoders: A,
): Encoder<
  { readonly [K in keyof A]: InputOf<A[K]> },
  { readonly [K in keyof A]: OutputOf<A[K]> }
> {
  return {
    encode: (as) => as.map((a, i) => encoders[i].encode(a)) as any,
  }
}

export function intersection<A extends ReadonlyArray<Encoder>>(
  encoders: A,
): Encoder<InputIntersection<A>, OutputIntersection<A>> {
  return {
    encode: (a) => encoders.map((e) => e.encode(a)).reduce((acc, x) => ({ ...acc, ...x }), {}),
  }
}

type InputIntersection<A extends readonly any[]> = UnNest<Flatten<EncoderInputConsList<A>, unknown>>
type OutputIntersection<A extends readonly any[]> = UnNest<
  Flatten<EncoderOutputConsList<A>, unknown>
>

type EncoderInputConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [InputOf<T>, EncoderInputConsList<TS>]
  : unknown

type EncoderOutputConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [OutputOf<T>, EncoderOutputConsList<TS>]
  : unknown
