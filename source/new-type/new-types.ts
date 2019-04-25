import { Primitive } from '@typed/lambda'
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
export const isInteger = isNewType<Integer>(Number.isInteger)

export type Zero = NewType<number, 'Zero'>
export const isZero = isNewType<Zero>(x => x === 0)

export type NonZero = NewType<number, 'NonZero'>
export const isNonZero = isNewType<Zero>(x => x !== 0)

export type NonZeroInteger = Combine<NonZero, Integer>
export const isNonZeroInteger = isNewType<NonZeroInteger>(and(isNonZero, isInteger))

export type Positive = NewType<number, 'Positive'>
export const isPositive = isNewType<Positive>(x => x > 0)

export type Negative = NewType<number, 'Negative'>
export const isNegative = isNewType<Positive>(x => x < 0)

export type NonNegative = Zero | Positive
export const isNonNegative = isNewType<NonNegative>(or(isZero, isPositive))

export type NonPositive = Zero | Negative
export const isNonPositive = isNewType<NonPositive>(or(isZero, isNegative))

export type PositiveInteger = Combine<Positive, Integer>
export const isPositiveInteger = isNewType<PositiveInteger>(and(isInteger, isPositive))

export type NegativeInteger = Combine<Negative, Integer>
export const isNegativeInteger = isNewType<NegativeInteger>(and(isNegative, isInteger))

export type NonNegativeInteger = Zero | PositiveInteger
export const isNonNegativeInteger = isNewType<NonNegativeInteger>(
  or<number>(isZero, isPositiveInteger as any),
)

export type NonPositiveInteger = Zero | NegativeInteger
export const isNonPositiveInteger = isNewType<NonNegativeInteger>(
  or<number>(isZero, isNegativeInteger as any),
)

export type EmptyString = NewType<string & { readonly length: Zero }, 'EmptyString'>
export const isEmptyString = isNewType<EmptyString>(x => x === '')

export type NonEmptyString = NewType<
  string & { readonly length: PositiveInteger },
  'NonEmptyString'
>
export const isNonEmptyString = isNewType<NonEmptyString>(x => x !== '')

export type Character = NewType<string & { readonly length: 1 }, 'Character'>
export const isCharacter = isNewType<Character>(x => x.length === 1)
