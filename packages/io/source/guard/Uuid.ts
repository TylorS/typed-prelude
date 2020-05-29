import { isUuid, Uuid as UUID } from '@typed/uuid'
import { Guard } from './Guard'
import { refinement } from './refinement'
import { String } from './String'

export const Uuid: Guard<UUID> = refinement(String, isUuid)
