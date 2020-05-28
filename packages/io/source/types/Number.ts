import * as G from '../guard'
import { Type } from './Type'

// tslint:disable-next-line:variable-name
export const Number: Type<number> = Type.fromGuard(G.Number, 'Number', 'number')
