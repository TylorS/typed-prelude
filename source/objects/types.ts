import { Primitive } from '../lambda'

export type Prop<T, K extends PropertyKey> = K extends keyof T ? T[K] : undefined
export type Path<T, Keys extends PropertyKey[]> = Keys extends []
  ? T
  : Keys extends [keyof T]
    ? Prop<T, Keys[0]>
    : Keys extends [PropertyKey, PropertyKey]
      ? Prop<Prop<T, Keys[0]>, Keys[1]>
      : Keys extends [PropertyKey, PropertyKey, PropertyKey]
        ? Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]>
        : Keys extends [PropertyKey, PropertyKey, PropertyKey, PropertyKey]
          ? Prop<Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]>, Keys[3]>
          : Keys extends [PropertyKey, PropertyKey, PropertyKey, PropertyKey, PropertyKey]
            ? Prop<Prop<Prop<Prop<Prop<T, Keys[0]>, Keys[1]>, Keys[2]>, Keys[3]>, Keys[4]>
            : undefined

export type ValuesOf<A> = { [K in keyof A]: A[K] }[keyof A]

export type Union<A, B> = A | B
export type MergeObjects<A, B> = {
  [K in Union<keyof A, keyof B>]: K extends keyof B
    ? K extends keyof A ? Defined<A[K] | B[K]> : B[K]
    : K extends keyof A ? A[K] : never
}

export type DropKeys<A, Keys extends PropertyKey> = { [K in Exclude<keyof A, Keys>]: A[K] }

export type Defined<T> = T extends undefined ? never : T

export type Immutable<A> = A extends Primitive
  ? A
  : A extends Array<infer B>
    ? ImmutableArray<B>
    : A extends Map<infer K, infer V> ? ImmutableMap<K, V> : ImmutableObject<A>

export interface ImmutableArray<A> extends ReadonlyArray<Immutable<A>> {}
export interface ImmutableMap<K, V> extends ReadonlyMap<Immutable<K>, Immutable<V>> {}
export type ImmutableObject<A> = { readonly [K in keyof A]: Immutable<A[K]> }
