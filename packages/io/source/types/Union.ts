import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Any, Type } from './Type'

export interface UnionType<A extends ReadonlyArray<Type>>
  extends Type<{ readonly [K in keyof A]: Type.Of<A[K]> }[number]> {
  readonly members: A
}

export const union = <A extends ReadonlyArray<Type>>(
  members: A,
  name: string = getUnionName(members),
): UnionType<A> => {
  const g = G.union(members)
  const d = D.union(members)
  const e = E.Encoder.id()

  return {
    ...g,
    ...d,
    ...e,
    name,
  } as UnionType<A>
}

const getUnionName = (types: readonly Any[]): string => types.map((t) => t.name).join(' | ')
