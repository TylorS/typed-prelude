import { always, pipe } from '@typed/lambda'
import { equals, ifElse, isNull, isUndefined, or } from '@typed/logic'
import { length } from '../list'

const isZero = equals(0)
const toTrue = always(true)
const isNullOrUndefined = or(isNull, isUndefined)
const keyLengthIsZero = pipe(
  Object.keys,
  length,
  isZero,
)

export const isEmpty = ifElse(isNullOrUndefined, toTrue, keyLengthIsZero)
