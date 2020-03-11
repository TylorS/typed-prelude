import { Bounds, Position } from '../model'

export function getAllCoordinates({ rows, columns }: Bounds): ReadonlyArray<Position> {
  const coordinates: Position[] = []

  for (let x = columns[0]; x < columns[1]; ++x) {
    for (let y = rows[0]; y < rows[1]; ++y) {
      coordinates.push([x, y])
    }
  }

  return coordinates
}
