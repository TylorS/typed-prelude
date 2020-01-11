import { range } from '@typed/list'
import * as React from 'react'
import { Puzzle, PuzzleEvent } from '../domain/model'
import { getSquaresByRow } from '../domain/services'
import { PuzzleRow } from './PuzzleRow'

export function PuzzleGrid({ puzzle, sendEvent }: PuzzleProps) {
  const { size } = puzzle
  const [, height] = size

  return (
    <>
      {range(0, height).map(row => (
        <PuzzleRow key={row} squares={getSquaresByRow(puzzle, row)} sendEvent={sendEvent} />
      ))}
    </>
  )
}

export type PuzzleProps = {
  readonly puzzle: Puzzle
  readonly sendEvent: (event: PuzzleEvent) => void
}
