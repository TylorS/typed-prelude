import { Puzzle, SquareState } from '../model'
import { numberOfSquaresInStatesByType } from './numberOfSquaresInState'

export const numberOfMinesRemaining = (puzzle: Puzzle) =>
  numberOfSquaresInStatesByType('mine', [SquareState.Covered, SquareState.Flagged], puzzle.squares)
