import { curry } from '@typed/lambda'

/**
 * Raise a number to a given power
 * @param exponent :: number
 * @param base :: number
 * @returns :: number
 */
export const pow: {
  (exponent: number, base: number): number
  (exponent: number): (base: number) => number
} = curry((exponent: number, base: number): number => Math.pow(base, exponent))
