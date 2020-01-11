import { Puzzle } from '../model'

export function getSquaresByRow({ squares }: Puzzle, row: number) {
  return squares.filter(({ position }) => position[1] === row)
}
