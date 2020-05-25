import { isUuid, Uuid as UUID } from '@typed/uuid'
import { Type } from '../Type'
import { refinement } from './refinement'
import { String } from './String'

export type UuidType<E> = Type<'Uuid', E, UUID>
export const Uuid: UuidType<unknown> = refinement(String, isUuid, 'Uuid')
