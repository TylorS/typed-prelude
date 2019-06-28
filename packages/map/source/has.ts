import { curry } from '@typed/lambda'

export const has: {
  <A, B>(value: A, set: ReadonlyMap<A, B>): boolean
  <A>(value: A): <B>(set: ReadonlyMap<A, B>) => boolean
} = curry(__has)

function __has<A, B>(value: A, map: ReadonlyMap<A, B>): boolean {
  return map.has(value)
}
