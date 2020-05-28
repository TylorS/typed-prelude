import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Type } from './Type'

export const Set = Type.fromGuard(G.Set, `ReadonlySet<unknown, unknown>`)

export const set = <A extends Type>(
  a: A,
  name: string = `ReadonlySet<${a.name}>`,
): Type<ReadonlySet<Type.Of<A>>> => {
  const g = G.set(a)
  const d = D.set(a)
  const e = E.Encoder.id<ReadonlySet<Type.Of<A>>>()

  return {
    ...g,
    ...d,
    ...e,
    name,
  } as Type<ReadonlySet<Type.Of<A>>>
}
