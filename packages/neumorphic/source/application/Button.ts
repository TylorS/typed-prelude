import { CryptoEnv, CryptoFailure } from '@typed/crypto'
import { classNames, CssEnv, useClassName } from '@typed/css'
import { combine, Effects } from '@typed/effects'
import { HookEnv } from '@typed/hooks'
import { button, PropsFrom, VNode, VNodeChildren, VNodeProps } from '@typed/html'
import { colorToString, toPx } from '../domain/services'
import { EMPTY_CHILDREN } from './constants'
import { getBorderRadius, getPrimaryColor, getSecondaryColor } from './getTheme'
import { ThemeEnv } from './ThemeEnv'

export function* Button<E>(params: ButtonParams<E>): Button<E> {
  const { display, children = EMPTY_CHILDREN, ...rest } = params
  const [primaryColor, secondaryColor, borderRadius] = yield* combine(
    getPrimaryColor(),
    getSecondaryColor(),
    getBorderRadius(),
  )
  const buttonClassName = yield* useClassName(
    display === ButtonDisplay.Primary && { backgroundColor: colorToString(primaryColor) },
    display === ButtonDisplay.Secondary && { backgroundColor: colorToString(secondaryColor) },
    display === ButtonDisplay.Outline && {
      border: `1px solid ${colorToString(secondaryColor)}`,
      borderRadius: toPx(borderRadius),
    },
    display === ButtonDisplay.Chromeless && { color: colorToString(secondaryColor) },
  )

  return button<E>({ ...rest, className: classNames(buttonClassName, rest.className) }, children)
}

export type ButtonParams<E = unknown> = VNodeProps<E, 'button'> &
  PropsFrom<'button'> & {
    readonly display: ButtonDisplay
    readonly children?: VNodeChildren
  }

export const enum ButtonDisplay {
  Primary,
  Secondary,
  Outline,
  Chromeless,
}

export interface Button<E> extends Effects<ButtonEnv, VNode<E>> {}

export type ButtonEnv = CssEnv & HookEnv & CryptoEnv & CryptoFailure & ThemeEnv
