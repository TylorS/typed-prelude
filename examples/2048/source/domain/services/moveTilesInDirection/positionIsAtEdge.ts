import { Bounds, Position } from '../../model/Grid'

export function positionIsAtVerticalEdge({ rows }: Bounds, [, row]: Position): boolean {
  return rows[0] === row || rows[1] === row
}

export function positionIsAtHorizontalEdge({ columns }: Bounds, [column]: Position): boolean {
  return columns[0] === column || columns[1] === column
}
