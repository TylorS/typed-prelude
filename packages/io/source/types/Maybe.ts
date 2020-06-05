import * as M from '@typed/maybe'
import * as G from '../guard'
import { Mixed, Type, TypeOf } from './Type'

export const Maybe = Type.fromGuard(G.Maybe, `Maybe<unknown>`)

export const maybe = <A extends Mixed>(
  type: A,
  name: string = `Maybe<${type.name}>`,
  expected: string = `Maybe<${type.expected}>`,
): Type<M.Maybe<TypeOf<A>>> => Type.fromGuard(G.maybe<TypeOf<A>>(type), name, expected)
