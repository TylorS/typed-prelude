import { curry } from '../lambda'

export type NewType<A, Type> = A & { readonly __TYPE__: Type }
export type ExtractNewType<A extends NewType<any, any>> = A extends NewType<infer R, any>
  ? R
  : never

export const isNewType = curry(__isType) as {
  <A extends NewType<any, any>>(
    predicate: (value: A | ExtractNewType<A>) => boolean,
    value: A | ExtractNewType<A>,
  ): value is A
  <A extends NewType<any, any>>(predicate: (value: A | ExtractNewType<A>) => boolean): (
    value: A | ExtractNewType<A>,
  ) => value is A
}

function __isType<A extends NewType<any, any>>(
  predicate: (value: A | ExtractNewType<A>) => boolean,
  value: A | ExtractNewType<A>,
): value is A {
  return predicate(value)
}
