import { length } from '@typed/list'
import { Square, Squares, SquareState } from '../model'

export function numberOfSquaresInStates(states: readonly SquareState[], squares: Squares): number {
  return length(squares.filter(({ state }) => states.includes(state)))
}

export function numberOfSquaresInStatesByType(
  type: Square['type'],
  states: readonly SquareState[],
  squares: Squares,
) {
  return length(squares.filter(square => states.includes(square.state) && square.type === type))
}
