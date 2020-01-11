import { Puzzle, SquareState } from '../model'
import { numberOfSquaresInStatesByType } from './numberOfSquaresInState'

export const numberOfUncoveredClues = (puzzle: Puzzle) =>
  numberOfSquaresInStatesByType(
    'clue',
    [SquareState.Uncovered, SquareState.Flagged],
    puzzle.squares,
  )
