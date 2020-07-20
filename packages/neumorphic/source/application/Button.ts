import { CryptoEnv, CryptoFailure } from '@typed/crypto'
import { classNames, CssEnv, NestedCssProperties, useClassName } from '@typed/css'
import { Effects } from '@typed/effects'
import { HookEnv } from '@typed/hooks'
import { button, PropsFrom, VNode, VNodeChildren, VNodeProps } from '@typed/html'
import { Color, Theme } from '../domain'
import { colorToString, darken, lighten, toPx } from '../domain/services'
import { EMPTY_CHILDREN } from './constants'
import { getTheme } from './getTheme'
import { ThemeEnv } from './ThemeEnv'

export function* Button<E>(params: ButtonParams<E>): Button<E> {
  const { display, children = EMPTY_CHILDREN, styles, ...rest } = params
  const theme = yield* getTheme()
  const { primary, secondary, tertiary } = theme.colors
  // TODO: Create an icon for :active to replace cursor
  const buttonClassName = yield* useClassName(
    { cursor: 'pointer' },
    display === ButtonDisplay.Primary && createColorfulButtonStyles(primary, theme, styles),
    display === ButtonDisplay.Secondary && createColorfulButtonStyles(secondary, theme, styles),
    display === ButtonDisplay.Tertiary && createColorfulButtonStyles(tertiary, theme, styles),
    display === ButtonDisplay.Outline && {
      border: `1px solid ${colorToString(secondary)}`,
      borderRadius: toPx(theme.borderRadius),
      ...styles,
    },
    display === ButtonDisplay.Chromeless && { color: colorToString(secondary), ...styles },
  )

  return button<E>({ ...rest, className: classNames(buttonClassName, rest.className) }, children)
}

function createColorfulButtonStyles(color: Color, theme: Theme, styles?: NestedCssProperties) {
  const { borderRadius, padding, transitionDuration } = theme

  return {
    backgroundColor: colorToString(color),
    outline: 'none',
    border: `${toPx(padding)} ${colorToString(darken(color, 30))}`,
    borderRadius,
    boxShadow: `${toPx(padding)} ${toPx(padding)} ${toPx(padding, 2)} ${colorToString(
      darken(color, 30),
    )}, -${toPx(padding)} -${toPx(padding)} ${toPx(padding, 2)} ${colorToString(
      lighten(color, 30),
    )}`,
    padding: `${toPx(padding, 2)} ${toPx(padding, 3)}`,
    transitionDuration: `${transitionDuration}ms`,
    $nest: {
      ':active': {
        boxShadow: `inset ${toPx(padding, 0.5)} ${toPx(padding, 0.5)} ${toPx(
          padding,
        )} ${colorToString(darken(color, 20))}, inset -${toPx(padding, 0.5)} -${toPx(
          padding,
          0.5,
        )} ${toPx(padding)} ${colorToString(lighten(color, 20))}`,
      },
    },
    ...styles,
  }
}

export type ButtonParams<E = unknown> = VNodeProps<E, 'button'> &
  PropsFrom<'button'> & {
    readonly display: ButtonDisplay
    readonly styles?: NestedCssProperties
    readonly children?: VNodeChildren
  }

export const enum ButtonDisplay {
  Primary,
  Secondary,
  Tertiary,
  Outline,
  Chromeless,
}

export interface Button<E> extends Effects<ButtonEnv, VNode<E>> {}

export type ButtonEnv = CssEnv & HookEnv & CryptoEnv & CryptoFailure & ThemeEnv
