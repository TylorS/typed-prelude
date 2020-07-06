import { describe, given, it } from '@typed/test'
import { HexCode, Rgba } from '../model'
import { hexCodeToRgba, hexCodeToString } from './hexCodeConversions'

export const test = describe('HexCode Conversions', [
  describe(`hexCodeToString`, [
    given(`a HexCode`, [
      it(`returns a string`, ({ equal }) => {
        const hex = HexCode.create('00', '00', '00')
        const expected = '#000000ff'

        equal(expected, hexCodeToString(hex))
      }),
    ]),
  ]),

  describe(`hexCodeToRgba`, [
    given(`a HexCode`, [
      it(`returns an Rgba`, ({ equal }) => {
        const colors = [
          [Rgba.create(0, 0, 0, 1), HexCode.create('00', '00', '00')],
          [Rgba.create(255, 255, 255, 1), HexCode.create('ff', 'ff', 'ff')],
          [Rgba.create(120, 120, 120, 0.5), HexCode.create('78', '78', '78', '80')],
          [Rgba.create(255, 0, 0), HexCode.create('ff', '00', '00')],
        ] as const

        for (const [rgba, hexCode] of colors) {
          equal(rgba, hexCodeToRgba(hexCode))
        }
      }),
    ]),
  ]),
])
