import { mapObj } from '@typed/objects'
import { Functor } from 'hkt-ts'

export const RecordUri = '@typed/objects' as const
export type RecordUri = typeof RecordUri

declare module 'hkt-ts' {
  export interface Hkts<Params extends ReadonlyArray<any>> {
    readonly [RecordUri]: Readonly<Record<TypeParams.Second<Params>, TypeParams.First<Params>>>
  }

  export interface HktTypeParams<T> {
    readonly [RecordUri]: [T] extends [Readonly<Record<infer A, infer B>>] ? [A, B] : never
  }
}

const map = <A, B, C extends PropertyKey>(
  f: (a: A) => B,
  functor: Readonly<Record<C, A>>,
): Readonly<Record<C, B>> => mapObj((_, a) => f(a), functor)

export const record: Functor<RecordUri> = {
  URI: RecordUri,
  map: map as Functor<RecordUri>['map'],
}
