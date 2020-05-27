import { isNull } from '@typed/logic'
import { Guard } from './Guard'

export const Null: Guard<null> = Guard.is(isNull)
