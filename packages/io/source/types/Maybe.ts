import * as G from '../guard'
import { Mixed, Type } from './Type'

export const Maybe = Type.fromGuard(G.Maybe, `Maybe<unknown>`)

export const maybe = <A extends Mixed>(
  type: A,
  name: string = `Maybe<${type.name}>`,
  expected: string = `Maybe<${type.expected}>`,
) => Type.fromGuard(G.maybe(type), name, expected)
