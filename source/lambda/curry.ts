import { BUILD_ENV } from '@typed/common/executionEnvironment'
import { Curry, Fn } from './types'

export const curry = <F extends Fn>(f: F): Curry<F> => {
  if (BUILD_ENV !== 'development') {
    return curriedN(f.length, f, []) as Curry<F>
  }

  try {
    return curriedN(f.length, f, []) as Curry<F>
  } catch (error) {
    Error.captureStackTrace(error, f)

    throw error
  }
}

function curriedN<Args extends any[], R>(arity: number, f: Fn<Args, R>, previousArgs: any[]): any {
  if (arity < 2) {
    return f
  }

  return (...args: any[]) => {
    const concatArgs = previousArgs.concat(args) as Args

    return concatArgs.length >= arity ? f(...concatArgs) : curriedN(arity, f, concatArgs)
  }
}
