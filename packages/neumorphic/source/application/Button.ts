import { CryptoEnv, CryptoFailure } from '@typed/crypto'
import { CssEnv, useClassName } from '@typed/css'
import { combine, Effects } from '@typed/effects'
import { HookEnv } from '@typed/hooks'
import { html, VNode, VNodeChildren } from '@typed/html'
import { colorToString, toPx } from '../domain/services'
import { EMPTY_CHILDREN } from './constants'
import { getBorderRadius, getPrimaryColor, getSecondaryColor } from './getTheme'
import { ThemeEnv } from './ThemeEnv'

export function* Button(
  params: ButtonParams,
  children: VNodeChildren = EMPTY_CHILDREN,
): Effects<ButtonEnv, VNode> {
  const { display } = params
  const [primaryColor, secondaryColor, borderRadius] = yield* combine(
    getPrimaryColor(),
    getSecondaryColor(),
    getBorderRadius(),
  )
  const className = yield* useClassName(
    display === ButtonDisplay.Primary && { backgroundColor: colorToString(primaryColor) },
    display === ButtonDisplay.Secondary && { backgroundColor: colorToString(secondaryColor) },
    display === ButtonDisplay.Outline && {
      border: `1px solid ${colorToString(secondaryColor)}`,
      borderRadius: toPx(borderRadius),
    },
    display === ButtonDisplay.Chromeless && { color: colorToString(secondaryColor) },
  )

  return html('button', { className }, children)
}

export type ButtonParams = {
  readonly display: ButtonDisplay
}

export const enum ButtonDisplay {
  Primary,
  Secondary,
  Outline,
  Chromeless,
}

export type ButtonEnv = CssEnv & HookEnv & CryptoEnv & CryptoFailure & ThemeEnv
