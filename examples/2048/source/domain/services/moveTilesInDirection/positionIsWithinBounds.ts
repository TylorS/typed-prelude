import { Bounds, Position } from '../../model'

export function positionIsWithinBounds(
  { rows, columns }: Bounds,
  [column, row]: Position,
): boolean {
  const isValidColumn = columns[0] <= column && columns[1] >= column
  const isValidRow = rows[0] <= row && rows[1] >= row

  return isValidColumn && isValidRow
}
