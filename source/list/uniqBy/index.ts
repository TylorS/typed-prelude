import { curry } from '@typed/lambda'
import { includes } from '../includes'

export const uniqBy = curry(
  <A, B>(toComparisonValue: (value: A, index: number) => B, list: A[]): A[] => {
    const valuesSeen: B[] = []
    const result: A[] = []

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < list.length; ++i) {
      const value = list[i]
      const comparisonValue = toComparisonValue(value, i)
      const valueHasBeenSeen = includes(comparisonValue, valuesSeen)

      if (!valueHasBeenSeen) {
        valuesSeen.push(comparisonValue)
        result.push(value)
      }
    }

    return result
  },
) as {
  <A, B>(toComparisonValue: (value: A, index: number) => B, list: A[]): A[]
  <A, B>(toComparisonValue: (value: A, index: number) => B): (list: A[]) => A[]
}
