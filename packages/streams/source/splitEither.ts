import { filter, map, multicast } from '@most/core'
import { Stream } from '@most/types'
import { Either, fromLeft, fromRight, isLeft, isRight } from '@typed/either'

export function splitEither<A, B>(stream: Stream<Either<A, B>>): readonly [Stream<A>, Stream<B>] {
  const s = multicast(stream)
  const a = map(fromLeft, filter(isLeft, s))
  const b = map(fromRight, filter(isRight, s))

  return [a, b]
}
