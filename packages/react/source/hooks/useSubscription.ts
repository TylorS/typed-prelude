import { Subscription } from '@typed/subscription'
import { useState } from 'react'
import { useDisposable } from './useDisposable'

export function useSubscription<A>(
  subscription: Subscription<A>,
  initialValue: () => A,
): UseSubscription<A> {
  const [state, setState] = useState(initialValue)

  useDisposable(() => {
    const disposable = subscription.subscribe(setState)

    return disposable
  }, [subscription])

  return [state, (value: A) => subscription.publish(value)]
}

export type UseSubscription<A> = [A, (value: A) => void]
