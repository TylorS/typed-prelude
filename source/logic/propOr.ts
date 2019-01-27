import { curry } from '@typed/lambda'

export const propOr = curry(__propOr) as {
  <A, K extends PropertyKey>(defaultValue: A, key: K, obj: { [Key in K]: A }): A
  <A, K extends PropertyKey>(defaultValue: A, key: K): (obj: { [Key in K]: A }) => A
  <A>(defaultValue: A): {
    <K extends PropertyKey>(key: K, obj: { [Key in K]: A }): A
    <K extends PropertyKey>(key: K): (obj: { [Key in K]: A }) => A
  }
}

function __propOr<A, K extends PropertyKey>(defaultValue: A, key: K, obj: { [Key in K]: A }): A {
  return obj.hasOwnProperty(key) ? obj[key] : defaultValue
}
