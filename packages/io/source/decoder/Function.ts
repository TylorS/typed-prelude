import * as G from '../guard'
import { Decoder } from './Decoder'

export const Function: Decoder<Function> = Decoder.fromGuard(G.Function, 'Function')
