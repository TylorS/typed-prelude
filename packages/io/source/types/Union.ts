import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { MapTypes } from './helpers'
import { Mixed, Type } from './Type'

export const union = <A extends ReadonlyArray<Type>>(
  types: A,
  name: string = getUnionName(types),
): Type<MapTypes<A>[number]> => {
  const g = G.union(types)
  const d = D.union(types)
  const e = E.Encoder.id()

  return {
    ...g,
    ...d,
    ...e,
    name,
  } as Type<MapTypes<A>[number]>
}

const getUnionName = (types: readonly Mixed[]): string => types.map((t) => t.name).join(' | ')
