import { NewType } from '@typed/new-type'
import { ColorType, HexCode, Hsla, Rgba } from '../model'
import { HslHue } from '../model/HslHue'
import { Percentage } from '../model/Percentage'
import { padWithZeroIfNeeded } from './helpers'

const HEX_RADIX = 16
const EIGHT_BIT_MAX = 255

export type RgbaString = NewType<string, { readonly Rgba: unique symbol }>

export function rgbaToString<A extends Rgba>({ red, green, blue, alpha }: A): RgbaString {
  return `rgba(${red},${green},${blue},${alpha})` as RgbaString
}

export function rgbaToHexCode({ red, green, blue, alpha }: Rgba): HexCode {
  return {
    type: ColorType.HexCode,
    red: padWithZeroIfNeeded(red.toString(HEX_RADIX)),
    green: padWithZeroIfNeeded(green.toString(HEX_RADIX)),
    blue: padWithZeroIfNeeded(blue.toString(HEX_RADIX)),
    alpha: padWithZeroIfNeeded(Math.round(alpha * EIGHT_BIT_MAX).toString(HEX_RADIX)),
  }
}

export function rgbaToHsla({ red, green, blue, alpha }: Rgba): Hsla {
  const r = red / EIGHT_BIT_MAX
  const g = green / EIGHT_BIT_MAX
  const b = blue / EIGHT_BIT_MAX
  const min = Math.min(r, g, b)
  const max = Math.max(r, g, b)
  const delta = max - min
  const hue = calculateHue(r, g, b, max, delta)

  // Calculate lightness
  const l = (max + min) / 2

  // Calculate saturation
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  return {
    type: ColorType.Hsl,
    hue,
    saturation: toPercentage(s),
    lightness: toPercentage(l),
    alpha,
  }
}

function calculateHue(r: number, g: number, b: number, max: number, delta: number) {
  let h = 0

  if (delta === 0) h = 0
  // Red is max
  else if (max === r) h = ((g - b) / delta) % 6
  // Green is max
  else if (max === g) h = (b - r) / delta + 2
  // Blue is max
  else h = (r - g) / delta + 4

  h = Math.round(h * 60)

  // Make negative hues positive behind 360°
  if (h < 0) h += 360

  return h as HslHue
}

function toPercentage(n: number): Percentage {
  return +(n * 100).toFixed(1) as Percentage
}
