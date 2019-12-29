import { describe, given, it } from '@typed/test'
import { base64UrlDecode } from './base64UrlDecode'
import { base64UrlEncode } from './base64UrlEncode'

export const test = describe(`base64UrlDecode`, [
  given(`a base64UrlEncoded message`, [
    it(`returns the original message`, ({ equal }) => {
      const message = 'A + B / C = D  '
      const base64Url = base64UrlEncode(message)

      equal(message, base64UrlDecode(base64Url))
    }),
  ]),
])
