import { Disposable } from '@typed/disposable'
import { Effect } from '@typed/effects'
import { Future } from '@typed/future'
import * as fs from 'fs'

export function* writeFile(filePath: string, contents: string | Buffer) {
  return yield* Effect.fromEnv(
    Future.create<never, Error, void>((reject, resolve) => {
      const disposable = Disposable.lazy()

      fs.writeFile(filePath, contents, err => {
        if (err) {
          return disposable.addDisposable(reject(err))
        }

        disposable.addDisposable(resolve())
      })

      return disposable
    }),
  )
}
