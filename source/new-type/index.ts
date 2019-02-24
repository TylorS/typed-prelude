import { curry, Predicate } from '@typed/lambda'

export type NewType<A, Type> = A & { readonly __TYPE__: Type }
export type Base<A extends NewType<any, any>> = A extends NewType<infer R, any> ? R : never

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
