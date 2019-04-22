import { curry } from '@typed/lambda'

/**
 * Check if an object has a given property.
 */
export const hasOwnProperty: {
  <A extends PropertyKey, B extends Partial<Record<A, any>>>(key: A, obj: B): boolean
  <A extends PropertyKey>(key: A): <B extends Partial<Record<A, any>>>(obj: B) => boolean
} = curry(
  <A extends PropertyKey>(key: A, obj: Record<A, any>): boolean => obj && obj.hasOwnProperty(key),
)
