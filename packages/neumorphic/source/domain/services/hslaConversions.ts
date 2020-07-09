import { pipeline } from '@typed/lambda'
import { HexCode, Hsla, NonNegativeEightBitInteger, Rgba } from '../model'
import { rgbaToHexCode } from './rgbaConversions'

export function hslaToString({ hue, saturation, lightness, alpha }: Hsla): string {
  return `hsla(${hue},${saturation},${lightness},${alpha})`
}

// Extracted from https://css-tricks.com/converting-color-spaces-in-javascript/
export function hslaToRgba({ hue, saturation, lightness, alpha }: Hsla): Rgba {
  const s = saturation / 100
  const l = lightness / 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1))
  const m = l - c / 2

  let r = 0
  let g = 0
  let b = 0

  if (0 <= hue && hue < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= hue && hue < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= hue && hue < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= hue && hue < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= hue && hue < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= hue && hue < 360) {
    r = c
    g = 0
    b = x
  }

  const red = Math.round((r + m) * 255) as NonNegativeEightBitInteger
  const green = Math.round((g + m) * 255) as NonNegativeEightBitInteger
  const blue = Math.round((b + m) * 255) as NonNegativeEightBitInteger

  return Rgba.create(red, green, blue, alpha)
}

export function hslaToHexCode(hsla: Hsla): HexCode {
  return pipeline(hsla, hslaToRgba, rgbaToHexCode)
}
