import { describe, given, it } from '@typed/test'
import { base64Encode } from './base64'
import { base64UrlEncode } from './base64UrlEncode'

export const test = describe(`base64UrlEncode`, [
  given(`a message`, [
    it(`returns a base64Url-encoded string`, ({ notOk, equal, notEqual }) => {
      const message = 'A + B / C = D'
      const base64 = base64Encode(message)
      const base64Url = base64UrlEncode(message)

      notEqual(base64, base64Url)
      notOk(base64Url.includes('+'))
      notOk(base64Url.includes('/'))
      notOk(base64Url.includes('='))
      equal(base64.indexOf('+'), base64Url.indexOf('-'))
      equal(base64.indexOf('/'), base64Url.indexOf('_'))
    }),
  ]),
])
