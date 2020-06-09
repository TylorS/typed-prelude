import {
  arrayBufferToString,
  CryptoEffects,
  generateShaHash,
  stringToArrayBuffer,
} from '@typed/crypto'
import { get } from '@typed/effects'
import { isNumber } from '@typed/logic'
import { ClassName, NestedCssProperties } from '../model'
import { CssEnv } from './CssEnv'

export const CLASS_NAME_ESCAPE_REGEX = /[ !#$%&()*+,./;<=>?@[\]^`{|}~"'\\]/g
export const CLASS_NAME_ESCAPE_REPLACEMENT = '\\$&'

export const DEFAULT_CLASS_NAME_PREFIX = 't' // Used to ensure hash turns out as a valid css selector which cannot start with a number
export const DEFAULT_CLASS_NAME_LENGTH = 6

export const HYPHENATE_REGEX = /[A-Z]|^ms/g
export const HYPHENATE_REPLACEMENT = '-$&'
export const AND_REGEX = /^&/

export const toPx = (sOrN: string | number) => (isNumber(sOrN) ? `${sOrN}px` : sOrN)
export const hyphenate = (s: string) =>
  s.replace(HYPHENATE_REGEX, HYPHENATE_REPLACEMENT).toLowerCase()
export const notAnd = (s: string) => s.replace(AND_REGEX, '')

export function toArray<A>(value: A | readonly A[]): ReadonlyArray<A> {
  return Array.isArray(value) ? value : [value]
}

/**
 * Escape a CSS class name.
 */
export function escape(str: string): ClassName {
  return str.replace(CLASS_NAME_ESCAPE_REGEX, CLASS_NAME_ESCAPE_REPLACEMENT) as ClassName
}

/**
 * Ensure a hexadecimal
 */
export function convertToHex(str: string) {
  let hex = ''
  for (let i = 0; i < str.length; i++) {
    hex += '' + str.charCodeAt(i).toString(16)
  }
  return hex
}

/**
 * Merge together many NestedCssProperties
 */
export function mergeObjects(properties: ReadonlyArray<NestedCssProperties>): NestedCssProperties {
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

/**
 * Generate a SHA-1 of the ruleKey to produce a className
 */
export function* generateCssHash(ruleKey: string): CryptoEffects<CssEnv, string> {
  const {
    classNamePrefix = DEFAULT_CLASS_NAME_PREFIX,
    classNameLength = DEFAULT_CLASS_NAME_LENGTH,
  } = yield* get()

  const buffer = stringToArrayBuffer(ruleKey)
  const hash = yield* generateShaHash(1, buffer)

  return escape(classNamePrefix + convertToHex(arrayBufferToString(hash)).slice(0, classNameLength))
}
