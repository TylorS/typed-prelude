import { Uuid as UUID } from '@typed/uuid'
import * as G from '../guard'
import { Decoder } from './Decoder'

export const Uuid: Decoder<UUID> = Decoder.fromGuard(G.Uuid, `Uuid`)
