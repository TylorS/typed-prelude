import * as G from '../guard'
import { Type } from './Type'

export const Function: Type<Function> = Type.fromGuard(G.Function, `Function`)
