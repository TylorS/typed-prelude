import { multiply } from './multiply'

/** Get the product of a list of numbers */
export const product = (numbers: ReadonlyArray<number>): number => numbers.reduce(multiply, 1)
