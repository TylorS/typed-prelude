import { blue, bold } from '@typed/common/colors'
import { describe, given, it } from '@typed/test'
import { formatConfigName } from './formatConfigName'

export const test = describe(`formatConfigName`, [
  given(`given describe/given/it`, [
    it(`returns then bold and blue`, ({ equal }) => {
      const strings = ['describe', 'given', 'it']

      for (const str of strings) {
        const expected = bold(blue(str))

        equal(expected, formatConfigName(str))
      }
    }),
  ]),

  given(`given a string`, [
    it(`returns the values as is`, ({ equal }) => {
      const strings = ['describe', 'given', 'it']

      for (const str of strings) {
        equal(str, formatConfigName(str, []))
      }
    }),
  ]),
])
