import { mapObj, Overwrite } from '@typed/objects'
import { Functor, Monoid, TypeParams } from 'hkt-ts'

export const RecordUri = '@typed/objects' as const
export type RecordUri = typeof RecordUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    [RecordUri]: Readonly<Record<TypeParams.Second<Params>, TypeParams.First<Params>>>
  }

  export interface HktTypeParams<T> {
    [RecordUri]: [T] extends [Readonly<Record<infer A, infer B>>] ? [A, B] : never
  }

  export interface HktSignatureOverride {
    [RecordUri]: {
      map: typeof map
      empty: typeof empty
      concat: typeof concat
    }
  }
}

const concat = <A extends Readonly<Record<any, any>>, B extends Readonly<Record<any, any>>>(
  a: A,
  b: B,
): Overwrite<A, B> => ({ ...a, ...b })

const empty = <A extends PropertyKey, B>(): Readonly<Record<A, B>> => Object.create(null)

const map = <A, B, C extends PropertyKey>(
  f: (a: A) => B,
  functor: Readonly<Record<C, A>>,
): Readonly<Record<C, B>> => mapObj((_, a) => f(a), functor)

type RecordOverrides = {
  map: 'map'
  empty: 'empty'
  concat: 'concat'
}

export const record: Functor<RecordUri, RecordOverrides> & Monoid<RecordUri, RecordOverrides> = {
  URI: RecordUri,
  empty,
  concat,
  map,
}
