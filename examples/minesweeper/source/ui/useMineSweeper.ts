import { useState } from 'react'
import { useUpdateEffect } from 'react-use'
import { updatePosition } from 'source/domain/services/updatePosition'
import { Difficulty, Puzzle, PuzzleEvent, SquareState } from '../domain/model'

export type UseMineSweeperOptions = {
  readonly initialDifficulty?: Difficulty
  readonly generatePuzzle: (difficulty: Difficulty) => Puzzle
}

const nextDifficulty = (difficulty: Difficulty) => {
  switch (difficulty) {
    case Difficulty.Beginner:
      return Difficulty.Intermediate
    case Difficulty.Intermediate:
      return Difficulty.Expert
    case Difficulty.Expert:
      return Difficulty.Beginner
  }
}

export function useMineSweeper({
  initialDifficulty = Difficulty.Beginner,
  generatePuzzle,
}: UseMineSweeperOptions) {
  const [difficulty, setDifficulty] = useState(initialDifficulty)
  const [puzzle, setPuzzle] = useState(() => generatePuzzle(difficulty))

  const sendEvent = (event: PuzzleEvent) => {
    switch (event[0]) {
      case 'change-difficulty':
        return setDifficulty(nextDifficulty(difficulty))
      case 'new-puzzle':
        return setPuzzle(generatePuzzle(difficulty))
      case SquareState.Covered:
      case SquareState.Flagged:
      case SquareState.Uncovered:
        return setPuzzle(updatePosition(event[0], event[1], puzzle))
    }
  }

  // Anytime the difficulty is changed generate a new puzzle
  useUpdateEffect(() => setPuzzle(generatePuzzle(difficulty)), [generatePuzzle, difficulty])

  return {
    difficulty,
    puzzle,
    sendEvent,
  } as const
}
