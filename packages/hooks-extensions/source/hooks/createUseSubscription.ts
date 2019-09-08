import { Pure } from '@typed/env'
import { CreateHookContext, createUseEffect, createUseMemo, withCreateHook } from '@typed/hooks'
import { Arity1 } from '@typed/lambda'
import { Subscription } from '@typed/subscription'

const publishValue = <A>(subscription: Subscription<A>) => (value: A) =>
  Pure.fromIO(() => (subscription.publish(value), value))

export const createUseSubscription = <A>(
  context: CreateHookContext,
  subscription: Subscription<A>,
  fn: Arity1<A>,
) => {
  const createUseSubscriptionHook = withCreateHook(
    createHook => [createHook(createUseEffect), createHook(createUseMemo)] as const,
    ([useEffect, useMemo], subscription: Subscription<A>, fn: Arity1<A>) => {
      const publish = useMemo(publishValue, [subscription])
      const disposable = useEffect(sub => sub.subscribe(fn), {
        args: [subscription],
      })

      return [publish, disposable] as const
    },
  )

  return createUseSubscriptionHook(context, subscription, fn)
}
