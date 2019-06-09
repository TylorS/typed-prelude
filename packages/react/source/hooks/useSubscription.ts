import { Disposable, disposeAll } from '@typed/disposable'
import { execPure } from '@typed/env'
import { Maybe, Nothing } from '@typed/maybe'
import { Subscription } from '@typed/subscription'
import { useDisposable } from './useDisposable'
import { useMaybe } from './useMaybe'

export function useSubscription<A>(
  subscription: Subscription<A>,
  initialValue?: () => A,
  clearOnUnsubscribe: boolean = false,
): UseSubscription<A> {
  const [state, setState, clear] = useMaybe<A>(initialValue ? Maybe.of(initialValue()) : Nothing)

  useDisposable(() => {
    const disposable = subscription.subscribe(setState)

    if (clearOnUnsubscribe) {
      return disposeAll([disposable, Disposable.lazy(() => execPure(clear))])
    }

    return disposable
  }, [subscription])

  return [state, (value: A) => subscription.publish(value)]
}

export type UseSubscription<A> = [Maybe<A>, (value: A) => void]
