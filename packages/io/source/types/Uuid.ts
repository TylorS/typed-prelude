import { Uuid as UUID } from '@typed/uuid'
import * as G from '../guard'
import { Type } from './Type'

export const Uuid: Type<UUID> = Type.fromGuard(G.Uuid, `Uuid`)
