import { Color, ColorType, HexCode, Hsla, Percentage, Rgba } from '../model'
import { asPercentage } from './helpers'
import { hexCodeToHsla } from './hexCodeConversions'
import { hslaToHexCode, hslaToRgba } from './hslaConversions'
import { rgbaToHsla } from './rgbaConversions'

export function lighten(color: Hsla, amount: Percentage): Hsla
export function lighten(color: Rgba, amount: Percentage): Rgba
export function lighten(color: HexCode, amount: Percentage): HexCode

export function lighten(color: Color, amount: Percentage): Color {
  switch (color.type) {
    case ColorType.HexCode:
      return lightenHexCode(color, amount)
    case ColorType.Hsla:
      return lightenHsla(color, amount)
    case ColorType.Rgba:
      return lightenRgba(color, amount)
  }
}

function lightenHsla(hsla: Hsla, amount: Percentage): Hsla {
  return Hsla.create(hsla.hue, hsla.saturation, asPercentage(hsla.lightness + amount), hsla.alpha)
}

function lightenRgba(rgba: Rgba, amount: Percentage): Rgba {
  return hslaToRgba(lightenHsla(rgbaToHsla(rgba), amount))
}

function lightenHexCode(hex: HexCode, amount: Percentage): HexCode {
  return hslaToHexCode(lightenHsla(hexCodeToHsla(hex), amount))
}
