/**
 * Helper type for creating ad-hoc new types
 */
export type NewType<A, Type> = A & { readonly __TYPE__: Type }

/**
 * Get the underlying type of a NewType
 */
export type Base<A extends NewType<any, any>> = A extends NewType<infer R, any> ? R : never
/**
 * Get type name from a NewType
 */
export type TypeName<A extends NewType<any, any>> = A extends NewType<any, infer R> ? R : never

export const unsafeCoerce = <A extends NewType<any, any>>(value: Base<A>): A => value as any

/**
 * Validate a NewType
 * @param predicate :: (a -> boolean)
 * @param value :: a
 * @returns :: boolean
 */
export const isNewType = <A, B extends NewType<A, any>>(refinement: (value: A) => value is B) => (
  value: A,
): value is B => refinement(value)
