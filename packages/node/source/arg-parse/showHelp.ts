import { Effects } from '@typed/effects'
import { info } from '@typed/logger'
import { bold, underline } from '../colors'
import { ArgParser, ArgsEnv } from './types'

export function* showHelp<A extends ReadonlyArray<ArgParser<any, any>>>(
  applicationName: string,
  parsers: A,
): Effects<ArgsEnv, void> {
  yield* info(`\n${underline(bold(applicationName))}\n`)

  for (const { help } of parsers) {
    const message = yield* help()

    if (message) {
      yield* info(message)
    }
  }
}
