import { createServerCrypto, CryptoFailure } from '@typed/crypto'
import { Fail, runEffects } from '@typed/effects'
import { createTestHookEnvironment } from '@typed/hooks'
import { describe, given, it } from '@typed/test'
import { createConsoleLogger, LogLevel } from '../../../logger/source'
import { NodeGenerator } from '../../../uuid/source'
import { ClassName, Css, NestedCssProperties } from '../model'
import { createCssEnv } from './createCssEnv'
import { getCss } from './getCss'
import { useClassName } from './useClassName'

export const test = describe(`useClassName`, [
  given(`a set of properties`, [
    it(`returns a ClassName`, ({ equal }, done) => {
      const props: NestedCssProperties = {
        display: 'flex',
        flexDirection: 'column',

        $nest: {
          ':hover': {
            color: 'blue',
          },
        },
      }
      const { rules, styleSheet } = createCssEnv({ styleSheet: { textContent: '' } })

      function* sut() {
        try {
          const className = yield* useClassName(props)

          equal('t68799671461f t69fee043f1d2 teeb7f9e164f3' as ClassName, className)

          equal(
            '.t68799671461f:hover{color:blue}.t69fee043f1d2{display:flex}.teeb7f9e164f3{flex-direction:column}' as Css,
            getCss(rules),
          )

          equal(styleSheet.textContent, getCss(rules))

          done()
        } catch (error) {
          done(error)
        }
      }
      const env = createTestHookEnvironment(new NodeGenerator())

      runEffects(sut(), {
        ...env,
        crypto: createServerCrypto(),
        logger: createConsoleLogger({ logLevel: LogLevel.DEFAULT, clock: env.timer }),
        [CryptoFailure]: Fail,
        rules,
        styleSheet,
      })
    }),
  ]),
])
