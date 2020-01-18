import { Match, oneOf } from '@typed/logic'
import { Maybe } from '@typed/maybe'
import { HookEnvironment } from './HookEnvironment'
import { useMemo } from './useMemo'
import { WithHookEnvs } from './withHooks'

export function* useMatches<A, B>(
  value: A,
  matches: ReadonlyArray<Match<A, B>>,
): Generator<WithHookEnvs<never>, Maybe<B>, HookEnvironment> {
  const match = yield* useMemo(oneOf, [matches])
  const maybe: Maybe<B> = yield* useMemo((x, f) => f(x), [value, match] as const)

  return maybe
}
