import * as G from '../guard'
import { Decoder, TypeOf } from './Decoder'
import { union } from './Union'

export const Null = Decoder.fromGuard(G.Null, `null`)

export const nullable = <A extends Decoder>(d: A): Decoder<TypeOf<A> | null> => union([d, Null])
