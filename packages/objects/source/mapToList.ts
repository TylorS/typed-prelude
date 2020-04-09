import { curry } from '@typed/lambda'

/**
 * Map over an object into a list of values.
 */
export const mapToList: {
  <A extends keyof any, B, C>(fn: (key: A, value: B) => C, obj: Record<A, B>): C[]
  <A extends keyof any, B, C>(fn: (key: A, value: B) => C): (obj: Record<A, B>) => C[]
} = curry(__mapToList)

function __mapToList<A extends keyof any, B, C>(
  fn: (key: A, value: B) => C,
  obj: Record<A, B>,
): C[] {
  const keys = Object.keys(obj) as A[]

  return keys.map((key) => fn(key, obj[key]))
}
