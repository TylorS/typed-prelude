import { modifier } from './escapes'

// other modifiers
export const reset = modifier([0, 0])
export const bold = modifier([1, 22])
export const dim = modifier([2, 22])
export const italic = modifier([3, 23])
export const underline = modifier([4, 24])
export const inverse = modifier([7, 27])
export const hidden = modifier([8, 28])
export const strikethrough = modifier([9, 29])
