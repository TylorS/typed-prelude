import { always, pipe } from '../lambda'
import { length } from '../list'
import { equals, ifElse, isNull, isUndefined, or } from '../logic'
import { keysOf } from './keysOf'

const isZero = equals(0)
const toTrue = always(true)
const isNullOrUndefined = or(isNull, isUndefined)
const keyLengthIsZero = pipe(
  keysOf,
  length,
  isZero,
)

export const isEmpty = ifElse(isNullOrUndefined, toTrue, keyLengthIsZero)
