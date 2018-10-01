import { toString } from '../common/toString'
import { ArgsOf, Fn } from './types'

export const memoize = <F extends Fn>(f: F) => {
  const cache = new Map<any, any>()

  return (...args: ArgsOf<F>): ReturnType<F> => {
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
  }
}
