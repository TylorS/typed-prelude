import { CryptoEffects, CryptoEnv, CryptoFailure } from '@typed/crypto'
import { Effects, get, sequence } from '@typed/effects'
import { HookEnv, useMemoEffect } from '@typed/hooks'
import { isNotUndefined, isObject } from '@typed/logic'
import {
  ClassName,
  Css,
  CssProperties,
  GenerateClassName,
  NestedCssProperties,
  Rule,
  Rules,
} from '../model'
import { classNames } from './classNames'
import { CssEnv } from './CssEnv'
import { getCss } from './getCss'
import {
  generateCssHash,
  hyphenate,
  mergeObjects,
  notAnd,
  shouldNotAddPixels,
  toArray,
  toPx,
} from './helpers'

/**
 * Deterministically creates classNames for a series of objects that define the styles to be applied.
 */
export const useClassName: GenerateClassName<
  CssEnv & HookEnv & CryptoEnv & CryptoFailure
> = function* (...properties) {
  return yield* useMemoEffect(function* (...props) {
    const { rules, styleSheet } = yield* get()

    const startSize = rules.size
    // Merge together properties to avoid creating rules that need to be overridden. Last value wins.
    const merged = mergeObjects(props.filter(isObject as (x: any) => x is NestedCssProperties))
    const generatedClassNames = yield* generatePropertyClassNames(merged)

    if (styleSheet && startSize !== rules.size) {
      styleSheet.textContent = getCss(rules)
    }

    return classNames(...generatedClassNames)
  }, properties)
}

/**
 * Creates atomic ClassNames for all of the styles defined in NestedCssProperties
 */
function* generatePropertyClassNames(
  properties: NestedCssProperties,
  nestedSelector: string = '',
  media: string = '',
): Effects<CssEnv & HookEnv & CryptoEnv & CryptoFailure, readonly ClassName[]> {
  const { rules } = yield* get<CssEnv>()
  const keys = Object.keys(properties)
    .sort()
    .filter((x) => x !== '$nest') as (keyof CssProperties)[]

  const propertyClassNames = yield* sequence(function* (key) {
    const props = getPropertiesString(properties, key)

    return yield* getClassName({
      ruleKey: `${media}${nestedSelector}${props}`,
      props,
      nestedSelector,
      media,
      rules,
    })
  }, keys)

  if (!properties.$nest) {
    return propertyClassNames
  }

  const nestedProperties = properties.$nest
  const nestedKeys = Object.keys(properties.$nest).sort()
  const nestedClassNames = yield* sequence(function* (nestedKey) {
    const isMediaQuery = nestedKey.startsWith('@')

    return yield* generatePropertyClassNames(
      nestedProperties[nestedKey]!,
      notAnd(isMediaQuery ? nestedSelector : nestedSelector + ' ' + notAnd(nestedKey)).trim(),
      isMediaQuery ? nestedKey : media,
    )
  }, nestedKeys)

  return [
    ...propertyClassNames,
    ...nestedClassNames.reduce((acc, x) => [...acc, ...x] as ClassName[], [] as ClassName[]),
  ]
}

type GetClassNameOptions = {
  // Used to index in rules map
  ruleKey: string
  // properties being wrapped into a atomic class
  props: string
  // Nested-selector
  nestedSelector: string
  // Media Query
  media: string
  // Map of all rules currently in use
  rules: Rules
}

/**
 * Get the className for an existing rule or generate it
 */
function* getClassName(options: GetClassNameOptions) {
  const { ruleKey, rules } = options
  const [className] = rules.has(ruleKey) ? rules.get(ruleKey)! : yield* generateRule(options)

  return className as ClassName
}

/**
 * Deterministically generates a CSS string representation of a CSS property with any of it's
 * possible fallback values.
 */
function getPropertiesString(properties: CssProperties, key: keyof CssProperties): string {
  const hyphenatedKey = hyphenate(key)
  const values = toArray(properties[key]).filter(isNotUndefined).reverse()
  const css = values.reduce(
    (acc, value) => acc.concat(`${hyphenatedKey}:${shouldNotAddPixels(key) ? value : toPx(value)}`),
    [] as readonly string[],
  )

  return `{${css.join(`;`)}}`
}

/**
 * Generate a CSS rule
 */
function* generateRule(options: GetClassNameOptions): CryptoEffects<CssEnv, Rule> {
  const { ruleKey, props, media, nestedSelector, rules } = options
  const className = (yield* generateCssHash(ruleKey)) as ClassName
  const css = `.${className}${nestedSelector}${props}` as Css
  const rule: Rule = media ? [className, `${media}{${css}}` as Css] : [className, css]

  rules.set(ruleKey, rule)

  return rule
}
