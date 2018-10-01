import { curry } from '../lambda'

export const propOr: {
  <A, K extends PropertyKey>(defaultValue: A, key: K, obj: { [Key in K]: A }): A
  <A, K extends PropertyKey>(defaultValue: A, key: K): (obj: { [Key in K]: A }) => A
  <A>(defaultValue: A): {
    <K extends PropertyKey>(key: K, obj: { [Key in K]: A }): A
    <K extends PropertyKey>(key: K): (obj: { [Key in K]: A }) => A
  }
} = curry(__propOr)

function __propOr<A, K extends PropertyKey>(defaultValue: A, key: K, obj: { [Key in K]: A }): A {
  return obj.hasOwnProperty(key) ? obj[key] : defaultValue
}
