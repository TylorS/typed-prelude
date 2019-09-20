import { curry } from './curry'
import { Apply, Fn } from './types'

/**
 * Call a function with a list of arguments
 * @param args List of arguments
 * @param fn Function to call
 */
export const apply = curry(
  <Args extends readonly any[], T extends Fn<Args>>(args: Args, fn: T): Apply<Args, T> =>
    fn(...args),
) as {
  <Args extends readonly any[], T extends Fn<Args>>(args: Args, fn: T): Apply<Args, T>
  <Args extends readonly any[]>(args: Args): <T extends Fn<Args>>(fn: T) => Apply<Args, T>
}
