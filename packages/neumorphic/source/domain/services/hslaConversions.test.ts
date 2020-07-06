import { describe, given, it } from '@typed/test'
import { Hsla, Rgba } from '../model'
import { hslaToRgba } from './hslaConversions'

export const hslaToRgbaTest = describe(`hslaToRgba`, [
  given(`an Hsla`, [
    it(`returns an equivalent Rgba`, ({ equal }) => {
      const colors = [
        [Rgba.create(0, 0, 0, 1), Hsla.create(0, 0, 0, 1)],
        [Rgba.create(255, 255, 255, 1), Hsla.create(0, 0, 100, 1)],
        [Rgba.create(120, 120, 120, 0.5), Hsla.create(0, 0, 47.1, 0.5)],
        [Rgba.create(255, 0, 0), Hsla.create(0, 100, 50, 1)],
      ] as const

      for (const [rgba, hsla] of colors) {
        equal(rgba, hslaToRgba(hsla))
      }
    }),
  ]),
])
