import { Maybe } from '@typed/maybe'
import * as G from '../guard'
import { Any, Type } from './Type'

export interface MaybeType<A extends Type> extends Type<Maybe<Type.Of<A>>> {
  readonly justType: A
}

export const maybe = <A extends Any>(
  justType: A,
  name: string = `Maybe<${justType.name}>`,
  expected: string = `Maybe<${justType.expected}>`,
): MaybeType<A> => {
  const type = Type.fromGuard(G.maybe(justType), name, expected)

  return { ...type, justType }
}

const _Maybe = maybe(Any)

export { _Maybe as Maybe }
