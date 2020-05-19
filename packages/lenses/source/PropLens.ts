import { Arity1 } from '@typed/lambda'
import { set } from '@typed/objects'
import { Lens } from './Lens'

export interface PropLens<K extends PropertyKey> extends Lens<Readonly<Record<K, any>>, any> {
  readonly get: <R extends Readonly<Record<K, any>>>(r: R) => R[K]
  readonly update: {
    <B, R extends Readonly<Record<K, B>>>(update: Arity1<B, B>, r: R): R
    <B>(update: Arity1<B, B>): <R extends Readonly<Record<K, B>>>(r: R) => R
  }
}

export type PropLensKey<A> = A extends PropLens<infer K> ? K : never

export const fromProp = <K extends PropertyKey>(key: K): PropLens<K> =>
  Lens.create((a) => a[key], set(key)) as PropLens<K>
