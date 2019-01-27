import { indexOf as _indexOf } from '@typed/common/indexOf'
import { curry } from '@typed/lambda'
import { Maybe, Nothing } from '@typed/maybe'

export const indexOf = curry(
  <A>(value: A, list: ArrayLike<A>): Maybe<number> => {
    const index = _indexOf(list, value)

    return index > -1 ? Maybe.of(index) : Nothing
  },
) as {
  <A>(value: A, list: ArrayLike<A>): Maybe<number>
  <A>(value: A): (list: ArrayLike<A>) => Maybe<number>
}
