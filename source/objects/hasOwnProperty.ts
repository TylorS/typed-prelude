import { curry } from '../lambda'

export const hasOwnProperty = curry(
  <A extends PropertyKey>(key: A, obj: Record<A, any>): boolean => obj && obj.hasOwnProperty(key),
) as {
  <A extends PropertyKey, B extends Partial<Record<A, any>>>(key: A, obj: B): boolean
  <A extends PropertyKey>(key: A): <B extends Partial<Record<A, any>>>(obj: B) => boolean
}
