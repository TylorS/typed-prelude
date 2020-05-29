import { isUndefined } from '@typed/logic'
import { Guard } from './Guard'

// tslint:disable-next-line:variable-name
export const Undefined: Guard<undefined> = Guard.is(isUndefined)
export const Void: Guard<void> = Guard.is(isUndefined)
