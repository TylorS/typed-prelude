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

export const EmptyString = refinement(String, isEmptyString, 'EmptyString')
export const NonEmptyString = refinement(String, isNonEmptyString, 'EmptyString')
export const Character = refinement(String, isCharacter, 'Character')

export const Integer = refinement(Number, isInteger, 'Integer')
export const Negative = refinement(Number, isNegative, 'Negative')
export const NegativeInteger = refinement(Number, isNegativeInteger, 'NegativeInteger')
export const NonNegative = refinement(Number, isNonNegative, 'NonNegative')
export const NonNegativeInteger = refinement(Number, isNonNegativeInteger, 'NonNegativeInteger')
export const NonPositive = refinement(Number, isNonPositive, 'NonPositive')
export const NonPositiveInteger = refinement(Number, isNonPositiveInteger, 'NonPositiveInteger')
export const NonZero = refinement(Number, isNonZero, 'NonZero')
export const NonZeroInteger = refinement(Number, isNonZeroInteger, 'NonZeroInteger')
export const Positive = refinement(Number, isPositive, 'Positive')
export const PositiveInteger = refinement(Number, isPositiveInteger, 'PositiveInteger')
export const Zero = refinement(Number, isZero, 'Zero')
