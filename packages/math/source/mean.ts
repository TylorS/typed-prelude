import { divide } from './divide'
import { sum } from './sum'

/** Get the mean of a list of numbers */
export const mean = (numbers: ReadonlyArray<number>): number => divide(numbers.length, sum(numbers))
