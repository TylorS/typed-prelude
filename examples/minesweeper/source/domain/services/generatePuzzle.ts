import { equals } from '@typed/logic'
import {
  Clue,
  Difficulty,
  Mine,
  NumberOfMines,
  Position,
  Puzzle,
  PuzzleSizes,
  Size,
  Square,
  SquareState,
} from '../model'
import { getSizeIndexes } from './getSizeIndexes'
import { getSurroundingPositions } from './getSurroundingPositions'

const getPosition = (square: Square) => square.position

export function createPuzzleGenerator(numberOfMines: NumberOfMines, puzzleSizes: PuzzleSizes) {
  return function generatePuzzle(difficulty: Difficulty): Puzzle {
    const size = puzzleSizes[difficulty]
    const mines = generateMines(numberOfMines[difficulty], size)
    const clues = generateClues(mines, size)

    return {
      size,
      squares: [...mines, ...clues],
    }
  }
}

function generateMines(numberOfMines: number, size: Size): readonly Mine[] {
  const generateRandomPosition = createRandomPositionGenerator(size)
  const mines: Mine[] = []

  function positionTaken(position: Position) {
    return mines.map(getPosition).some(equals(position))
  }

  for (let i = 0; i < numberOfMines; ++i) {
    let position = generateRandomPosition()

    while (positionTaken(position)) {
      position = generateRandomPosition()
    }

    mines.push({
      type: 'mine',
      position,
      state: SquareState.Covered,
    })
  }

  return mines
}

function generateClues(mines: readonly Mine[], size: Size): readonly Clue[] {
  const [width, height] = size
  const positionsOfMines = mines.map(getPosition)
  const clues: Clue[] = []

  function positionTaken(position: Position) {
    return positionsOfMines.some(equals(position))
  }

  for (let x = 0; x < width; ++x) {
    for (let y = 0; y < height; ++y) {
      const position: Position = [x, y]

      if (positionTaken(position)) {
        continue
      }

      clues.push({
        type: 'clue',
        position,
        state: SquareState.Covered,
        neighboringMineCount: getNumberOfNeighboringMines(position, positionsOfMines, size),
      })
    }
  }

  return clues
}

function getNumberOfNeighboringMines(
  position: Position,
  minePositions: readonly Position[],
  puzzleSize: Size,
): number {
  const { length } = getSurroundingPositions(position, puzzleSize).filter(
    pos => minePositions.findIndex(equals(pos)) > -1,
  )

  return length
}

function createRandomPositionGenerator(size: Size) {
  const [width, height] = getSizeIndexes(size)

  return (): Position => {
    const x = getRandomInt(0, width)
    const y = getRandomInt(0, height)

    return [x, y]
  }
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}
