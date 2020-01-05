import { filter, map } from '@most/core'
import { Stream } from '@most/types'
import { fromJust, isJust, Maybe } from '@typed/maybe'

export function filterMaybes<A>(stream: Stream<Maybe<A>>): Stream<A> {
  return map(fromJust, filter(isJust, stream))
}
