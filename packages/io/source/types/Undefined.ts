import * as G from '../guard'
import { Type } from './Type'

// tslint:disable-next-line:variable-name
export const Undefined = Type.fromGuard(G.Undefined, `Undefined`, `undefined`)
