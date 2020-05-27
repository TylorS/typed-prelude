import * as G from '../guard'
import { Decoder } from './Decoder'

export const Null = Decoder.fromGuard(G.Null, `null`)
