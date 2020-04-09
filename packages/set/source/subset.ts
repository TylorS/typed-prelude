import { curry } from '@typed/lambda'

export const subset: {
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): boolean
  <A>(a: ReadonlySet<A>): (b: ReadonlySet<A>) => boolean
} = curry(__subset)

export const subsetOf: {
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): boolean
  <A>(a: ReadonlySet<A>): (b: ReadonlySet<A>) => boolean
} = curry(__subsetOf)

function __subset<A>(a: ReadonlySet<A>, b: ReadonlySet<A>): boolean {
  return Array.from(a).every((x) => b.has(x))
}

function __subsetOf<A>(b: ReadonlySet<A>, a: ReadonlySet<A>): boolean {
  return Array.from(a).every((x) => b.has(x))
}
