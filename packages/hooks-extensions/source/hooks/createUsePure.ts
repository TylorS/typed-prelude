import { Disposable } from '@typed/disposable'
import { Pure, runPure } from '@typed/env'
import { CreateHookContext, createUseEffect, UseEffectOptions, withCreateHook } from '@typed/hooks'
import { Arity1, Fn } from '@typed/lambda'

export function createUsePure<A>(
  context: CreateHookContext,
  pure: Pure<A>,
  fn: Arity1<A, void>,
  options: UseEffectOptions<readonly any[]> = {},
) {
  const createUsePureHook = withCreateHook(
    createHook => [createHook(createUseEffect)] as const,
    ([useEffect], pure: Pure<A>, fn: Arity1<A>, options: UseEffectOptions<readonly any[]>) => {
      const args = [fn, pure] as const

      return useEffect(runPure as Fn<typeof args, Disposable>, {
        ...options,
        args,
      })
    },
  )

  return createUsePureHook(context, pure, fn, options)
}
