import { ColorType } from './ColorType'
import { HslHue } from './HslHue'
import { Percentage } from './Percentage'
import { ZeroToOne } from './ZeroToOne'

export interface Hsla<
  H extends HslHue = HslHue,
  S extends Percentage = Percentage,
  L extends Percentage = Percentage,
  A extends ZeroToOne = ZeroToOne
> {
  readonly type: ColorType.Hsl
  readonly hue: H
  readonly saturation: S
  readonly lightness: L
  readonly alpha: A
}

export namespace Hsla {
  export const create = <
    H extends HslHue,
    S extends Percentage,
    L extends Percentage,
    A extends ZeroToOne = 1
  >(
    hue: H,
    saturation: S,
    lightness: L,
    alpha: A = 1 as A,
  ): Hsla<H, S, L, A> => ({
    type: ColorType.Hsl,
    hue,
    saturation,
    lightness,
    alpha,
  })
}
