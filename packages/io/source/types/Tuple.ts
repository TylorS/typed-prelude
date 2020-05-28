import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { MapEncodings, MapTypes } from './helpers'
import { Type } from './Type'

export const tuple = <A extends ReadonlyArray<Type>>(
  types: A,
): Type<MapTypes<A>, MapEncodings<A>> => {
  const g = G.tuple(types)
  const d = D.tuple(types)
  const e = E.tuple(types)

  return {
    ...g,
    ...d,
    ...e,
    name: d.expected,
  } as Type<MapTypes<A>, MapEncodings<A>>
}
