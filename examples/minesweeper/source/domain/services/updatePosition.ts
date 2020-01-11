import { chain, filterMaybes, find, uniq } from '@typed/list'
import { equals } from '@typed/logic'
import { fromJust, isJust, Maybe } from '@typed/maybe'
import { Clue, Position, Puzzle, Square, Squares, SquareState } from '../model'
import { getSurroundingPositions } from './getSurroundingPositions'
import { isClue } from './isClue'
import { isMine } from './isMine'

export function updatePosition(state: SquareState, position: Position, puzzle: Puzzle): Puzzle {
  const { squares } = puzzle
  const squareAtPosition = findPosition(position, squares)

  if (isJust(squareAtPosition) && state === SquareState.Uncovered) {
    const square = fromJust(squareAtPosition)

    if (isMine(square)) {
      return {
        ...puzzle,
        squares: squares.map(square => ({ ...square, state })),
      }
    }

    if (isClue(square) && square.neighboringMineCount === 0) {
      return uncoverSurroundingClues([position], puzzle)
    }
  }

  return {
    ...puzzle,
    squares: updateSquaresAtPosition(new Set([position]), state, squares),
  }
}

function findPosition<A extends Square>(position: Position, squares: readonly A[]): Maybe<A> {
  return find(square => equals(position, square.position), squares)
}

function uncoverSurroundingClues(positions: readonly Position[], puzzle: Puzzle): Puzzle {
  const surroundingPositions = uniq(
    chain(pos => getSurroundingPositions(pos, puzzle.size), positions),
  )
  const cluesToUncover = findCluesToUncover(surroundingPositions, puzzle.squares)

  if (cluesToUncover.length === 0) {
    return puzzle
  }

  const positionsOfCluesToUncover = cluesToUncover.map(clue => clue.position)
  const cluesToRecurse = cluesToUncover.filter(x => x.neighboringMineCount === 0)

  const updatedPuzzle = {
    ...puzzle,
    squares: updateSquaresAtPosition(
      new Set([...positions, ...positionsOfCluesToUncover]),
      SquareState.Uncovered,
      puzzle.squares,
    ),
  }

  return uncoverSurroundingClues(
    cluesToRecurse.map(x => x.position),
    updatedPuzzle,
  )
}

function findCluesToUncover(positions: readonly Position[], squares: Squares): readonly Clue[] {
  const clues = squares.filter(isClue).filter(square => square.state !== SquareState.Uncovered)

  return filterMaybes(positions.map(pos => findPosition(pos, clues)))
}

function updateSquaresAtPosition(
  positions: Set<Position>,
  state: SquareState,
  squares: Squares,
): Squares {
  return squares.map(square => {
    if (positions.has(square.position) && canMoveToNewState(square, state)) {
      return {
        ...square,
        state,
      }
    }

    return square
  })
}

function canMoveToNewState(square: Square, state: SquareState) {
  switch (square.state) {
    case SquareState.Covered:
      return state !== SquareState.Covered
    case SquareState.Flagged:
      return state !== SquareState.Flagged
    case SquareState.Uncovered:
      return false
  }
}
