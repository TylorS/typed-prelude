import { describe, given, it } from '@typed/test'
import { join } from 'path'
import { findTsConfig } from '../findTsConfig'
import { installNodeSupport } from './installNodeSupport'

export const test = describe(`installNodeSupport`, [
  given(`cwd and compilerOptions `, [
    it(`installs TypeScript support`, ({ equal, throws }) => {
      const directory = join(__dirname, 'test-fixtures')
      const file = join(directory, 'foobar.ts')

      throws(() => require(file))

      const cleanup = installNodeSupport(findTsConfig({ directory }))

      const { foobar } = require(file)

      equal('foobar', foobar())

      cleanup()
    }),
  ]),
])
