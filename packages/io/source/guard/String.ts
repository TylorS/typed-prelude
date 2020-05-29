import { isString } from '@typed/logic'
import { Guard } from './Guard'

// tslint:disable-next-line:variable-name
export const String: Guard<string> = Guard.is(isString)
