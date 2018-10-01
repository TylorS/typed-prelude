export type IO<A = void> = () => A
export type Arity1<A = any, B = any> = (value: A) => B
export type Arity2<A = any, B = any, C = any> = (a: A, b: B) => C
export type Arity3<A = any, B = any, C = any, D = any> = (a: A, b: B, c: C) => D
export type Arity4<A = any, B = any, C = any, D = any, E = any> = (a: A, b: B, c: C, d: D) => E
export type Arity5<A = any, B = any, C = any, D = any, E = any, F = any> = (
  a: A,
  b: B,
  c: C,
  d: D,
  e: E,
) => F

export type Predicate<A> = Arity1<A, boolean>
export type Predicate2<A, B> = Arity2<A, B, boolean>
export type ComparisonNumbers = -1 | 0 | 1
export type ComparableValues = PropertyKey | boolean

export interface Curry2<A, B, C> extends Arity2<A, B, C>, Arity1<A, Arity1<B, C>> {}
export interface Curry3<A, B, C, D>
  extends Arity3<A, B, C, D>,
    Arity2<A, B, Arity1<C, D>>,
    Arity1<A, Curry2<B, C, D>> {}
export interface Curry4<A, B, C, D, E>
  extends Arity4<A, B, C, D, E>,
    Arity3<A, B, C, Arity1<D, E>>,
    Arity2<A, B, Curry2<C, D, E>>,
    Arity1<A, Curry3<B, C, D, E>> {}
export interface Curry5<A, B, C, D, E, F>
  extends Arity5<A, B, C, D, E, F>,
    Arity4<A, B, C, D, Arity1<E, F>>,
    Arity3<A, B, C, Curry2<D, E, F>>,
    Arity2<A, B, Curry3<C, D, E, F>>,
    Arity1<A, Curry4<B, C, D, E, F>> {}

export type Fn<Args extends any[] = any[], R = any> = (...args: Args) => R

// tslint:disable:no-shadowed-variable
export type Curry<T extends Fn> = ArgsOf<T> extends [infer A]
  ? Arity1<A, ReturnType<T>>
  : ArgsOf<T> extends [infer A, infer B]
    ? Curry2<A, B, ReturnType<T>>
    : ArgsOf<T> extends [infer A, infer B, infer C]
      ? Curry3<A, B, C, ReturnType<T>>
      : ArgsOf<T> extends [infer A, infer B, infer C, infer D]
        ? Curry4<A, B, C, D, ReturnType<T>>
        : ArgsOf<T> extends [infer A, infer B, infer C, infer D, infer E]
          ? Curry5<A, B, C, D, E, ReturnType<T>>
          : ArgsOf<T> extends never[] ? IO<ReturnType<T>> : never

export type ArgsOf<T extends Fn> = T extends IO
  ? []
  : T extends Arity1<infer A>
    ? [A]
    : T extends Arity2<infer A, infer B>
      ? [A, B]
      : T extends Arity3<infer A, infer B, infer C>
        ? [A, B, C]
        : T extends Arity4<infer A, infer B, infer C, infer D>
          ? [A, B, C, D]
          : T extends Arity5<infer A, infer B, infer C, infer D, infer E> ? [A, B, C, D, E] : any[]

export type ArgsToFn<Args extends any[], R> = Args extends [infer A]
  ? Arity1<A, R>
  : Args extends [infer A, infer B]
    ? Arity2<A, B, R>
    : Args extends [infer A, infer B, infer C]
      ? Arity3<A, B, C, R>
      : Args extends [infer A, infer B, infer C, infer D]
        ? Arity4<A, B, C, D, R>
        : Args extends [infer A, infer B, infer C, infer D, infer E]
          ? Arity5<A, B, C, D, E, R>
          : never

export type Flip<T extends Fn> = ArgsOf<T> extends never[]
  ? ArgsToFn<never[], ReturnType<T>>
  : ArgsOf<T> extends [infer A]
    ? ArgsToFn<[A], ReturnType<T>>
    : ArgsOf<T> extends [infer A, infer B]
      ? ArgsToFn<[B, A], ReturnType<T>>
      : ArgsOf<T> extends [infer A, infer B, infer C]
        ? ArgsToFn<[B, A, C], ReturnType<T>>
        : ArgsOf<T> extends [infer A, infer B, infer C, infer D]
          ? ArgsToFn<[B, A, C, D], ReturnType<T>>
          : ArgsOf<T> extends [infer A, infer B, infer C, infer D, infer E]
            ? ArgsToFn<[B, A, C, D, E], ReturnType<T>>
            : never

export type ToUnion<Args extends any[]> = Args extends never[]
  ? never
  : Args extends [infer A]
    ? A
    : Args extends [infer A, infer B]
      ? A | B
      : Args extends [infer A, infer B, infer C]
        ? A | B | C
        : Args extends [infer A, infer B, infer C, infer D]
          ? A | B | C | D
          : Args extends [infer A, infer B, infer C, infer D, infer E] ? A | B | C | D | E : never

export type Apply<Args extends any[] = any[], T extends Fn<Args> = Fn<Args>> = T extends (
  ...args: Args
) => infer R
  ? R
  : never

export type Uncurry<Fun extends Fn> = Fun extends (
  a: infer A,
) => (b: infer B) => (c: infer C) => (d: infer D) => (e: infer E) => infer F
  ? (a: A, b: B, c: C, d: D, e: E) => F
  : Fun extends (a: infer A) => (b: infer B) => (c: infer C) => (d: infer D) => infer E
    ? (a: A, b: B, c: C, d: D) => E
    : Fun extends (a: infer A) => (b: infer B) => (c: infer C) => infer D
      ? (a: A, b: B, c: C) => D
      : Fun extends (a: infer A) => (b: infer B) => infer C ? (a: A, b: B) => C : Fun
