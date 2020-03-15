import { Disposable } from '@typed/disposable'
import { Future } from '@typed/effects'
import * as fs from 'fs'

export function writeFile(filePath: string, contents: string | Buffer): Future<never, Error, void> {
  return Future.create<never, Error, void>((reject, resolve) => {
    fs.writeFile(filePath, contents, err => {
      if (err) {
        return reject(err)
      }

      resolve()
    })

    return Disposable.None
  })
}
