import * as G from '../guard'
import { Type } from './Type'

export const EmptyString = Type.fromGuard(G.EmptyString, 'EmptyString')
export const NonEmptyString = Type.fromGuard(G.NonEmptyString, 'NonEmptyString')
export const Character = Type.fromGuard(G.Character, 'Character')

export const Integer = Type.fromGuard(G.Integer, 'Integer')
export const Negative = Type.fromGuard(G.Negative, 'Negative')
export const NegativeInteger = Type.fromGuard(G.NegativeInteger, 'NegativeInteger')
export const NonNegative = Type.fromGuard(G.NonNegative, 'NonNegative')
export const NonNegativeInteger = Type.fromGuard(G.NonNegativeInteger, 'NonNegativeInteger')
export const NonPositive = Type.fromGuard(G.NonPositive, 'NonPositive')
export const NonPositiveInteger = Type.fromGuard(G.NonPositiveInteger, 'NonPositiveInteger')
export const NonZero = Type.fromGuard(G.NonZero, 'NonZero')
export const NonZeroInteger = Type.fromGuard(G.NonZeroInteger, 'NonZeroInteger')
export const Positive = Type.fromGuard(G.Positive, 'Positive')
export const PositiveInteger = Type.fromGuard(G.PositiveInteger, 'PositiveInteger')
export const Zero = Type.fromGuard(G.Zero, 'Zero')
