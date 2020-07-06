import { pipeline } from '@typed/lambda'
import { ColorNumber, HexCode, HexValue, Hsla, Rgba, ZeroToOne } from '../model'
import { rgbaToHsla } from './rgbaConversions'

export function hexCodeToString({ red, green, blue, alpha }: HexCode): string {
  return `#${red}${green}${blue}${alpha}`
}

export function hexCodeToRgba({ red, green, blue, alpha }: HexCode): Rgba {
  return Rgba.create(
    hexValueToColorNumber(red),
    hexValueToColorNumber(green),
    hexValueToColorNumber(blue),
    hexValueToDecimal(alpha),
  )
}

function hexValueToDecimal(value: HexValue): ZeroToOne {
  return (Math.round((hexValueToColorNumber(value) / 255) * 100) / 100) as ZeroToOne
}

function hexValueToColorNumber(value: HexValue): ColorNumber {
  return Math.round(parseInt(value, 16)) as ColorNumber
}

export function hexCodeToHsla(hexCode: HexCode): Hsla {
  return pipeline(hexCode, hexCodeToRgba, rgbaToHsla)
}
