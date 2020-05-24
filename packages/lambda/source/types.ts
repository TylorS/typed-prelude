export type Primitive = undefined | null | boolean | string | number | Function

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
export type Is<A> = (value: unknown) => value is A
export type IsNot<A> = <B extends unknown>(value: A | B) => value is B
export type Refinement<A, B extends A> = (a: A) => a is B
export type Predicate2<A, B> = Arity2<A, B, boolean>
export type ComparisonNumbers = -1 | 0 | 1
export type ComparableValues = keyof any | boolean | Date

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

export type Fn<Args extends readonly any[] = readonly any[], R = any> = (...args: Args) => R

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
  : ArgsOf<T> extends never[]
  ? IO<ReturnType<T>>
  : never

export type ArgsOf<T extends Fn> = T extends Fn<infer Args, any> ? Args : []
export type PartialArgsOf<T extends Fn> = T extends (...args: infer TArgs) => any
  ? Partial<TArgs>
  : never
export type TailArgsOf<F extends Function> = F extends (head: any, ...tail: infer TTail) => any
  ? TTail
  : never
export type HeadArg<F extends Function> = F extends (head: infer A, ...tail: any[]) => any
  ? A
  : never
export type InitArgsOf<F extends Fn> = Init<ArgsOf<F>>

export type Flip<T extends Fn> = ArgsOf<T> extends []
  ? Fn<[], ReturnType<T>>
  : ArgsOf<T> extends [infer A]
  ? Fn<[A], ReturnType<T>>
  : ArgsOf<T> extends [infer A, infer B]
  ? Fn<[B, A], ReturnType<T>>
  : ArgsOf<T> extends [infer A, infer B, infer C]
  ? Fn<[B, A, C], ReturnType<T>>
  : ArgsOf<T> extends [infer A, infer B, infer C, infer D]
  ? Fn<[B, A, C, D], ReturnType<T>>
  : ArgsOf<T> extends [infer A, infer B, infer C, infer D, infer E]
  ? Fn<[B, A, C, D, E], ReturnType<T>>
  : never

export type Apply<
  Args extends readonly any[] = readonly any[],
  T extends Fn<Args> = Fn<Args>
> = T extends (...args: Args) => infer R ? R : never

export type Uncurry<Fun extends Fn> = Fun extends (
  a: infer A,
) => (b: infer B) => (c: infer C) => (d: infer D) => (e: infer E) => infer F
  ? (a: A, b: B, c: C, d: D, e: E) => F
  : Fun extends (a: infer A) => (b: infer B) => (c: infer C) => (d: infer D) => infer E
  ? (a: A, b: B, c: C, d: D) => E
  : Fun extends (a: infer A) => (b: infer B) => (c: infer C) => infer D
  ? (a: A, b: B, c: C) => D
  : Fun extends (a: infer A) => (b: infer B) => infer C
  ? (a: A, b: B) => C
  : Fun

export type Init<A extends readonly any[], B extends readonly any[] = Tail<A>> = CastArray<
  { [K in keyof B]: A[keyof A & K] }
>
export type Tail<A extends readonly any[]> = TailArgsOf<Fn<A>>
export type Head<A extends readonly any[]> = HeadArg<Fn<A>>

export type Defined<T> = T extends undefined ? never : T

export type OrToAnd<A> = (RemoveUnknown<A> extends any ? (u: A) => void : never) extends (
  i: infer B,
) => void
  ? B
  : never

export type Include<A, B> = A extends B ? A : never

export type TypeGuard<A, B extends A> = (value: A) => value is B

// Internal
type CastArray<T> = T extends readonly any[] ? T : []
type RemoveUnknown<A> = [unknown] extends [A] ? never : A
