import { equals } from '@typed/logic'
import { Grid } from 'source/domain'

export function getWinningAmount(grid: Grid) {
  return equals([3, 3], grid.size) ? 1024 : 2048
}
