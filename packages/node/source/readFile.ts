import { Future } from '@typed/effects'
import { ArgsOf } from '@typed/lambda'
import { createReadStream } from 'fs'

export function readFile(
  ...args: ArgsOf<typeof import('fs').createReadStream>
): Future<unknown, Error, Buffer> {
  return Future.create<unknown, Error, Buffer>((reject, resolve) => {
    const buffers: Buffer[] = []
    const stream = createReadStream(...args)

    stream.on('data', (data: any) => buffers.push(data))
    stream.on('error', reject)
    stream.on('close', () => resolve(Buffer.concat(buffers)))

    return {
      dispose() {
        stream.close()
      },
    }
  })
}
