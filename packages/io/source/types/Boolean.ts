import * as G from '../guard'
import { Type } from './Type'

// tslint:disable-next-line:variable-name
export const Boolean: Type<boolean> = Type.fromGuard(G.Boolean, `Boolean`, `boolean`)
export const True: Type<true> = Type.fromGuard(G.True, `True`, `true`)
export const False: Type<false> = Type.fromGuard(G.False, `False`, `false`)
