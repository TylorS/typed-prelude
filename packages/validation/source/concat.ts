import { fromLeft, isLeft, Left } from '@typed/either'
import { chain } from '@typed/list'
import { Validation } from './Validation'

export function concat<A, B>(...validations: ReadonlyArray<Validation<A, B>>): Validation<A, B> {
  if (validations.length === 0) {
    return Left.of([])
  }

  const lefts = validations.filter(isLeft)

  if (lefts.length === 0) {
    return validations[0]
  }

  return Left.of(chain(fromLeft, lefts))
}
