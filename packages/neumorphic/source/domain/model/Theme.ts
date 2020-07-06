import { NonNegativeInteger } from '@typed/new-type'
import { Color } from './Color'

export interface Theme {
  readonly mode: ThemeMode
  readonly colors: ThemeColors
  readonly borderRadius: NonNegativeInteger
  readonly margin: NonNegativeInteger
  readonly padding: NonNegativeInteger
}

export const enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeColors {
  readonly primary: Color
  readonly secondary: Color
  readonly greyScale: ColorScale
}

// Darkest to lightest
export type ColorScale = readonly [Color, Color, Color, Color, Color, Color, Color, Color, Color]
