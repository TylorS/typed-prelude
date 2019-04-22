import { apply } from './apply'
import { Flip, Fn } from './types'

/**
 * Reverse the first two arguments of a function
 * @param fn: (a -> b -> c)
 * @returns (b -> a -> c)
 */
export const flip = <T extends Fn>(fn: T): Flip<T> =>
  (((a: any, b: any, ...args: any[]) => apply([b, a, ...args], fn)) as any) as Flip<T>
