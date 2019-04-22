import { curry, Predicate } from '@typed/lambda'

/**
 * Helper type for creating ad-hoc new types
 */
export type NewType<A, Type> = A & { readonly __TYPE__: Type }

/**
 * Get the underlying type of a NewType
 */
export type Base<A> = A extends NewType<infer R, any> ? R : never

/**
 * Validate a NewType
 * @param predicate :: (a -> boolean)
 * @param value :: a
 * @returns :: boolean
 */
export const isNewType = curry(__isType) as {
  <A extends NewType<any, any>>(predicate: Predicate<A | Base<A>>, value: A | Base<A>): value is A
  <A extends NewType<any, any>>(predicate: Predicate<A | Base<A>>): (
    value: A | Base<A>,
  ) => value is A
}

function __isType<A extends NewType<any, any>>(
  predicate: Predicate<A | Base<A>>,
  value: A | Base<A>,
): value is A {
  return predicate(value)
}
