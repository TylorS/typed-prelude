import { Maybe, Nothing } from '@typed/maybe'

export const last = <A>(list: ArrayLike<A>): Maybe<A> =>
  list.length === 0 ? Nothing : Maybe.of(list[list.length - 1])
