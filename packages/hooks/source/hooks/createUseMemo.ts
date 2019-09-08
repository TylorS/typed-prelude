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

  constructor(fn: Fn<A, B>, private deps: A) {
    this.value = fn(...deps)
  }

  public update = (fn: Fn<A, B>, deps: A = empty as A): B => {
    if (this.hasChanged(deps)) {
      this.value = fn(...deps)
    }

    return this.value
  }

  public dispose = () => void 0

  private hasChanged = (deps: A) => {
    const changed = !equals(deps, this.deps)

    if (changed) {
      this.deps = deps
    }

    return changed
  }
}
