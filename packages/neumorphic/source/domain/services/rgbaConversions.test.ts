import { describe, given, it } from '@typed/test'
import { HexCode, Hsla, Rgba } from '../model'
import { rgbaToHexCode, rgbaToHsla, rgbaToString } from './rgbaConversions'

export const rgbaToStringTest = describe(`rgbaToString`, [
  given(`an Rgba`, [
    it(`returns its string representation`, ({ equal }) => {
      const rgba = Rgba.create(0, 0, 0, 0)
      const test = equal(`rgba(0,0,0,0)`)

      test(rgbaToString(rgba))
    }),
  ]),
])

export const rgbaToHexCodeTest = describe(`rgbaToHexCode`, [
  given(`and Rgba`, [
    it(`returns an equal HexCode`, ({ equal }) => {
      const colors = [
        [Rgba.create(0, 0, 0, 1), HexCode.create('00', '00', '00')],
        [Rgba.create(255, 255, 255, 1), HexCode.create('ff', 'ff', 'ff')],
        [Rgba.create(120, 120, 120, 0.5), HexCode.create('78', '78', '78', '80')],
        [Rgba.create(255, 0, 0), HexCode.create('ff', '00', '00')],
      ] as const

      for (const [rgba, hexCode] of colors) {
        equal(hexCode, rgbaToHexCode(rgba))
      }
    }),
  ]),
])

export const rgbaToHslaTest = describe(`rgbaToHsla`, [
  given(`and Rgba`, [
    it(`returns an equal HexCode`, ({ equal }) => {
      const colors = [
        [Rgba.create(0, 0, 0, 1), Hsla.create(0, 0, 0, 1)],
        [Rgba.create(255, 255, 255, 1), Hsla.create(0, 0, 100, 1)],
        [Rgba.create(120, 120, 120, 0.5), Hsla.create(0, 0, 47.1, 0.5)],
        [Rgba.create(255, 0, 0), Hsla.create(0, 100, 50, 1)],
      ] as const

      for (const [rgba, hexCode] of colors) {
        equal(hexCode, rgbaToHsla(rgba))
      }
    }),
  ]),
])
