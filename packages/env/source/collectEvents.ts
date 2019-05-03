import { Pure, runPure } from './Env'

/**
 * Collect a given number of events of a given pure.
 * @param pure :: Pure a
 * @param expectedValues :: number (default: 1)
 * @returns :: Promise [a]
 */
export function collectEvents<A>(pure: Pure<A>, expectedValues: number = 1): Promise<A[]> {
  return new Promise((resolve, reject) => {
    const actualValues: A[] = []

    try {
      const disposable = runPure(actual => {
        actualValues.push(actual)

        // Without options assume one event
        if (!expectedValues) {
          if (disposable) {
            disposable.dispose()
          }

          return resolve(actualValues)
        }

        if (actualValues.length === expectedValues) {
          resolve(actualValues)
        }
      }, pure)
    } catch (error) {
      reject(error)
    }
  })
}
