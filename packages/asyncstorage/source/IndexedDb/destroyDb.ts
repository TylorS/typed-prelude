import { withIsDisposed } from '@typed/disposable'
import { op, resumeLater } from '@typed/effects'
import { Either, Left, Right } from '@typed/either'
import { ItemEffect } from '../AsyncStorage'

export const destroyDb = (name: string, indexedDbFactory: typeof indexedDB): ItemEffect<boolean> =>
  op(_ =>
    resumeLater<Either<Error, boolean>>(cb => {
      const request = indexedDbFactory.deleteDatabase(name)
      const { dispose } = withIsDisposed(isDisposed => {
        request.onerror = () =>
          !isDisposed() &&
          cb(Left.of(new Error(request.error?.message ?? `Failed to destroy db ${name}`)))
        request.onsuccess = () => !isDisposed() && cb(Right.of(true))
      })

      return dispose
    }),
  )
