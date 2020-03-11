import { Tile } from '../../model'

export function checkCanMergeTile(a: Tile, b: Tile): boolean {
  return a.value === b.value
}
