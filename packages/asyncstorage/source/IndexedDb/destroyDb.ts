import { withIsDisposed } from '@typed/disposable'
import { Effect, Effects } from '@typed/effects'
import { Env } from '@typed/env'

export function destroyDb(
  name: string,
  indexedDbFactory: typeof indexedDB,
): Effects<never, boolean> {
  return Effect.fromEnv(
    Env.create<never, boolean>(cb => {
      const request = indexedDbFactory.deleteDatabase(name)

      return withIsDisposed(isDisposed => {
        request.onerror = () => !isDisposed() && cb(false)
        request.onsuccess = () => !isDisposed() && cb(true)
      })
    }),
  )
}
