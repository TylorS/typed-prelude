import {
  arrayBufferToString,
  CryptoEnv,
  CryptoFailure,
  generateShaHash,
  stringToArrayBuffer,
} from '@typed/crypto'
import { Effects, get } from '@typed/effects'
import { HookEnv, useMemo } from '@typed/hooks'
import { isNotUndefined, isNumber } from '@typed/logic'
import { ClassName, Css, CssProperties, GenerateClassName, NestedCssProperties } from '../model'
import { classNames } from './classNames'
import { CssEnv } from './CssEnv'

const CLASS_NAME_PREFIX = 't'
const DEFAULT_CLASS_NAME_LENGTH = 12

const toPx = (sOrN: string | number) => (isNumber(sOrN) ? `${sOrN}px` : sOrN)
const hyphenate = (s: string) => s.replace(/[A-Z]|^ms/g, '-$&').toLowerCase()

export const useClassName: GenerateClassName<
  CssEnv & HookEnv & CryptoEnv & CryptoFailure
> = function* (properties): Effects<CssEnv & HookEnv & CryptoEnv & CryptoFailure, ClassName> {
  const hashes = yield* generatePropertyHashes(properties)
  const className = yield* useMemo((hs) => classNames(...hs), [hashes])

  return className
}

function* generatePropertyHashes(
  properties: NestedCssProperties,
): Effects<CssEnv & HookEnv & CryptoEnv & CryptoFailure, ClassName[]> {
  const { styleSheet, rules, classNameLength = DEFAULT_CLASS_NAME_LENGTH } = yield* get<CssEnv>()

  const classNames: ClassName[] = []
  const keys = Object.keys(properties).sort() as (keyof NestedCssProperties)[]

  for (const key of keys) {
    if (key === '$nest') {
      const nested = properties[key]!
      const nestedKeys = Object.keys(nested).sort()

      for (const nestedKey of nestedKeys) {
        yield* updateNestedRule(
          nested[nestedKey],
          nestedKey,
          rules,
          classNames,
          classNameLength,
          styleSheet,
        )
      }
    } else {
      yield* updateRule(
        getHashable(properties, key),
        rules,
        classNames,
        classNameLength,
        styleSheet,
      )
    }
  }

  return classNames
}

function* updateNestedRule(
  properties: CssProperties,
  nestedKey: string,
  rules: Map<string, readonly [ClassName, Css]>,
  classNames: ClassName[],
  classNameLength: number,
  styleSheet?: { textContent: string },
) {
  const keys = Object.keys(properties).sort() as (keyof CssProperties)[]

  for (const key of keys) {
    const hashKey = `${nestedKey}${getHashable(properties, key)}`

    yield* updateRule(hashKey, rules, classNames, classNameLength, styleSheet)
  }
}

function* updateRule(
  hashable: string,
  rules: Map<string, readonly [ClassName, Css]>,
  classNames: ClassName[],
  classNameLength: number,
  styleSheet?: { textContent: string },
) {
  if (rules.has(hashable)) {
    const [className] = rules.get(hashable)!

    classNames.push(className)

    return
  }

  const [className, rule] = yield* getClassName(hashable, classNameLength)

  if (styleSheet) {
    if (!styleSheet.textContent.includes(className)) {
      styleSheet.textContent += rule
    }
  }

  rules.set(hashable, [className, rule])
  classNames.push(className)
}

function getHashable(properties: CssProperties, key: Exclude<keyof CssProperties, '$nest'>) {
  const hyphenatedKey = hyphenate(key)
  const values = toArray(properties[key]).filter(isNotUndefined)
  const css: string[] = []

  for (let i = values.length - 1; i >= 0; --i) {
    const value = values[i]

    css.push(`${hyphenatedKey}:${toPx(value)}`)
  }

  const hashable = `{${css.join(`;`)}}`

  return hashable
}

function* getClassName(hashable: string, classNameLength: number) {
  const buffer = stringToArrayBuffer(hashable)
  const hash = yield* generateShaHash(1, buffer)
  const className = escape(
    CLASS_NAME_PREFIX + convertToHex(arrayBufferToString(hash)).slice(0, classNameLength),
  ) as ClassName

  const rule = `.${className}${hashable}` as Css

  return [className, rule] as const
}

function toArray<A>(value: A | readonly A[]): ReadonlyArray<A> {
  return Array.isArray(value) ? value : [value]
}

/**
 * Escape a CSS class name.
 */
function escape(str: string) {
  return str.replace(/[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g, '\\$&')
}

function convertToHex(str: string) {
  let hex = ''
  for (let i = 0; i < str.length; i++) {
    hex += '' + str.charCodeAt(i).toString(16)
  }
  return hex
}
