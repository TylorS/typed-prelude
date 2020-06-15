import * as G from '../guard'
import { Decoder } from './Decoder'

export const Date: Decoder<Date> = Decoder.fromGuard(G.Date, `Date`)
