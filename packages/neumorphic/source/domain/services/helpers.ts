import { HexValue } from '../model'

export const padWithZeroIfNeeded = (redOrGreenOrBlue: string): HexValue =>
  (redOrGreenOrBlue.length === 1 ? `0${redOrGreenOrBlue}` : redOrGreenOrBlue) as HexValue
