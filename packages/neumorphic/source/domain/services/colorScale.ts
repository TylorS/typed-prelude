import { Color, ColorScale } from '../model'

export type ColorScaleIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type GetColorFromScale = (scale: ColorScale) => Color

const createGetColorFromScale = (index: ColorScaleIndex): GetColorFromScale => (scale) =>
  scale[index - 1]

export const getColorOne = createGetColorFromScale(1)
export const getColorTwo = createGetColorFromScale(2)
export const getColorThree = createGetColorFromScale(3)
export const getColorFour = createGetColorFromScale(4)
export const getColorFive = createGetColorFromScale(5)
export const getColorSix = createGetColorFromScale(6)
export const getColorSeven = createGetColorFromScale(7)
export const getColorEight = createGetColorFromScale(8)
export const getColorNine = createGetColorFromScale(9)
