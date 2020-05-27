import * as G from '../guard'
import { Decoder } from './Decoder'

export const Never: Decoder = Decoder.fromGuard(G.Never, `never`)
