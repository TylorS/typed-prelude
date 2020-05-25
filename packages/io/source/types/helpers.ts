import { Flatten, UnNest } from '@typed/common'
import { Effect } from '@typed/effects'
import { any } from '@typed/logic'
import { Mixed, Type } from '../Type'

export const shouldUseIdentity = (types: readonly Mixed[]): boolean =>
  any((s) => s.encode !== Effect.of, types)

export type Props<E> = Readonly<Record<PropertyKey, Mixed<E>>>
export type EnvsOfProps<A> = A extends Props<infer R> ? R : never

export type CombinedTypeEnv<A extends ReadonlyArray<Mixed>> = UnNest<
  Flatten<CombineTypeEnv<A>, unknown>
>

type CombineTypeEnv<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [Type.Env<T>, CombineTypeEnv<TS>]
  : unknown
