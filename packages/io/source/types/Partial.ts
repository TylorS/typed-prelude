import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Props } from './helpers'
import { Type } from './Type'

export interface PartialType<A extends Props>
  extends Type<Partial<{ readonly [K in keyof A]: Type.Of<A[K]> }>> {
  readonly properties: A
}

export const partial = <A extends Props>(
  properties: A,
  name: string,
  expected: string = name,
): PartialType<A> => {
  const g = G.partial(properties)
  const d = D.partial(properties, expected)
  const e = E.partial(properties)

  return {
    ...g,
    ...d,
    ...e,
    name,
    properties,
  }
}
