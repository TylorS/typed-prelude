/**
 * Return the keys of a given object.
 */
export const keysOf = <A extends PropertyKey>(obj: Partial<Record<A, any>>): A[] =>
  Object.keys(obj) as A[]
