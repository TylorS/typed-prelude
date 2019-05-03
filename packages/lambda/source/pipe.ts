import { Arity1, IO } from './types'

/** Left-to-right composition for exactly two function */
export const pipe2 = <A, B, C>(f: Arity1<A, B>, g: Arity1<B, C>) => (x: A): C => g(f(x))

/**
 * Generic Left-to-right composition
 */
export const pipe: Pipe = ((...fns: Arity1[]) =>
  fns.length > 1 ? fns.slice(1).reduce(pipe2, fns[0]) : fns[0]) as Pipe

export interface Pipe {
  <A>(a: IO<A>): IO<A>
  <A, B>(a: IO<A>, b: Arity1<A, B>): IO<B>
  <A, B, C>(a: IO<A>, b: Arity1<A, B>, c: Arity1<B, C>): IO<C>
  <A, B, C, D>(a: IO<A>, b: Arity1<A, B>, c: Arity1<B, C>, d: Arity1<C, D>): IO<D>
  <A, B, C, D, E>(a: IO<A>, b: Arity1<A, B>, c: Arity1<B, C>, d: Arity1<C, D>, e: Arity1<D, E>): IO<
    E
  >
  <A, B, C, D, E, F>(
    a: IO<A>,
    b: Arity1<A, B>,
    c: Arity1<B, C>,
    d: Arity1<C, D>,
    e: Arity1<D, E>,
    f: Arity1<E, F>,
  ): IO<F>

  <A, B>(a: Arity1<A, B>): Arity1<A, B>
  <A, B, C>(a: Arity1<A, B>, b: Arity1<B, C>): Arity1<A, C>
  <A, B, C, D>(a: Arity1<A, B>, b: Arity1<B, C>, c: Arity1<C, D>): Arity1<A, D>
  <A, B, C, D, E>(a: Arity1<A, B>, b: Arity1<B, C>, c: Arity1<C, D>, d: Arity1<D, E>): Arity1<A, E>
  <A, B, C, D, E, F>(
    a: Arity1<A, B>,
    b: Arity1<B, C>,
    c: Arity1<C, D>,
    d: Arity1<D, E>,
    e: Arity1<E, F>,
  ): Arity1<A, F>
  <A, B, C, D, E, F, G>(
    a: Arity1<A, B>,
    b: Arity1<B, C>,
    c: Arity1<C, D>,
    d: Arity1<D, E>,
    e: Arity1<E, F>,
    f: Arity1<F, G>,
  ): Arity1<A, G>

  <A, B, C, D, E, F, G, H>(
    a: Arity1<A, B>,
    b: Arity1<B, C>,
    c: Arity1<C, D>,
    d: Arity1<D, E>,
    e: Arity1<E, F>,
    f: Arity1<F, G>,
    g: Arity1<G, H>,
  ): Arity1<A, H>
  <A, B, C, D, E, F, G, H, I>(
    a: Arity1<A, B>,
    b: Arity1<B, C>,
    c: Arity1<C, D>,
    d: Arity1<D, E>,
    e: Arity1<E, F>,
    f: Arity1<F, G>,
    g: Arity1<G, H>,
    h: Arity1<H, I>,
  ): Arity1<A, I>
  <A, B, C, D, E, F, G, H, I, J>(
    a: Arity1<A, B>,
    b: Arity1<B, C>,
    c: Arity1<C, D>,
    d: Arity1<D, E>,
    e: Arity1<E, F>,
    f: Arity1<F, G>,
    g: Arity1<G, H>,
    h: Arity1<H, I>,
    j: Arity1<H, J>,
  ): Arity1<A, J>
}
