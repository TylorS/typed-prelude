import { Puzzle, SquareState } from '../model'
import { numberOfSquaresInStatesByType } from './numberOfSquaresInState'

export const numberOfCoveredClues = (puzzle: Puzzle) =>
  numberOfSquaresInStatesByType('clue', [SquareState.Covered, SquareState.Flagged], puzzle.squares)
