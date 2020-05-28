import * as G from '../guard'
import { Type } from './Type'

// tslint:disable-next-line:variable-name
export const Void: Type<void> = Type.fromGuard(G.Void, `Void`, `void`)
