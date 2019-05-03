import { describe, given, it, Test } from '@typed/test'

import { pathToRegex } from './pathToRegex'

export const test: Test = describe(`pathToRegex`, [
  given(`a path`, [
    it(`returns a Regular Expression and Params`, ({ equal }) => {
      const path = '/:id'
      const url = '/123'

      const { regex, params } = pathToRegex(path)

      const match = regex.exec(url) as RegExpExecArray

      equal(url, match.input)
      equal(
        [{ name: 'id', pattern: new RegExp('[a-zA-Z0-9-_]+'), required: true, part: 0 }],
        params,
      )
    }),
  ]),
])
