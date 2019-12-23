import { withIsDisposed } from '@typed/disposable'
import { Env, Pure } from '@typed/env'

export function destroyDb(name: string, indexedDbFactory: typeof indexedDB): Pure<boolean> {
  return Env.create(cb => {
    const request = indexedDbFactory.deleteDatabase(name)

    return withIsDisposed(isDisposed => {
      request.onerror = () => !isDisposed() && cb(false)
      request.onsuccess = () => !isDisposed() && cb(true)
    })
  })
}
