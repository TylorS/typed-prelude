import * as G from '../guard'
import { Decoder } from './Decoder'

// tslint:disable-next-line:variable-name
export const Boolean: Decoder<boolean> = Decoder.fromGuard(G.Boolean, 'boolean')
export const True: Decoder<boolean> = Decoder.fromGuard(G.True, 'true')
export const False: Decoder<boolean> = Decoder.fromGuard(G.False, 'false')
