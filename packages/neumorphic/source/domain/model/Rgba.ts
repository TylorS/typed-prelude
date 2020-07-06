import { ColorNumber } from './ColorNumber'
import { ColorType } from './ColorType'
import { ZeroToOne } from './ZeroToOne'

export interface Rgba<
  R extends ColorNumber = ColorNumber,
  G extends ColorNumber = ColorNumber,
  B extends ColorNumber = ColorNumber,
  A extends ZeroToOne = ZeroToOne
> {
  readonly type: ColorType.Rgba
  readonly red: R
  readonly green: G
  readonly blue: B
  readonly alpha: A
}

export namespace Rgba {
  export const create = <
    R extends ColorNumber = ColorNumber,
    G extends ColorNumber = ColorNumber,
    B extends ColorNumber = ColorNumber,
    A extends ZeroToOne = 1
  >(
    red: R,
    green: G,
    blue: B,
    alpha: A = 1 as A,
  ): Rgba<R, G, B, A> => ({
    type: ColorType.Rgba,
    red,
    green,
    blue,
    alpha,
  })
}
