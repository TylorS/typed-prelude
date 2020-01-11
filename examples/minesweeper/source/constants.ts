import { Difficulty, NumberOfMines, PuzzleSizes } from './domain/model'

/** Rules
 * Borrowed from the rules of Microsoft Minesweeper
 */

export const numberOfMines: NumberOfMines = {
  [Difficulty.Beginner]: 10,
  [Difficulty.Intermediate]: 40,
  [Difficulty.Expert]: 99,
}

export const puzzleSizes: PuzzleSizes = {
  [Difficulty.Beginner]: [9, 9],
  [Difficulty.Intermediate]: [16, 16],
  [Difficulty.Expert]: [30, 16],
}
