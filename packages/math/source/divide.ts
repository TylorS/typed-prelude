import { curry } from '@typed/lambda'

/** Divide a number by another */
export const divide: {
  (left: number, right: number): number
  (left: number): (right: number) => number
} = curry((left: number, right: number) => left / right)

/** Composition-ready division */
export const divideBy: {
  (left: number, right: number): number
  (left: number): (right: number) => number
} = curry((right: number, left: number): number => left / right)
