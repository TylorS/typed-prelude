import { HexValue, Percentage } from '../model'

export const padWithZeroIfNeeded = (redOrGreenOrBlue: string): HexValue =>
  (redOrGreenOrBlue.length === 1 ? `0${redOrGreenOrBlue}` : redOrGreenOrBlue) as HexValue

export const asPercentage = (n: number): Percentage => Math.min(100, Math.max(0, n)) as Percentage
