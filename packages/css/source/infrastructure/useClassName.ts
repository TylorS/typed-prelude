import {
  arrayBufferToString,
  CryptoEnv,
  CryptoFailure,
  generateShaHash,
  stringToArrayBuffer,
} from '@typed/crypto'
import { Effects, get, sequence } from '@typed/effects'
import { HookEnv, useMemo, useMemoEffect } from '@typed/hooks'
import { isNotUndefined, isNumber } from '@typed/logic'
import { ClassName, Css, CssProperties, GenerateClassName, NestedCssProperties } from '../model'
import { classNames } from './classNames'
import { CssEnv } from './CssEnv'
import { getCss } from './getCss'

const CLASS_NAME_PREFIX = 't'
const DEFAULT_CLASS_NAME_LENGTH = 12

const toPx = (sOrN: string | number) => (isNumber(sOrN) ? `${sOrN}px` : sOrN)
const hyphenate = (s: string) => s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase()
const notAnd = (s: string) => s.replace(/^&/, '')

export const useClassName: GenerateClassName<
  CssEnv & HookEnv & CryptoEnv & CryptoFailure
> = function* (...properties): Effects<CssEnv & HookEnv & CryptoEnv & CryptoFailure, ClassName> {
  const hashes = yield* useMemoEffect(
    (...props) => sequence(generatePropertyHashes, props),
    properties,
  )
  const className = yield* useMemo((hs) => classNames(...hs.flat().sort()), [hashes])

  return className
}

function* generatePropertyHashes(
  properties: NestedCssProperties,
  nestedSelector: string = '',
  media: string = '',
): Effects<CssEnv & HookEnv & CryptoEnv & CryptoFailure, ClassName[]> {
  const { styleSheet, rules, classNameLength = DEFAULT_CLASS_NAME_LENGTH } = yield* get<CssEnv>()
  const startSize = rules.size
  const classNames: ClassName[] = []
  const keys = Object.keys(properties).sort() as (keyof NestedCssProperties)[]

  for (const key of keys) {
    if (key !== '$nest') {
      const props = getPropertiesString(properties, key)

      yield* updateRule({
        ruleKey: `${media}${nestedSelector}${props}`,
        props,
        nestedSelector,
        media,
        rules,
        classNames,
        classNameLength,
      })
    }
  }

  if (properties.$nest) {
    const nestedKeys = Object.keys(properties.$nest).sort()

    for (const nestedKey of nestedKeys) {
      const isMediaQuery = nestedKey.startsWith('@')
      const nestedClassNames = yield* generatePropertyHashes(
        properties.$nest[nestedKey]!,
        notAnd(isMediaQuery ? nestedSelector : nestedSelector + ' ' + nestedKey).trim(),
        isMediaQuery ? nestedKey : media,
      )

      classNames.push(...nestedClassNames)
    }
  }

  if (styleSheet && startSize !== rules.size) {
    styleSheet.textContent = getCss(rules)
  }

  return classNames
}

type UpdateRuleOptions = {
  // Used to index in rules map
  ruleKey: string
  // properties being wrapped into a atomic class
  props: string
  // Nested-selector
  nestedSelector: string
  media: string
  rules: Map<string, readonly [ClassName, Css]>
  classNames: ClassName[]
  classNameLength: number
}

function* updateRule(options: UpdateRuleOptions) {
  const { ruleKey, rules, classNames } = options

  if (rules.has(ruleKey)) {
    const [className] = rules.get(ruleKey)!

    classNames.push(className)

    return
  }

  const rule = yield* getRule(options)

  rules.set(ruleKey, rule)
  classNames.push(rule[0])
}

function getPropertiesString(properties: CssProperties, key: keyof CssProperties) {
  const hyphenatedKey = hyphenate(key)
  const values = toArray(properties[key]).filter(isNotUndefined).reverse()
  const css = values.reduce(
    (acc, value) => acc.concat(`${hyphenatedKey}:${toPx(value)}`),
    [] as readonly string[],
  )

  return `{${css.join(`;`)}}`
}

function* getRule(options: UpdateRuleOptions) {
  const { ruleKey, props, media, nestedSelector, classNameLength } = options
  const className = yield* getClassName(ruleKey, classNameLength)
  const css = `.${className}${nestedSelector}${props}` as Css

  if (media) {
    return [className, `${media}{${css}}` as Css] as const
  }

  return [className, css] as const
}

function* getClassName(hashable: string, classNameLength: number) {
  const buffer = stringToArrayBuffer(hashable)
  const hash = yield* generateShaHash(1, buffer)
  const className = escape(
    CLASS_NAME_PREFIX + convertToHex(arrayBufferToString(hash)).slice(0, classNameLength),
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
  return str.replace(/[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g, '\\$&') as ClassName
}

function convertToHex(str: string) {
  let hex = ''
  for (let i = 0; i < str.length; i++) {
    hex += '' + str.charCodeAt(i).toString(16)
  }
  return hex
}
