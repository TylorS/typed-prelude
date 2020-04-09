import { keysOf } from './keysOf'

/**
 * Get all the values contained in an object.
 */
export const valuesOf = <A extends Record<any, any>>(
  obj: A,
): A extends Record<any, infer R> ? R[] : [] => {
  const keys = keysOf(obj)

  return keys.map((x) => obj[x]) as any
}
