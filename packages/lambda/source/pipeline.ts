import { Arity1 } from './types'

export function pipeline<A, B>(value: A, ab: Arity1<A, B>): B
export function pipeline<A, B, C>(value: A, ab: Arity1<A, B>, bc: Arity1<B, C>): C
export function pipeline<A, B, C, D>(
  value: A,
  ab: Arity1<A, B>,
  bc: Arity1<B, C>,
  cd: Arity1<C, D>,
): D
export function pipeline<A, B, C, D, E>(
  value: A,
  ab: Arity1<A, B>,
  bc: Arity1<B, C>,
  cd: Arity1<C, D>,
  de: Arity1<D, E>,
): E
export function pipeline<A, B, C, D, E, F>(
  value: A,
  ab: Arity1<A, B>,
  bc: Arity1<B, C>,
  cd: Arity1<C, D>,
  de: Arity1<D, E>,
  ef: Arity1<E, F>,
): F
export function pipeline<A, B, C, D, E, F, G>(
  value: A,
  ab: Arity1<A, B>,
  bc: Arity1<B, C>,
  cd: Arity1<C, D>,
  de: Arity1<D, E>,
  ef: Arity1<E, F>,
  fg: Arity1<F, G>,
): G
export function pipeline<A, B, C, D, E, F, G, H>(
  value: A,
  ab: Arity1<A, B>,
  bc: Arity1<B, C>,
  cd: Arity1<C, D>,
  de: Arity1<D, E>,
  ef: Arity1<E, F>,
  fg: Arity1<F, G>,
  gh: Arity1<G, H>,
): H
export function pipeline<A, B, C, D, E, F, G, H, I>(
  value: A,
  ab: Arity1<A, B>,
  bc: Arity1<B, C>,
  cd: Arity1<C, D>,
  de: Arity1<D, E>,
  ef: Arity1<E, F>,
  fg: Arity1<F, G>,
  gh: Arity1<G, H>,
  hi: Arity1<H, I>,
): I
export function pipeline<A, B, C, D, E, F, G, H, I, J>(
  value: A,
  ab: Arity1<A, B>,
  bc: Arity1<B, C>,
  cd: Arity1<C, D>,
  de: Arity1<D, E>,
  ef: Arity1<E, F>,
  fg: Arity1<F, G>,
  gh: Arity1<G, H>,
  hi: Arity1<H, I>,
  ij: Arity1<I, J>,
): J
export function pipeline<A, B, C, D, E, F, G, H, I, J, K>(
  value: A,
  ab: Arity1<A, B>,
  bc: Arity1<B, C>,
  cd: Arity1<C, D>,
  de: Arity1<D, E>,
  ef: Arity1<E, F>,
  fg: Arity1<F, G>,
  gh: Arity1<G, H>,
  hi: Arity1<H, I>,
  ij: Arity1<I, J>,
  jk: Arity1<J, K>,
): K
export function pipeline<A, B>(...valueAndFunctions: [A, ...Arity1[]]): B
export function pipeline<A, B>(...valueAndFunctions: [A, ...Arity1[]]): B {
  const [value, ...fns] = valueAndFunctions

  return fns.reduce((x, f) => f(x), value as any)
}
