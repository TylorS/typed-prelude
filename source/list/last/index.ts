import { Maybe, Nothing } from '../../maybe'

export const last = <A>(list: A[]): Maybe<A> =>
  list.length === 0 ? Nothing : Maybe.of(list[list.length - 1])
