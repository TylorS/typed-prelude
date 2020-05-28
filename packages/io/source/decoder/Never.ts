import * as G from '../guard/Never'
import { Decoder } from './Decoder'

export const Never: Decoder = Decoder.fromGuard(G.Never, `never`)
