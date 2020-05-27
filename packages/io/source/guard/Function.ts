import { isFunction } from '@typed/logic'
import { Guard } from './Guard'

export const Function: Guard<Function> = Guard.is(isFunction)
