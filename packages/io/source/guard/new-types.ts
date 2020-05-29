import {
  isCharacter,
  isEmptyString,
  isInteger,
  isNegative,
  isNegativeInteger,
  isNonEmptyString,
  isNonNegative,
  isNonNegativeInteger,
  isNonPositive,
  isNonPositiveInteger,
  isNonZero,
  isNonZeroInteger,
  isPositive,
  isPositiveInteger,
  isZero,
} from '@typed/new-type'
import { Number } from './Number'
import { refinement } from './refinement'
import { String } from './String'

export const EmptyString = refinement(String, isEmptyString)
export const NonEmptyString = refinement(String, isNonEmptyString)
export const Character = refinement(String, isCharacter)

export const Integer = refinement(Number, isInteger)
export const Negative = refinement(Number, isNegative)
export const NegativeInteger = refinement(Number, isNegativeInteger)
export const NonNegative = refinement(Number, isNonNegative)
export const NonNegativeInteger = refinement(Number, isNonNegativeInteger)
export const NonPositive = refinement(Number, isNonPositive)
export const NonPositiveInteger = refinement(Number, isNonPositiveInteger)
export const NonZero = refinement(Number, isNonZero)
export const NonZeroInteger = refinement(Number, isNonZeroInteger)
export const Positive = refinement(Number, isPositive)
export const PositiveInteger = refinement(Number, isPositiveInteger)
export const Zero = refinement(Number, isZero)
