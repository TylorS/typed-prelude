import { DropKeys } from '@typed/common'
import { Defined, Primitive } from '@typed/lambda'

export type Prop<T, K extends PropertyKey> = K extends keyof T ? T[K] : undefined
export type ObjectPath<T, Keys extends PropertyKey[]> = Keys extends []
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

export type OptionalPropertyNames<A> = {
  [K in keyof A]-?: undefined extends A[K] ? K : never
}[keyof A]
export type RequiredPropertyNames<A> = {
  [K in keyof A]-?: undefined extends A[K] ? never : K
}[keyof A]
export type OptionalProperties<A> = Pick<A, OptionalPropertyNames<A>>
export type RequiredProperties<A> = Pick<A, RequiredPropertyNames<A>>

export type MergeObjects<A, B> = {
  [K in Exclude<RequiredPropertyNames<A & B>, OptionalPropertyNames<A & B>>]: K extends keyof B
    ? K extends keyof A
      ? Defined<A[K] | B[K]>
      : B[K]
    : K extends keyof A
    ? A[K]
    : never
} &
  {
    [K in Exclude<OptionalPropertyNames<A & B>, RequiredPropertyNames<A & B>>]?: K extends keyof B
      ? K extends keyof A
        ? Defined<A[K] | B[K]>
        : B[K]
      : K extends keyof A
      ? A[K]
      : never
  }

export type Overwrite<A, B> = B & MergeObjects<DropKeys<A, keyof B>, B>

export type OptionalKeys<A, K extends keyof A> = DropKeys<A, K> & Partial<Pick<A, K>>

export type Immutable<A> = A extends Primitive
  ? A
  : A extends (infer B)[]
  ? ImmutableArray<B>
  : A extends Map<infer K, infer V>
  ? ImmutableMap<K, V>
  : A extends Set<infer V>
  ? ImmutableSet<V>
  : ImmutableObject<A>

export interface ImmutableArray<A> extends ReadonlyArray<Immutable<A>> {}
export interface ImmutableMap<K, V> extends ReadonlyMap<Immutable<K>, Immutable<V>> {}
export interface ImmutableSet<V> extends ReadonlySet<Immutable<V>> {}
export type ImmutableObject<A> = { +readonly [K in keyof A]: Immutable<A[K]> }

export type ExtractUnionMember<
  A extends object,
  Tag extends keyof A,
  Value extends A[Tag]
> = Extract<A, Record<Tag, Value>>

export type Mutable<A> = A extends Primitive
  ? A
  : A extends ImmutableArray<infer V>
  ? MutableArray<V>
  : A extends ReadonlyArray<infer V>
  ? MutableArray<V>
  : A extends ImmutableMap<infer K, infer V>
  ? MutableMap<K, V>
  : A extends ReadonlyMap<infer K, infer V>
  ? MutableMap<K, V>
  : A extends ImmutableSet<infer V>
  ? MutableSet<V>
  : A extends ReadonlySet<infer V>
  ? MutableSet<V>
  : MutableObject<A>

export interface MutableMap<K, V> extends Map<Mutable<K>, Mutable<V>> {}
export interface MutableSet<V> extends Set<Mutable<V>> {}
export interface MutableArray<A> extends Array<Mutable<A>> {}
export type MutableObject<A> = { -readonly [K in keyof A]: Mutable<A[K]> }
