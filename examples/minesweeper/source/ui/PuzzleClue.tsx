import * as React from 'react'
import { Clue, SquareState } from '../domain/model'
import { CoveredPuzzleSquare } from './CoveredPuzzleSquare'
import { PuzzleFlag } from './PuzzleFlag'

export function PuzzleClue({ clue }: PuzzleClueProps) {
  const { state, neighboringMineCount } = clue

  if (state === SquareState.Uncovered) {
    return neighboringMineCount === 0 ? <label /> : <label>{neighboringMineCount}</label>
  }

  if (state === SquareState.Flagged) {
    return <PuzzleFlag />
  }

  return <CoveredPuzzleSquare />
}

export type PuzzleClueProps = {
  readonly clue: Clue
}
