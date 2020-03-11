import { sum } from '@typed/math'
import { Grid } from '../model'

export function calculateScore({ tiles }: Grid): number {
  return sum(tiles.map(tile => tile.value))
}
