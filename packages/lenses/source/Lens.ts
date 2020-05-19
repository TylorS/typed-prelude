import { Arity1, Arity2, curry, Curry2 } from '@typed/lambda'
import { set } from '@typed/objects'

export interface Lens<A, B> {
  readonly get: Arity1<A, B>
  readonly update: Curry2<Arity1<B, B>, A, A>
}

export namespace Lens {
  export const create = <A, B>(get: Arity1<A, B>, set: Arity2<B, A, A>): Lens<A, B> => ({
    get,
    update: curry((f, a) => set(f(get(a)), a)),
  })

  export const id = <A>(): Lens<A, A> =>
    create(
      (a) => a,
      (_, a) => a,
    )

  export const prop = <A, K extends keyof A>(key: K): Lens<A, A[K]> =>
    create(
      (a) => a[key],
      (b, a) => set(key, b, a),
    )
}

export type LensInput<A> = A extends Lens<infer R, any> ? R : never
export type LensOutput<A> = A extends Lens<any, infer R> ? R : never
