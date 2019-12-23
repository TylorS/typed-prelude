import { Disposable } from '@typed/disposable'
import { Pure } from './Env'
import { runPure } from './runPure'

/**
 * Collect a given number of events of a given pure.
 * @param pure :: Pure a
 * @param expectedValues :: number (default: 1)
 * @returns :: Promise [a]
 */
export function collectEvents<A>(pure: Pure<A>, expectedValues: number = 1): Promise<readonly A[]> {
  return new Promise((resolve, reject) => {
    const actualValues: A[] = []
    let disposable = Disposable.None

    try {
      disposable = runPure(actual => {
        actualValues.push(actual)

        if (!expectedValues || actualValues.length === expectedValues) {
          disposable.dispose()

          resolve(actualValues)
        }

        return Disposable.None
      }, pure)
    } catch (error) {
      reject(error)
    }
  })
}
