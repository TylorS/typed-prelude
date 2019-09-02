import { Fn } from '@typed/lambda'
import { equals } from '@typed/logic'
import { CreateHookContext, Hook } from '../types'
import { empty } from './common'

export const createUseMemo = <A extends readonly any[], B>(
  _: CreateHookContext,
  fn: Fn<A, B>,
  deps: A = empty as A,
) => new UseMemo(fn, deps)

export class UseMemo<A extends readonly any[], B> implements Hook<[Fn<A, B>, A], B> {
  private value: B

  constructor(private fn: Fn<A, B>, private deps: A) {
    this.value = fn(...deps)
  }

  public update = (fn: Fn<A, B>, deps: A = empty as A): B => {
    if (this.hasChanged(fn, deps)) {
      this.value = fn(...deps)
    }

    return this.value
  }

  public dispose = () => void 0

  private hasChanged = (fn: Fn<A, B>, deps: A) => {
    const changed = !equals(fn, this.fn) || !equals(deps, this.deps)

    if (changed) {
      this.fn = fn
      this.deps = deps
    }

    return changed
  }
}
