import { isNumber } from '@typed/logic'
import { Guard } from './Guard'

// tslint:disable-next-line:variable-name
export const Number: Guard<number> = Guard.is(isNumber)
