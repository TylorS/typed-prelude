import { describe, given, it } from '@typed/test'
import { base64Decode, base64Encode } from './base64'

export const test = describe(`base64Encode / base64Decode`, [
  given(`a message`, [
    it(`it should encode it to base64`, ({ equal }) => {
      const message = 'A + B / C = D'

      equal(message, base64Decode(base64Encode(message)))
    }),
  ]),
])
