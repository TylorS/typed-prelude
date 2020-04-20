import { describe, given, it } from '@typed/test'
import { stringToArrayBuffer } from './stringToArrayBuffer'
import { arrayBufferToString } from './arrayBufferToString'

export const test = describe(`arrayBufferToString`, [
  given(`an ArrayBuffer`, [
    it(`returns a string`, ({ equal }) => {
      const message = '᝽壜⡞曗�殷욓ㅴ皜ഠ堬꼎滑⸳늣嚂逊눠棛㖷闊캆钑⁇ፆ餋'
      const arrayBuffer = stringToArrayBuffer(message)

      equal(message, arrayBufferToString(arrayBuffer))
    }),
  ]),
])
