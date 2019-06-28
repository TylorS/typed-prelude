import { curry } from '@typed/lambda'

export const has: {
  <A>(value: A, set: ReadonlySet<A>): boolean
  <A>(value: A): (set: ReadonlySet<A>) => boolean
} = curry(__has)

function __has<A>(value: A, set: ReadonlySet<A>): boolean {
  return set.has(value)
}
