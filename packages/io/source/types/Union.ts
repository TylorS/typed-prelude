import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Mixed, Type } from './Type'

export const union = <A extends ReadonlyArray<Type>>(
  types: A,
  name: string = getUnionName(types),
): Type<{ readonly [K in keyof A]: Type.Of<A[K]> }[number]> => {
  const g = G.union(types)
  const d = D.union(types)
  const e = E.Encoder.id()

  return {
    ...g,
    ...d,
    ...e,
    name,
  } as Type<{ readonly [K in keyof A]: Type.Of<A[K]> }[number]>
}

const getUnionName = (types: readonly Mixed[]): string => types.map((t) => t.name).join(' | ')
