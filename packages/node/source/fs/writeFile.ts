import { Disposable } from '@typed/disposable'
import { PureEffect } from '@typed/effects'
import { Either } from '@typed/either'
import { Future } from '@typed/future'
import * as fs from 'fs'

export function* writeFile(
  filePath: string,
  contents: string | Buffer,
): PureEffect<Either<Error, void>> {
  return yield Future.create<unknown, Error, void>((reject, resolve) => {
    const disposable = Disposable.lazy()

    fs.writeFile(filePath, contents, (err) => {
      if (disposable.disposed) {
        return
      }

      if (err) {
        return disposable.addDisposable(reject(err))
      }

      disposable.addDisposable(resolve())
    })

    return disposable
  })
}
