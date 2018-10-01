import { curry } from './curry'
import { Apply, Fn } from './types'

export const apply: {
  <Args extends any[], T extends Fn>(args: Args, fn: T): Apply<Args, T>
  <Args extends any[]>(args: Args): <T extends Fn<Args>>(fn: T) => Apply<Args, T>
} = curry(<Args extends any[], T extends Fn>(args: Args, fn: T): Apply<Args, T> => fn(...args))
