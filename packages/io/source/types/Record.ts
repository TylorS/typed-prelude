import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { MapEncodings, MapTypes, Props } from './helpers'
import { Type } from './Type'

export const Record = Type.fromGuard(G.Record, `Record<unknown, unknown>`)

export const record = <A extends Props>(
  props: A,
  name: string,
  expected: string = name,
): Type<MapTypes<A>, MapEncodings<A>> => {
  const g = G.record(props)
  const d = D.record(props, expected)
  const e = E.record(props)

  return {
    ...g,
    ...d,
    ...e,
    name,
  } as Type<MapTypes<A>, MapEncodings<A>>
}
