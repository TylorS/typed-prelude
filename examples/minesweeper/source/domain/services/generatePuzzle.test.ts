import { uniq } from '@typed/list'
import { describe, given, it } from '@typed/test'
import { numberOfMines, puzzleSizes } from '../../constants'
import { Difficulty } from '../model'
import { createPuzzleGenerator } from './generatePuzzle'

const generatePuzzle = createPuzzleGenerator(numberOfMines, puzzleSizes)

export const test = describe(`generatePuzzle`, [
  given(`Difficulty.Beginner`, [
    it(`returns a 9x9 puzzle with 10 mines and 71 clues`, ({ equal }) => {
      const puzzle = generatePuzzle(Difficulty.Beginner)

      equal([9, 9], puzzle.size)
      equal(10, puzzle.squares.filter(x => x.type === 'mine').length)
      equal(71, puzzle.squares.filter(x => x.type === 'clue').length)
    }),
  ]),

  given(`Difficulty.Intermediate`, [
    it(`returns a 16x16 puzzle with 40 mines and 216 clues`, ({ equal }) => {
      const puzzle = generatePuzzle(Difficulty.Intermediate)

      equal([16, 16], puzzle.size)
      equal(40, puzzle.squares.filter(x => x.type === 'mine').length)
      equal(216, puzzle.squares.filter(x => x.type === 'clue').length)
    }),
  ]),

  given(`Difficulty.Intermediate`, [
    it(`returns a 30x16 puzzle with 99 mines and 381 clues`, ({ equal }) => {
      const puzzle = generatePuzzle(Difficulty.Expert)

      equal([30, 16], puzzle.size)
      equal(99, puzzle.squares.filter(x => x.type === 'mine').length)
      equal(381, puzzle.squares.filter(x => x.type === 'clue').length)
    }),
  ]),

  given(`Difficulty`, [
    it(`returns a puzzle with no overlapping mines or clues`, ({ equal }) => {
      const puzzle = generatePuzzle(Difficulty.Expert)
      const positions = [
        ...puzzle.squares.filter(x => x.type === 'mine').map(x => x.position),
        ...puzzle.squares.filter(x => x.type === 'clue').map(x => x.position),
      ]

      equal(positions.length, uniq(positions).length)
    }),

    it(`returns a puzzle with squares within bounds of puzzle`, ({ ok }) => {
      const puzzle = generatePuzzle(Difficulty.Expert)
      const positions = [
        ...puzzle.squares.filter(x => x.type === 'mine').map(x => x.position),
        ...puzzle.squares.filter(x => x.type === 'clue').map(x => x.position),
      ]
      const xPositions = positions.map(([x]) => x)
      const yPositions = positions.map(([, y]) => y)

      xPositions.forEach(x => ok(x >= 0 && x < puzzle.size[0]))
      yPositions.forEach(y => ok(y >= 0 && y < puzzle.size[1]))
    }),
  ]),
])
