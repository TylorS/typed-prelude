import { equals } from '../../logic/equals'
import { Maybe } from '../../maybe'
import { findLastIndex } from '../findLastIndex'

export function lastIndexOf<A>(value: A, list: A[]): Maybe<number> {
  return findLastIndex(equals(value), list)
}
