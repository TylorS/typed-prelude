import { Effects } from '@typed/effects'
import { NewType } from '@typed/new-type'
import { NestedCssProperties } from './CssProperties'

export type Rules = Map<string, Rule>

export type Rule = readonly [ClassName, Css]

// Css String
export type Css = NewType<string, 'Css'>

// Space-separated list of strings
export type ClassName = NewType<string, 'ClassName'>

/**
 * Given a set of class names should output a set of class names to apply
 */
export type GenerateClassName<E> = (
  ...properties: ReadonlyArray<NestedCssProperties>
) => Effects<E, ClassName>

/**
 * Given a list of class names or other common patterns like "foo && ClassName".
 */
export type GetClassNames = (
  ...classNames: ReadonlyArray<string | ClassName | null | undefined | boolean>
) => ClassName

export type GetCss = (rules: Rules) => Css
