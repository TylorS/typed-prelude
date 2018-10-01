import { multiply } from './multiply'

export const product = (numbers: number[]): number => numbers.reduce(multiply, 1)
