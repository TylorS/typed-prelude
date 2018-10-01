import { indexOf as _indexOf } from '../../common/indexOf'
import { curry } from '../../lambda'
import { Maybe, Nothing } from '../../maybe'

export const indexOf: {
  <A>(value: A, list: A[]): Maybe<number>
  <A>(value: A): (list: A[]) => Maybe<number>
} = curry(
  <A>(value: A, list: A[]): Maybe<number> => {
    const index = _indexOf(list, value)

    return index > -1 ? Maybe.of(index) : Nothing
  },
)
