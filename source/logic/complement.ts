import { Arity1, pipe } from '../lambda'
import { not } from './not'

export const complement = <A, B>(fn: Arity1<A, B>) =>
  pipe(
    fn,
    not,
  )
