import { Tuple } from '@typed/tuple'

export interface Puzzle {
  readonly size: Size
  readonly squares: Squares
}

// Events a user can produce
export type PuzzleEvent =
  | Tuple<SquareState, Position>
  | readonly ['change-difficulty']
  | readonly ['new-puzzle']

export type PuzzleSizes = Record<Difficulty, Size>
export type NumberOfMines = Record<Difficulty, number>

// Width x Height
export interface Size extends Tuple<number> {}

export type Squares = readonly Square[]
export type Square = Mine | Clue

export interface Mine {
  readonly type: 'mine'
  readonly position: Position
  readonly state: SquareState
}

export interface Clue {
  readonly type: 'clue'
  readonly position: Position
  readonly state: SquareState
  readonly neighboringMineCount: number // When 0, all surrounding clues should be uncovered
}

// X,Y coordinates
export interface Position extends Tuple<number> {}

// A square can be in only a few states
export const enum SquareState {
  Covered,
  Flagged,
  Uncovered,
}

// Used to generate puzzles
export const enum Difficulty {
  Beginner,
  Intermediate,
  Expert,
}

export const enum PuzzleState {
  Playing,
  Win,
  Loss,
}
