import * as React from 'react'
import { Square, SquareState } from '../domain/model'
import { isClue } from '../domain/services'
import { classNames } from './classNames'
import { PuzzleClue } from './PuzzleClue'
import { PuzzleMine } from './PuzzleMine'

const squareStyle: React.CSSProperties = {
  height: '32px',
  width: '32px',
}

export function PuzzleSquare({ square, updateState }: PuzzleSquareProps) {
  const { state } = square

  return (
    <td
      className={classNames('inline-flex', 'justify-center', 'items-center')}
      style={squareStyle}
      onClick={() => updateState(SquareState.Uncovered)}
      onContextMenu={ev => {
        ev.preventDefault()
        updateState(state === SquareState.Flagged ? SquareState.Covered : SquareState.Flagged)
      }}
    >
      {isClue(square) ? <PuzzleClue clue={square} /> : <PuzzleMine mine={square} />}
    </td>
  )
}

export type PuzzleSquareProps = {
  readonly square: Square
  readonly updateState: (state: SquareState) => void
}
