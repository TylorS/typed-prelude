import { useState } from 'react'
import { useUpdateEffect } from 'react-use'
import { NumberOfMines, PuzzleSizes } from '../domain/model'
import { createPuzzleGenerator } from '../domain/services'

export function usePuzzleGenerator(numberOfMines: NumberOfMines, puzzleSizes: PuzzleSizes) {
  const [puzzleGenerator, setPuzzleGenerator] = useState(() =>
    createPuzzleGenerator(numberOfMines, puzzleSizes),
  )
  // Anytime the rules change create a new generator and update the puzzle
  useUpdateEffect(() => {
    const generatePuzzle = createPuzzleGenerator(numberOfMines, puzzleSizes)

    setPuzzleGenerator(generatePuzzle)
  }, [numberOfMines, puzzleSizes])

  return puzzleGenerator
}
