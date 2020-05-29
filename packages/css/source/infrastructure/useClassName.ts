import {
  arrayBufferToString,
  CryptoEffects,
  CryptoEnv,
  CryptoFailure,
  generateShaHash,
  stringToArrayBuffer,
} from '@typed/crypto'
import { Effects, get, sequence } from '@typed/effects'
import { HookEnv, useMemoEffect } from '@typed/hooks'
import { isNotUndefined, isNumber, isObject } from '@typed/logic'
import {
  ClassName,
  Css,
  CssProperties,
  GenerateClassName,
  NestedCssProperties,
  Rule,
} from '../model'
import { classNames } from './classNames'
import { CssEnv } from './CssEnv'
import { getCss } from './getCss'

const DEFAULT_CLASS_NAME_PREFIX = 't' // Used to ensure hash turns out as a valid css selector which cannot start with a number
const DEFAULT_CLASS_NAME_LENGTH = 6

const CLASS_NAME_ESCAPE_REGEX = /[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g
const CLASS_NAME_ESCAPE_REPLACEMENT = '\\$&'
const HYPHENATE_REGEX = /[A-Z]|^ms/g
const HYPHENATE_REPLACEMENT = '-$&'
const AND_REGEX = /^&/

const toPx = (sOrN: string | number) => (isNumber(sOrN) ? `${sOrN}px` : sOrN)
const hyphenate = (s: string) => s.replace(HYPHENATE_REGEX, HYPHENATE_REPLACEMENT).toLowerCase()
const notAnd = (s: string) => s.replace(AND_REGEX, '')

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
  const {
    rules,
    classNamePrefix = DEFAULT_CLASS_NAME_PREFIX,
    classNameLength = DEFAULT_CLASS_NAME_LENGTH,
  } = yield* get<CssEnv>()

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
      classNamePrefix,
      classNameLength,
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
  rules: Map<string, readonly [ClassName, Css]>
  // Prefix used to ensure a valid className
  classNamePrefix: string
  // Length of className hash - convenient if there's ever a collision
  classNameLength: number
}

/**
 * Get the className for an existing rule or generate it
 */
function* getClassName(options: GetClassNameOptions) {
  const { ruleKey, rules } = options
  const [className] = rules.has(ruleKey) ? rules.get(ruleKey)! : yield* generateRule(options)

  return className
}

/**
 * Deterministically generates a CSS string representation of a CSS property with any of it's
 * possible fallback values.
 */
function getPropertiesString(properties: CssProperties, key: keyof CssProperties): string {
  const hyphenatedKey = hyphenate(key)
  const values = toArray(properties[key]).filter(isNotUndefined).reverse()
  const css = values.reduce(
    (acc, value) => acc.concat(`${hyphenatedKey}:${toPx(value)}`),
    [] as readonly string[],
  )

  return `{${css.join(`;`)}}`
}

/**
 * Generate a CSS rule
 */
function* generateRule(options: GetClassNameOptions): CryptoEffects<unknown, Rule> {
  const { ruleKey, props, media, nestedSelector, classNamePrefix, classNameLength, rules } = options
  const className = yield* generateClassName(ruleKey, classNamePrefix, classNameLength)
  const css = `.${className}${nestedSelector}${props}` as Css
  const rule: Rule = media ? [className, `${media}{${css}}` as Css] : [className, css]

  rules.set(ruleKey, rule)

  return rule
}

/**
 * Generate a SHA-1 of the ruleKey to produce a className
 */
function* generateClassName(ruleKey: string, classNamePrefix: string, classNameLength: number) {
  const buffer = stringToArrayBuffer(ruleKey)
  const hash = yield* generateShaHash(1, buffer)
  const className = escape(
    classNamePrefix + convertToHex(arrayBufferToString(hash)).slice(0, classNameLength),
  ) as ClassName

  return className
}

function toArray<A>(value: A | readonly A[]): ReadonlyArray<A> {
  return Array.isArray(value) ? value : [value]
}

/**
 * Escape a CSS class name.
 */
function escape(str: string): ClassName {
  return str.replace(CLASS_NAME_ESCAPE_REGEX, CLASS_NAME_ESCAPE_REPLACEMENT) as ClassName
}

/**
 * Ensure a hexadecimal
 */
function convertToHex(str: string) {
  let hex = ''
  for (let i = 0; i < str.length; i++) {
    hex += '' + str.charCodeAt(i).toString(16)
  }
  return hex
}

/**
 * Merge together many NestedCssProperties
 */

function mergeObjects(properties: ReadonlyArray<NestedCssProperties>) {
  const result: Record<any, any> = {}

  for (const props of properties) {
    // tslint:disable-next-line:forin
    for (const key in props) {
      /** Falsy values except a explicit 0 is ignored */
      const val: any = (props as any)[key]
      if (!val && val !== 0) {
        continue
      }

      /** if nested media or pseudo selector */
      if (key === '$nest' && val) {
        result[key] = result.$nest ? mergeObjects([result.$nest, val]) : val
      } else if (key.indexOf('&') !== -1 || key.indexOf('@media') === 0) {
        result[key] = result[key] ? mergeObjects([result[key], val]) : val
      } else {
        result[key] = val
      }
    }
  }

  return result as NestedCssProperties
}
