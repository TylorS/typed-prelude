import { Maybe, Nothing } from '@typed/maybe'
import { mean } from './mean'

/** Get the median of a list of numbers */
export function median(numbers: ReadonlyArray<number>): Maybe<number> {
  const length = numbers.length

  if (length === 0) {
    return Nothing
  }

  const width = 2 - (length % 2)
  const index = (length - width) / 2

  const medianNumbers = numbers
    .slice()
    .sort()
    .slice(index, index + width)

  return numberToMaybe(mean(medianNumbers))
}

export function numberToMaybe(num: number): Maybe<number> {
  return Number.isNaN(num) ? Nothing : Maybe.of(num)
}
