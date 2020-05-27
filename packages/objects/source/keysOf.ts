/**
 * Return the keys of a given object.
 */
export const keysOf = <A extends Partial<Readonly<Record<PropertyKey, any>>>>(
  obj: A,
): ReadonlyArray<keyof A> => Object.keys(obj) as ReadonlyArray<keyof A>
