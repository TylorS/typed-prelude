import { HexCode, Hsla, Rgba } from '../model'

export function hexCodeToString({ red, green, blue, alpha }: HexCode): string {
  return `#${red}${green}${blue}${alpha}`
}

export function hexCodeToRgba(hexCode: HexCode): Rgba {}

export function hexCodeToHsla(hexCode: HexCode): Hsla {}
