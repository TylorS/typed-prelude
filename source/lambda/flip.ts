import { apply } from './apply'
import { Flip, Fn } from './types'

export const flip = <T extends Fn>(fn: T): Flip<T> =>
  (((a: any, b: any, ...args: any[]) => apply([b, a, ...args], fn)) as any) as Flip<T>
