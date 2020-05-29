import * as G from '../guard'
import { Decoder } from './Decoder'

// tslint:disable-next-line:variable-name
export const Undefined = Decoder.fromGuard(G.Undefined, 'undefined')
export const Void = Decoder.fromGuard(G.Void, 'void')
