import { isNewType, NewType } from './new-type'

const and = <A>(f: (value: A) => boolean, g: (value: A) => boolean) => (value: A) =>
  f(value) && g(value)
const or = <A>(f: (value: A) => boolean, g: (value: A) => boolean) => (value: A) =>
  f(value) || g(value)

export type Combine<A, B> = A extends NewType<infer AB, infer AT>
  ? B extends NewType<infer BB, infer BT>
    ? NewType<AB | BB, AT & BT>
    : never
  : never

export type Integer = NewType<number, 'Integer'>
export const isInteger = isNewType<number, Integer>((n): n is Integer => Number.isInteger(n))

export type Zero = NewType<number, 'Zero'>
export const isZero = isNewType((x: number): x is Zero => x === 0)

export type NonZero = NewType<number, 'NonZero'>
export const isNonZero = isNewType((x: number): x is NonZero => x !== 0)

export type NonZeroInteger = Combine<NonZero, Integer>
const _isNonZeroInteger = and(isNonZero, isInteger)
export const isNonZeroInteger = isNewType((x: number): x is NonZeroInteger => _isNonZeroInteger(x))

export type Positive = NewType<number, 'Positive'>
export const isPositive = isNewType((x: number): x is Positive => x > 0)

export type Negative = NewType<number, 'Negative'>
export const isNegative = isNewType((x: number): x is Negative => x < 0)

export type NonNegative = Zero | Positive
const _isNonNegative = or(isZero, isPositive)
export const isNonNegative = isNewType((x: number): x is NonNegative => _isNonNegative(x))

export type NonPositive = Zero | Negative
const _isNonPositive = or(isZero, isNegative)
export const isNonPositive = isNewType((n: number): n is NonPositive => _isNonPositive(n))

export type PositiveInteger = Combine<Positive, Integer>
const _isPositiveInteger = and(isInteger, isPositive)
export const isPositiveInteger = isNewType((n: number): n is PositiveInteger =>
  _isPositiveInteger(n),
)

export type NegativeInteger = Combine<Negative, Integer>
const _isNegativeInteger = and(isNegative, isInteger)
export const isNegativeInteger = isNewType((n: number): n is NegativeInteger =>
  _isNegativeInteger(n),
)

export type NonNegativeInteger = Zero | PositiveInteger
const _isNonNegativeInteger = or<number>(isZero, isPositiveInteger)
export const isNonNegativeInteger = isNewType((n: number): n is NonNegativeInteger =>
  _isNonNegativeInteger(n),
)

export type NonPositiveInteger = Zero | NegativeInteger
const _isNonPositiveInteger = or<number>(isZero, isNegativeInteger)
export const isNonPositiveInteger = isNewType((n: number): n is NonPositiveInteger =>
  _isNonPositiveInteger(n),
)

export type EmptyString = NewType<string & { readonly length: Zero }, 'EmptyString'>
export const isEmptyString = isNewType((x: string): x is EmptyString => x === '')

export type NonEmptyString = NewType<
  string & { readonly length: PositiveInteger },
  'NonEmptyString'
>
export const isNonEmptyString = isNewType((x: string): x is NonEmptyString => x !== '')

export type Character = NewType<string & { readonly length: 1 }, 'Character'>
export const isCharacter = isNewType((x: string): x is Character => x.length === 1)
