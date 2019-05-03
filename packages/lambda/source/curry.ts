import { Curry, Fn } from './types'

/**
 * Allow a fixed length function to be partially applied.
 * @param f Function you'd like to curry
 */
export const curry = <F extends Fn>(f: F): Curry<F> => {
  return curriedN(f.length, f, []) as Curry<F>
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
