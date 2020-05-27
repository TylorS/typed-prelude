import * as G from '../guard'
import { Decoder } from './Decoder'

export const EmptyString = Decoder.fromGuard(G.EmptyString, `EmptyString`)
export const NonEmptyString = Decoder.fromGuard(G.NonEmptyString, 'NonEmptyString')
export const Character = Decoder.fromGuard(G.Character, 'Character')

export const Integer = Decoder.fromGuard(G.Integer, 'Integer')
export const Negative = Decoder.fromGuard(G.Negative, 'Negative')
export const NegativeInteger = Decoder.fromGuard(G.NegativeInteger, 'NegativeInteger')
export const NonNegative = Decoder.fromGuard(G.NonNegative, 'NonNegative')
export const NonNegativeInteger = Decoder.fromGuard(G.NonNegativeInteger, 'NonNegativeInteger')
export const NonPositive = Decoder.fromGuard(G.NonPositive, 'NonPositive')
export const NonPositiveInteger = Decoder.fromGuard(G.NonPositiveInteger, 'NonPositiveInteger')
export const NonZero = Decoder.fromGuard(G.NonZero, 'NonZero')
export const NonZeroInteger = Decoder.fromGuard(G.NonZeroInteger, 'NonZeroInteger')
export const Positive = Decoder.fromGuard(G.Positive, 'Positive')
export const PositiveInteger = Decoder.fromGuard(G.PositiveInteger, 'PositiveInteger')
export const Zero = Decoder.fromGuard(G.Zero, 'Zero')
