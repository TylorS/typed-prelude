import { curry } from '../lambda'

export const pow: {
  (exponent: number, base: number): number
  (exponent: number): (base: number) => number
} = curry((exponent: number, base: number): number => Math.pow(base, exponent))
