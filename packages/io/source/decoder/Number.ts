import * as G from '../guard'
import { Decoder } from './Decoder'

// tslint:disable-next-line:variable-name
export const Number = Decoder.fromGuard(G.Number, `number`)
