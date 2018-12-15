import { Maybe, Nothing } from '../maybe'

export type Tuple<A = any, B = A> = [A, B]
export type First<A extends Tuple> = A[0]
export type Second<A extends Tuple> = A[1]

export const first = <T extends Tuple>(tuple: T): First<T> => tuple[0]
export const second = <T extends Tuple>(tuple: T): Second<T> => tuple[1]

export namespace Tuple {
  export const fromList = <A, B>(array: [A, B, ...Array<unknown>]): Maybe<Tuple<A, B>> =>
    array.length >= 2 ? Maybe.of([array[0], array[1]] as Tuple<A, B>) : Nothing
}
