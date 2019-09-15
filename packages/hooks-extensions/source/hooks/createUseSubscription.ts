import { Pure } from '@typed/env'
import { CreateHookContext, createUseEffect, createUseMemo, withCreateHook } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { Subscription } from '@typed/subscription'

const publishValue = <A, B = A>(subscription: Subscription<A, B>) => (value: A) =>
  Pure.fromIO(() => (subscription.publish(value), value))

export const createUseSubscription = <A, B = A>(
  context: CreateHookContext,
  subscription: Subscription<A, B>,
  fn: Arity1<B>,
) => {
  const createUseSubscriptionHook = withCreateHook(
    createHook => [createHook(createUseEffect), createHook(createUseMemo)] as const,
    ([useEffect, useMemo], subscription: Subscription<A, B>, fn: Arity1<B>) => {
      const publish = useMemo(publishValue, [subscription])
      const disposable = useEffect(({ subscribe }) => subscribe(fn), {
        args: [subscription],
      })

      return [publish, disposable] as const
    },
  )

  return createUseSubscriptionHook(context, subscription, fn)
}
