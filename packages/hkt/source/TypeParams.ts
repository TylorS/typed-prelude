import { L } from 'ts-toolbelt'
import { HktValues, PossibleValues, Type, Types, TypeToName } from './Hkt'

export namespace TypeParams {
  export type First<A> = A extends L.List ? L.Last<A> : never
  export type Second<A> = A extends L.List ? L.Last<L.Pop<A>> : never
  export type Third<A> = A extends L.List ? L.Last<L.Pop<L.Pop<A>>> : never
  export type Fourth<A> = A extends L.List ? L.Last<L.Pop<L.Pop<L.Pop<A>>>> : never
  export type Fifth<A> = A extends L.List ? L.Last<L.Pop<L.Pop<L.Pop<L.Pop<A>>>>> : never

  /**
   * Retrieve the values of an Hkt as a Tuple.
   * @example
   * TypeParams.Of<Either<A, B>> === [A, B]
   */
  export type Of<A extends Type<Types, PossibleValues>> = CastArray<HktValues<A>[TypeToName<A>]>

  type CastArray<A> = A extends ReadonlyArray<any> ? A : []

  export type DropLast<A extends Type<Types, PossibleValues>, N extends 1 | 2 | 3 | 4 | 5> = {
    1: L.Pop<Of<A>>
    2: L.Pop<L.Pop<Of<A>>>
    3: L.Pop<L.Pop<L.Pop<Of<A>>>>
    4: L.Pop<L.Pop<L.Pop<L.Pop<Of<A>>>>>
    5: L.Pop<L.Pop<L.Pop<L.Pop<L.Pop<Of<A>>>>>>
  }[N extends 1 | 2 | 3 | 4 | 5 ? N : never]
}
