import { Is } from '@typed/lambda'
import { fromJust } from './fromJust'
import { isJust } from './isJust'
import { Just } from './Just'
import { Maybe } from './Maybe'

export function maybeIs<A>(is: Is<A>): Is<Maybe<A>> {
  return (x): x is Maybe<A> => {
    if (x && typeof x === 'object' && isJust(x as Maybe<A>)) {
      return is(fromJust(x as Just<A>))
    }

    return false
  }
}
