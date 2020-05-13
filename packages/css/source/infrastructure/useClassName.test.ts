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
      const { rules, styleSheet } = createCssEnv()
      const expectedClassName = 't687996 t69fee0 teeb7f9' as ClassName
      const expectedCss = '.t687996:hover{color:blue}.t69fee0{display:flex}.teeb7f9{flex-direction:column}' as Css

      function* sut() {
        try {
          const className = yield* useClassName(props)

          equal(expectedClassName, className)
          equal(expectedCss, getCss(rules))
          equal(styleSheet.textContent, getCss(rules))

          const className2 = yield* useClassName(props)

          equal(expectedClassName, className2)
          equal(expectedCss, getCss(rules))
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

    it(`manages arbitrarily deep nested selectors`, ({ equal }, done) => {
      const props: NestedCssProperties = {
        $nest: {
          ':hover': {
            color: 'blue',

            $nest: {
              '@media(min-width: 30em)': {
                $nest: {
                  '> *': {
                    display: 'flex',
                  },
                },
              },
            },
          },
        },
      }
      const { rules, styleSheet } = createCssEnv()
      const expectedClassName = 't687996 t7bd650' as ClassName
      const expectedCss = '.t687996:hover{color:blue}@media(min-width: 30em){.t7bd650:hover > *{display:flex}}' as Css

      function* sut() {
        try {
          const className = yield* useClassName(props)

          equal(expectedClassName, className)
          equal(expectedCss, getCss(rules))

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
