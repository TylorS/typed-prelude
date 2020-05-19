import { Arity1, Head, Tail } from '@typed/lambda'
import { Lens } from './Lens'
import { pipe2 } from './pipe2'
import { fromProp } from './PropLens'

export const fromPath = <K extends ReadonlyArray<PropertyKey>>(keys: K): PathLens<K> =>
  keys.reduce((lens, key) => pipe2(lens, fromProp(key)), Lens.id<any>())

export interface PathLens<K extends ReadonlyArray<PropertyKey>> extends Lens<PathToRecord<K>, any> {
  readonly get: <R extends PathToRecord<K>>(r: R) => GetPath<R, K>
  readonly update: {
    <R extends PathToRecord<K>>(update: Arity1<GetPath<R, K>, GetPath<R, K>>, r: R): R
    <B>(update: Arity1<B, B>): <R extends PathToRecord<K, B>>(r: R) => R
  }
}

export type PathLensKeys<A> = A extends PathLens<infer Keys> ? Keys : never

export type PathToRecord<K extends ReadonlyArray<PropertyKey>, R = any> = Tail<K> extends []
  ? { readonly [Key in Head<K>]: R }
  : { readonly [Key in Head<K>]: PathToRecord<Tail<K>, R> }

export type GetPath<O, K extends ReadonlyArray<PropertyKey>> = K extends []
  ? O
  : {
      complete: Head<K> extends keyof O ? O[Head<K>] : never
      continue: Head<K> extends keyof O ? GetPath<O[Head<K>], Tail<K>> : never
    }[Tail<K> extends [] ? 'complete' : 'continue']
