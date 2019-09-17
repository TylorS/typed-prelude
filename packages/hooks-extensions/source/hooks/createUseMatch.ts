import { CreateHookContext, createUseMemo, withCreateHook } from '@typed/hooks'
import { ArgsOf, Arity1 } from '@typed/lambda'
import { Match } from '@typed/logic'
import { map, Maybe } from '@typed/maybe'

export const createUseMatch = <A, B, C>(
  context: CreateHookContext,
  value: A,
  match: Match<A, B>,
  withMatch: Arity1<B, C>,
) => {
  const createUseMatchHook = withCreateHook(
    createHook => [createHook(createUseMemo)] as const,
    ([useMemo], value: A, match: Match<A, B>, withMatch: Arity1<B, C>) =>
      useMemo(findMatch, [value, match, withMatch] as ArgsOf<typeof findMatch>),
  )

  return createUseMatchHook(context, value, match, withMatch)
}

function findMatch<A, B, C>(value: A, match: Match<A, B>, withMatch: Arity1<B, C>): Maybe<C> {
  return map(withMatch, match(value))
}
