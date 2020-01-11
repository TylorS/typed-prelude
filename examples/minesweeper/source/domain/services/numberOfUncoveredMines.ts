import { Squares, SquareState } from '../model'
import { numberOfSquaresInStatesByType } from './numberOfSquaresInState'

export const numberOfUncoveredMines = (squares: Squares) =>
  numberOfSquaresInStatesByType('mine', [SquareState.Uncovered], squares)
