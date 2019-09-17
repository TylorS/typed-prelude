import { CreateHookContext, createUseMemo, withCreateHook } from '@typed/hooks'
import { cond, Conditional } from '@typed/logic'
import { Maybe } from '@typed/maybe'

export const createUseConditional = <A, B>(
  context: CreateHookContext,
  conditionals: ReadonlyArray<Conditional<A, B>>,
  value: A,
) => {
  const createUseConditionalHook = withCreateHook(
    createHook => [createHook(createUseMemo)] as const,
    ([useMemo], conditionals: ReadonlyArray<Conditional<A, B>>, value: A): Maybe<B> =>
      useMemo((conditions, value) => cond(conditions, value), [conditionals, value] as const),
  )

  return createUseConditionalHook(context, conditionals, value)
}
