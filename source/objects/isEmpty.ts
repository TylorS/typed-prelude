import { always, pipe } from '../lambda'
import { length } from '../list'
import { equals, ifElse, isNull, isUndefined, or } from '../logic'

const isZero = equals(0)
const toTrue = always(true)
const isNullOrUndefined = or(isNull, isUndefined)
const keyLengthIsZero = pipe(
  Object.keys,
  length,
  isZero,
)

export const isEmpty = ifElse(isNullOrUndefined, toTrue, keyLengthIsZero)
