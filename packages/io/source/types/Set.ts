import * as D from '../decoder'
import * as E from '../encoder'
import * as G from '../guard'
import { Any, Type } from './Type'

export interface SetType<A extends Type> extends Type<ReadonlySet<Type.Of<A>>> {
  readonly member: A
}

export const set = <A extends Type>(
  member: A,
  name: string = `ReadonlySet<${member.name}>`,
): SetType<A> => {
  const g = G.set(member)
  const d = D.set(member)
  const e = E.Encoder.id<ReadonlySet<Type.Of<A>>>()

  return {
    ...g,
    ...d,
    ...e,
    name,
    member,
  } as SetType<A>
}

export const Set: SetType<Any> = set(Any)
