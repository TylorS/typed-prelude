import { describe, given } from '@typed/test'
import { ClassName, CssSelector } from '../model'
import { getCssSelector } from './getCssSelector'
import { it } from './test-helpers'
import { useClassName } from './useClassName'

export const test = describe(`getCssSelector`, [
  given(`a ClassName`, [
    it(`returns a CssSelector`, function* ({ equal }) {
      const expectedClassName = 't281016' as ClassName
      const expectedCssSelector = ('.' + expectedClassName) as CssSelector
      const className = yield* useClassName({ color: 'blue' })

      equal(expectedClassName, className)

      const cssSelector = getCssSelector(className)

      equal(expectedCssSelector, cssSelector)
    }),
  ]),
])
