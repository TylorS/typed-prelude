import * as React from 'react'
import { Mine, SquareState } from '../domain/model'
import { CoveredPuzzleSquare } from './CoveredPuzzleSquare'
import MineImg from './mine.png'
import { PuzzleFlag } from './PuzzleFlag'

export function PuzzleMine({ mine }: PuzzleMineProps) {
  const { state } = mine

  if (state === SquareState.Covered) {
    return <CoveredPuzzleSquare />
  }

  if (state === SquareState.Flagged) {
    return <PuzzleFlag />
  }

  return <img src={MineImg} alt="Mine" />
}

export type PuzzleMineProps = {
  readonly mine: Mine
}
