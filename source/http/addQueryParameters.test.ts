import { describe, given, it, Test } from '@typed/test'
import { addQueryParameters } from './addQueryParameters'

export const test: Test = describe(`addQueryParameters`, [
  given(`a url and a Record of query parameters`, [
    it(`returns a url with query parameters appended`, ({ equal }) => {
      const url = `https://example.com/`
      const params = {
        hello: 'world',
        foo: 'bar',
      }

      const expected = `${url}?foo=bar&hello=world`
      const actual = addQueryParameters(url, params)

      equal(expected, actual)
    }),
  ]),
])
