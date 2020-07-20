import { Color, ColorType, HexCode, Hsla, Percentage, Rgba } from '../model'
import { asPercentage } from './helpers'
import { hexCodeToHsla } from './hexCodeConversions'
import { hslaToHexCode, hslaToRgba } from './hslaConversions'
import { rgbaToHsla } from './rgbaConversions'

export function darken(color: Color, amount: Percentage): Color {
  switch (color.type) {
    case ColorType.HexCode:
      return darkenHexCode(color, amount)
    case ColorType.Hsla:
      return darkenHsla(color, amount)
    case ColorType.Rgba:
      return darkenRgba(color, amount)
  }
}

function darkenHsla(hsla: Hsla, amount: Percentage): Hsla {
  return Hsla.create(hsla.hue, hsla.saturation, asPercentage(hsla.lightness - amount), hsla.alpha)
}

function darkenRgba(rgba: Rgba, amount: Percentage): Rgba {
  return hslaToRgba(darkenHsla(rgbaToHsla(rgba), amount))
}

function darkenHexCode(hex: HexCode, amount: Percentage): HexCode {
  return hslaToHexCode(darkenHsla(hexCodeToHsla(hex), amount))
}
