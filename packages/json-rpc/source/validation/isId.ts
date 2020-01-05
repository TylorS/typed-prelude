import { isNull, isNumber, isString, or } from '@typed/logic'

export const isId = or(or(isString, isNumber), isNull)
