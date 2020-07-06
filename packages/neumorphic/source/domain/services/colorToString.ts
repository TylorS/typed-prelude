import { Color, ColorType } from '../model'
import { hexCodeToString } from './hexCodeConversions'
import { hslaToString } from './hslaConversions'
import { rgbaToString } from './rgbaConversions'

export function colorToString(color: Color): string {
  switch (color.type) {
    case ColorType.HexCode:
      return hexCodeToString(color)
    case ColorType.Hsla:
      return hslaToString(color)
    case ColorType.Rgba:
      return rgbaToString(color)
  }
}
