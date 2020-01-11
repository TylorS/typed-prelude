import { useState } from 'react'
import { useEffectOnce, useKey, useUpdateEffect } from 'react-use'
import { Difficulty, NumberOfMines, Puzzle, PuzzleEvent, SquareState } from '../domain/model'
import { numberOfCoveredClues, numberOfMinesRemaining, updatePosition } from '../domain/services'

const PUZZLE_STORAGE_KEY = `typed-minesweeper-puzzle`

export type UseMineSweeperOptions = {
  readonly initialDifficulty?: Difficulty
  readonly generatePuzzle: (difficulty: Difficulty) => Puzzle
  readonly storage: Storage
  readonly numberOfMines: NumberOfMines
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

const isControlPlusKey = (key: string) => (ev: KeyboardEvent) => ev.ctrlKey && ev.key === key

export function useMineSweeper({
  initialDifficulty = Difficulty.Beginner,
  generatePuzzle,
  storage,
  numberOfMines,
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

  useKey(isControlPlusKey('r'), () => sendEvent(['new-puzzle']))
  useKey(
    ev => ev.keyCode === 32,
    () => sendEvent(['new-puzzle']),
  )
  useKey(isControlPlusKey('d'), () => sendEvent(['change-difficulty']))

  // Anytime the difficulty is changed generate a new puzzle
  useUpdateEffect(() => setPuzzle(generatePuzzle(difficulty)), [generatePuzzle, difficulty])

  useEffectOnce(() => {
    const puzzleString = storage.getItem(PUZZLE_STORAGE_KEY)

    if (puzzleString) {
      const [puzzle, puzzleDifficulty] = JSON.parse(puzzleString) as [Puzzle, Difficulty]
      const remainingMines = numberOfMinesRemaining(puzzle)
      const won = numberOfMines[difficulty] === remainingMines && numberOfCoveredClues(puzzle) === 0
      const lost = numberOfMines[difficulty] > remainingMines

      if (!won && !lost) {
        setDifficulty(puzzleDifficulty)
        setPuzzle(puzzle)
      }
    }
  })

  useUpdateEffect(() => {
    storage.setItem(PUZZLE_STORAGE_KEY, JSON.stringify([puzzle, difficulty]))
  }, [puzzle])

  return {
    difficulty,
    puzzle,
    sendEvent,
  } as const
}
