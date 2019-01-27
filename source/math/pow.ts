import { curry } from '@typed/lambda'

export const pow = curry((exponent: number, base: number): number => Math.pow(base, exponent))
