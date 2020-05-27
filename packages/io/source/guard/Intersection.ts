import { Flatten, UnNest } from '@typed/common'
import { Guard, TypeOf } from './Guard'

export const intersection = <A extends ReadonlyArray<Guard>>(
  guards: A,
): Guard<IntersectionType<A>> => ({
  is: (r): r is IntersectionType<A> => guards.every((g) => g.is(r)),
})

type IntersectionType<A extends readonly any[]> = UnNest<Flatten<ToGuardTypeConsList<A>, unknown>>

type ToGuardTypeConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [TypeOf<T>, ToGuardTypeConsList<TS>]
  : unknown
