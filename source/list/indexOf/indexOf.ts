import { indexOf as _indexOf } from '../../common/indexOf'
import { curry } from '../../lambda'
import { Maybe, Nothing } from '../../maybe'

export const indexOf = curry(
  <A>(value: A, list: ArrayLike<A>): Maybe<number> => {
    const index = _indexOf(list, value)

    return index > -1 ? Maybe.of(index) : Nothing
  },
) as {
  <A>(value: A, list: ArrayLike<A>): Maybe<number>
  <A>(value: A): (list: ArrayLike<A>) => Maybe<number>
}
