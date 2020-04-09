import { chain } from './chain'
import { Future } from './Future'
import { map } from './map'

export function sequence<E, A, B>(
  futures: ReadonlyArray<Future<E, A, B>>,
): Future<E, A, readonly B[]> {
  return futures.reduce(
    (acc, f) => chain((bs) => map((b) => bs.concat(b), f), acc) as Future<E, A, readonly B[]>,
    Future.of([]) as Future<E, A, readonly B[]>,
  )
}
