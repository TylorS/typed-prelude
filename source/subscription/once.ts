import { Disposable } from '@typed/disposable'
import { Subscription } from './Subscription'

/**
 * Subscribe to a subscription just once.
 */
export const once = async <A, B>({
  subscribe,
}: {
  subscribe: Subscription<A, B>['subscribe']
}): Promise<B> => {
  let disposable = Disposable.None
  const a = await new Promise<B>(resolve => {
    disposable = subscribe(resolve)
  })

  disposable.dispose()

  return a
}
