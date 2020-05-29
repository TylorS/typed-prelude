import * as G from '../guard'
import { Type } from './Type'
import { union } from './Union'

export const Null: Type<null> = Type.fromGuard(G.Null, `Null`, `null`)
export const nullable = <A extends Type>(type: A): Type<null | Type.Of<A>> => union([Null, type])
