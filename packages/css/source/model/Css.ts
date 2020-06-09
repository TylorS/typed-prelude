import { Effects } from '@typed/effects'
import { NewType } from '@typed/new-type'
import { CssProperties, NestedCssProperties } from './CssProperties'

export type Rules = Map<string, Rule>

export type Rule = readonly [ClassName | AnimationName, Css]

// Css String
export type Css = NewType<string, 'Css'>

// Space-separated list of strings
export type ClassName = NewType<string, 'ClassName'>

// Css Selector
export type CssSelector = NewType<string, 'CssSelector'>

/**
 * Given a set of class names should output a set of class names to apply
 */
export type GenerateClassName<E> = (
  ...properties: ReadonlyArray<NestedCssProperties | null | undefined | false>
) => Effects<E, ClassName>

/**
 * Given a list of class names or other common patterns like "foo && ClassName".
 */
export type GetClassNames = (
  ...classNames: ReadonlyArray<string | ClassName | null | undefined | false>
) => ClassName

export type GetCss = (rules: Rules) => Css

/**
 * Converts a className into a CssSelector
 */
export type GetCssSelector = (className: ClassName) => CssSelector

// Animation Name
export type AnimationName = NewType<string, 'AnimationName'>

/**
 * Given a set of keyframes, generates an animation name
 */

export type GenerateAnimationName<E> = (keyframes: KeyFrame) => Effects<E, AnimationName>

export type KeyFrame = FromToKeyFrame | PercentageKeyFrame

export type FromToKeyFrame = {
  readonly from: CssProperties
  readonly to: CssProperties
}

export type PercentageKeyFrame = Readonly<
  Partial<{
    '0%': CssProperties
    '1%': CssProperties
    '2%': CssProperties
    '3%': CssProperties
    '4%': CssProperties
    '5%': CssProperties
    '6%': CssProperties
    '7%': CssProperties
    '8%': CssProperties
    '9%': CssProperties
    '10%': CssProperties
    '11%': CssProperties
    '12%': CssProperties
    '13%': CssProperties
    '14%': CssProperties
    '15%': CssProperties
    '16%': CssProperties
    '17%': CssProperties
    '18%': CssProperties
    '19%': CssProperties
    '20%': CssProperties
    '21%': CssProperties
    '22%': CssProperties
    '23%': CssProperties
    '24%': CssProperties
    '25%': CssProperties
    '26%': CssProperties
    '27%': CssProperties
    '28%': CssProperties
    '29%': CssProperties
    '30%': CssProperties
    '31%': CssProperties
    '32%': CssProperties
    '33%': CssProperties
    '34%': CssProperties
    '35%': CssProperties
    '36%': CssProperties
    '37%': CssProperties
    '38%': CssProperties
    '39%': CssProperties
    '40%': CssProperties
    '41%': CssProperties
    '42%': CssProperties
    '43%': CssProperties
    '44%': CssProperties
    '45%': CssProperties
    '46%': CssProperties
    '47%': CssProperties
    '48%': CssProperties
    '49%': CssProperties
    '50%': CssProperties
    '51%': CssProperties
    '52%': CssProperties
    '53%': CssProperties
    '54%': CssProperties
    '55%': CssProperties
    '56%': CssProperties
    '57%': CssProperties
    '58%': CssProperties
    '59%': CssProperties
    '60%': CssProperties
    '61%': CssProperties
    '62%': CssProperties
    '63%': CssProperties
    '64%': CssProperties
    '65%': CssProperties
    '66%': CssProperties
    '67%': CssProperties
    '68%': CssProperties
    '69%': CssProperties
    '70%': CssProperties
    '71%': CssProperties
    '72%': CssProperties
    '73%': CssProperties
    '74%': CssProperties
    '75%': CssProperties
    '76%': CssProperties
    '77%': CssProperties
    '78%': CssProperties
    '79%': CssProperties
    '80%': CssProperties
    '81%': CssProperties
    '82%': CssProperties
    '83%': CssProperties
    '84%': CssProperties
    '85%': CssProperties
    '86%': CssProperties
    '87%': CssProperties
    '88%': CssProperties
    '89%': CssProperties
    '90%': CssProperties
    '91%': CssProperties
    '92%': CssProperties
    '93%': CssProperties
    '94%': CssProperties
    '95%': CssProperties
    '96%': CssProperties
    '97%': CssProperties
    '98%': CssProperties
    '99%': CssProperties
    '100%': CssProperties
  }>
>
