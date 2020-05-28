import * as G from '../guard'
import { Type } from './Type'

// tslint:disable-next-line:variable-name
export const String: Type<string> = Type.fromGuard(G.String, `String`, `string`)
