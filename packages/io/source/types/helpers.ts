import { Effect } from '@typed/effects'
import { any } from '@typed/logic'
import { Mixed, Type } from './Type'

export const shouldUseIdentity = (types: readonly Mixed[]): boolean =>
  any((s) => s.encode !== Effect.of, types)

export type Props = Readonly<Record<PropertyKey, Mixed>>
export type MapTypes<A> = { readonly [K in keyof A]: Type.Of<A[K]> }
export type MapEncodings<A> = { readonly [K in keyof A]: Type.Encoding<A[K]> }
