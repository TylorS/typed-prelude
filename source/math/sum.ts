import { add } from './add'

/** Get the sum of a list of numbers */
export const sum = (numbers: ReadonlyArray<number>): number => numbers.reduce(add, 0)
