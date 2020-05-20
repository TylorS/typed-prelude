import { Lens } from './Lens'

export function pipe2<A, B, C>(ab: Lens<A, B>, bc: Lens<B, C>): Lens<A, C> {
  return Lens.create(
    (a) => bc.get(ab.get(a)),
    (c, a) => ab.update((b) => bc.update(() => c, b), a),
  )
}
