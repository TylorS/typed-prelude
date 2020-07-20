import { Effects, get } from '@typed/effects'
import { NonNegativeInteger } from '@typed/new-type'
import { Color, Theme, ThemeColors } from '../domain/model'
import { ThemeEnv } from './ThemeEnv'

export function* getTheme(): Effects<ThemeEnv, Theme> {
  const { theme } = yield* get<ThemeEnv>()

  return theme
}

export function* getThemeColors(): Effects<ThemeEnv, ThemeColors> {
  const { colors } = yield* getTheme()

  return colors
}

export function* getPrimaryColor(): Effects<ThemeEnv, Color> {
  const { primary } = yield* getThemeColors()

  return primary
}

export function* getSecondaryColor(): Effects<ThemeEnv, Color> {
  const { secondary } = yield* getThemeColors()

  return secondary
}

export function* getTertiaryColor(): Effects<ThemeEnv, Color> {
  const { tertiary } = yield* getThemeColors()

  return tertiary
}

export function* getMargin(): Effects<ThemeEnv, NonNegativeInteger> {
  const { margin } = yield* getTheme()

  return margin
}

export function* getPadding(): Effects<ThemeEnv, NonNegativeInteger> {
  const { padding } = yield* getTheme()

  return padding
}

export function* getBorderRadius(): Effects<ThemeEnv, NonNegativeInteger> {
  const { borderRadius } = yield* getTheme()

  return borderRadius
}
