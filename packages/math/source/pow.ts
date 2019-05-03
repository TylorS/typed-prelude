import { curry } from '@typed/lambda'

/**
 * Raise a number to a given power
 * @param exponent :: number
 * @param base :: number
 * @returns :: number
 */
export const pow = curry((exponent: number, base: number): number => Math.pow(base, exponent))
