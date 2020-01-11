import { ascend, sort } from '@typed/list/esm'
import * as React from 'react'
import { Position, PuzzleEvent, Square, Squares } from '../domain/model'
import { PuzzleSquare } from './PuzzleSquare'

const positionToKey = ([x, y]: Position): string => `${x},${y}`
const sortByColumn = sort(ascend(({ position }: Square) => position[0]))

export function PuzzleRow({ squares, sendEvent }: PuzzleRowProps) {
  return (
    <tr>
      {sortByColumn(squares).map(square => (
        <PuzzleSquare
          key={positionToKey(square.position)}
          square={square}
          updateState={state => sendEvent([state, square.position])}
        />
      ))}
    </tr>
  )
}

export type PuzzleRowProps = {
  readonly squares: Squares
  readonly sendEvent: (event: PuzzleEvent) => void
}
