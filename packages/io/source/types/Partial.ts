import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Props } from './helpers'
import { Type } from './Type'

export const partial = <A extends Props>(
  props: A,
  name: string,
  expected: string = name,
): Type<Partial<{ readonly [K in keyof A]: Type.Of<A[K]> }>> => {
  const g = G.partial(props)
  const d = D.partial(props, expected)
  const e = E.partial(props)

  return {
    ...g,
    ...d,
    ...e,
    name,
  }
}
