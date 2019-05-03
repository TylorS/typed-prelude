export type Tuple<A = any, B = A> = readonly [A, B]
export type First<A extends Tuple> = A[0]
export type Second<A extends Tuple> = A[1]

export const first = <T extends Tuple>(tuple: T): First<T> => tuple[0]
export const second = <T extends Tuple>(tuple: T): Second<T> => tuple[1]
