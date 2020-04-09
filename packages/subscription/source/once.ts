import { Disposable } from '@typed/disposable'

/**
 * Subscribe to a subscription just once.
 */
export const once = async <A>({
  subscribe,
}: {
  subscribe: (f: (value: A) => void) => Disposable
}): Promise<A> => {
  let disposable = Disposable.None
  const a = await new Promise<A>((resolve) => {
    disposable = subscribe(resolve)
  })

  disposable.dispose()

  return a
}
