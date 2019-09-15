import { Arity1 } from '@typed/lambda'
import { HooksManager } from './manager'
import { CreateHook, CreateHookContext, Hook } from './types'

/**
 * Allows creating hooks that use other hooks without knowing what
 * hooks manager is going to be used.
 *
 * `init` function is used and requires you to call createHook yourself.
 * It's recommended to use TypeScript 3.6+ and to return an array with `as const`
 * to use it's inference which is much better than the types we can currently write
 * if we did this for you including generic functions.
 */
export function withCreateHook<A, B extends readonly any[], C>(
  init: Arity1<HooksManager['createHook'], A>,
  fn: (hooks: A, ...args: B) => C,
): CreateHook<B, C> {
  class WithCreateHook {
    private hooks: A
    private hooksCache = new Map<number, Hook>()
    private id = 0

    constructor(private context: CreateHookContext) {
      this.hooks = init(this.createHook.bind(this))
    }

    public update = (...args: B): C => {
      const value = fn(this.hooks, ...args)

      this.id = 0

      return value
    }

    public dispose = () => {
      this.hooks = init(this.createHook)
      this.id = 0
      this.hooksCache.forEach(hook => hook.dispose())
      this.hooksCache.clear()
    }

    private nextId() {
      return this.id++
    }

    private createHook<A extends readonly any[], B>(create: CreateHook<A, B>) {
      return (...args: A): B => {
        const id = this.nextId()
        let hook = this.hooksCache.get(id)

        if (!hook) {
          hook = create(this.context, ...args)

          this.hooksCache.set(id, hook)
        }

        return hook.update(...args)
      }
    }
  }

  return (context, ..._) => new WithCreateHook(context)
}
