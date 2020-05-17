import { get } from '@typed/effects'
import { describe, given } from '@typed/test'
import { ClassName, Css, NestedCssProperties } from '../model'
import { getCss } from './getCss'
import { it } from './test-helpers'
import { useClassName } from './useClassName'

export const test = describe(`useClassName`, [
  given(`a set of properties`, [
    it(`returns a ClassName`, function* ({ equal }) {
      const { rules, styleSheet } = yield* get()

      const props: NestedCssProperties = {
        display: 'flex',
        flexDirection: 'column',

        $nest: {
          ':hover': {
            color: 'blue',
          },
        },
      }
      const expectedClassName = 't687996 t69fee0 teeb7f9' as ClassName
      const expectedCss = '.t687996:hover{color:blue}.t69fee0{display:flex}.teeb7f9{flex-direction:column}' as Css

      const className = yield* useClassName(props)

      equal(expectedClassName, className)
      equal(expectedCss, getCss(rules))
      equal(styleSheet.textContent, getCss(rules))

      const className2 = yield* useClassName(props)

      equal(expectedClassName, className2)
      equal(expectedCss, getCss(rules))
      equal(styleSheet.textContent, getCss(rules))
    }),

    it(`manages arbitrarily deep nested selectors`, function* ({ equal }) {
      const { rules } = yield* get()

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
      const expectedClassName = 't687996 t7bd650' as ClassName
      const expectedCss = '.t687996:hover{color:blue}@media(min-width: 30em){.t7bd650:hover > *{display:flex}}' as Css

      const className = yield* useClassName(props)

      equal(expectedClassName, className)
      equal(expectedCss, getCss(rules))
    }),
  ]),
])
