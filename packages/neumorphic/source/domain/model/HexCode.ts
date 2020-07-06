import { ColorType } from './ColorType'
import { HexValue } from './HexValue'

export interface HexCode<
  RR extends HexValue = HexValue,
  GG extends HexValue = HexValue,
  BB extends HexValue = HexValue,
  AA extends HexValue = HexValue
> {
  readonly type: ColorType.HexCode
  readonly red: RR
  readonly green: GG
  readonly blue: BB
  readonly alpha: AA
}

export namespace HexCode {
  export const create = <
    RR extends HexValue = HexValue,
    GG extends HexValue = HexValue,
    BB extends HexValue = HexValue,
    AA extends HexValue = 'ff'
  >(
    red: RR,
    green: GG,
    blue: BB,
    alpha: AA = 'ff' as AA,
  ): HexCode<RR, GG, BB, AA> => ({
    type: ColorType.HexCode,
    red,
    green,
    blue,
    alpha,
  })
}
