import { Tuple } from '@typed/tuple'
import { Uuid } from '@typed/uuid'

// The entire grid state
export interface Grid {
  readonly size: Size
  readonly tiles: Tiles
}

// Sizes supported for the grid
export type Size = Tuple<3> | Tuple<4> | Tuple<5> | Tuple<6>

// List of Tile
export type Tiles = ReadonlyArray<Tile>

// A Tile is a board piece that has a position and a value
export interface Tile {
  readonly id: Uuid
  readonly position: Position
  readonly value: number
}

// X, Y coordinates
export interface Position extends Tuple<number> {}

// Direction in which tiles are being moved
export const enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Acceptable indexes in which tiles can be
export interface Bounds {
  readonly rows: Tuple<number>
  readonly columns: Tuple<number>
}
