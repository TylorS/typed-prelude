import * as G from '../guard'
import { Decoder } from './Decoder'

// tslint:disable-next-line:variable-name
export const Boolean: Decoder<unknown, boolean> = Decoder.fromGuard(G.Boolean, 'boolean')
export const True: Decoder<unknown, boolean> = Decoder.fromGuard(G.True, 'true')
export const False: Decoder<unknown, boolean> = Decoder.fromGuard(G.False, 'false')
