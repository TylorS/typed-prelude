import { toString } from '@typed/common'
import { ArgsOf } from './types'

/**
 * Memoize a function
 * @param f Function to memoize
 */
export const memoize = <F extends (...args: any[]) => any>(f: F): F => {
  const cache = new Map<any, any>()

  return ((...args: ArgsOf<F>): ReturnType<F> => {
    const key = args.reduce((x, y) => x + toString(y), '')

    if (cache.has(key)) {
      return cache.get(key)
    }

    let result = f(...args)

    if (typeof result === 'function') {
      result = memoize(result)
    }

    cache.set(key, result)

    return result
  }) as F
}
