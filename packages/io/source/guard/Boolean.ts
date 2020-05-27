import { isBoolean, isFalse, isTrue } from '@typed/logic'
import { Guard } from './Guard'

// tslint:disable-next-line:variable-name
export const Boolean: Guard<boolean> = Guard.is(isBoolean)
export const True: Guard<true> = Guard.is(isTrue)
export const False: Guard<false> = Guard.is(isFalse)
