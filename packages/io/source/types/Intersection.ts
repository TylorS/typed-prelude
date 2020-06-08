import { Flatten, UnNest } from '@typed/common'
import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Any, Type } from './Type'

export interface IntersectionType<A extends ReadonlyArray<Any>>
  extends Type<
    UnNest<Flatten<DecoderInputConsList<A>, unknown>>,
    UnNest<Flatten<EncoderOutputConsList<A>, unknown>>
  > {
  readonly members: A
}

const getIntersectionName = (types: readonly Any[]): string => types.map((t) => t.name).join(' & ')

export function intersection<A extends ReadonlyArray<Any>>(
  types: A,
  name: string = getIntersectionName(types),
): IntersectionType<A> {
  const guard = G.intersection(types)
  const decoder = D.intersection(types)
  const encoder = E.intersection(types)

  return {
    ...guard,
    ...decoder,
    ...encoder,
    name,
    members: types,
  } as IntersectionType<A>
}

type DecoderInputConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [D.TypeOf<T>, DecoderInputConsList<TS>]
  : unknown
type EncoderOutputConsList<A extends readonly any[]> = [] extends A
  ? unknown
  : ((...a: A) => any) extends (t: infer T, ...ts: infer TS) => any
  ? [E.OutputOf<T>, EncoderOutputConsList<TS>]
  : unknown
