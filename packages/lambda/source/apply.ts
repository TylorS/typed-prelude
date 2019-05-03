import { curry } from './curry'
import { Apply, Fn } from './types'

/**
 * Call a function with a list of arguments
 * @param args List of arguments
 * @param fn Function to call
 */
export const apply = curry(
  <Args extends any[], T extends Fn>(args: Args, fn: T): Apply<Args, T> => fn(...args),
) as {
  <Args extends any[], T extends Fn>(args: Args, fn: T): Apply<Args, T>
  <Args extends any[]>(args: Args): <T extends Fn<Args>>(fn: T) => Apply<Args, T>
}
