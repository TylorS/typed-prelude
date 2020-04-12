import { curry } from '@typed/lambda'

/**
 * Check if an object has a given property.
 */
export const hasOwnProperty = curry(
  <A extends PropertyKey, B extends object>(
    key: A,
    obj: B,
  ): obj is B & { readonly [K in A]: unknown } =>
    obj && Object.prototype.hasOwnProperty.call(obj, key),
) as {
  <A extends PropertyKey, B extends object>(key: A, obj: B): obj is B &
    { readonly [K in A]: unknown }
  <A extends PropertyKey>(key: A): <B extends object>(
    obj: B,
  ) => obj is B & { readonly [K in A]: unknown }
}
