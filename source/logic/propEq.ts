import { curry } from '@typed/lambda'
import { equals } from '../common/equals'

export const propEq = curry(
  <O, K extends keyof O>(key: K, value: O[K], obj: O): boolean => equals(obj[key], value),
) as {
  <K extends PropertyKey, A, O extends Readonly<Record<K, A>>>(key: K, value: A, object: O): boolean
  <K extends PropertyKey, A>(key: K, value: A): <O extends Readonly<Record<K, A>>>(
    object: O,
  ) => boolean
  <K extends PropertyKey>(key: K): {
    <A, O extends Readonly<Record<K, A>>>(value: A, object: O): boolean
    <A>(value: A): <O extends Readonly<Record<K, A>>>(object: O) => boolean
  }
}
