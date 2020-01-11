import { Tuple } from '@typed/tuple'
import { Size } from '../model'

export function getSizeIndexes(size: Size): Tuple<number> {
  return [size[0] - 1, size[1] - 1]
}
