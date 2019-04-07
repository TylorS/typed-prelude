import { Disposable } from '@typed/disposable'
import { Subscription } from './Subscription'

export const once = async <A>({ subscribe }: Subscription<A>): Promise<A> => {
  let disposable = Disposable.None
  const a = await new Promise<A>(resolve => {
    disposable = subscribe(resolve)
  })

  disposable.dispose()

  return a
}
