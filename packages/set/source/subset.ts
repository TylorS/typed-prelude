import { curry, flip } from '@typed/lambda'

export const subset: {
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): boolean
  <A>(a: ReadonlySet<A>): (b: ReadonlySet<A>) => boolean
} = curry(__subset)

export const subsetOf: {
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): boolean
  <A>(a: ReadonlySet<A>): (b: ReadonlySet<A>) => boolean
} = curry(flip(__subset))

function __subset<A>(a: ReadonlySet<A>, b: ReadonlySet<A>): boolean {
  return Array.from(a).every(x => b.has(x))
}
