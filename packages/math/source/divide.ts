import { curry } from '@typed/lambda'

/** Divide a number by another */
export const divide = curry((left: number, right: number) => left / right)

/** Composition-ready division */
export const divideBy = curry((right: number, left: number): number => left / right)
