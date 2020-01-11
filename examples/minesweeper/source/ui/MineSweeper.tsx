import { DomEnv } from '@typed/dom/esm'
import * as React from 'react'
import { Difficulty, NumberOfMines, PuzzleSizes } from '../domain/model'
import { numberOfMinesRemaining, numberOfUncoveredClues } from '../domain/services'
import { classNames } from './classNames'
import { PuzzleGrid } from './PuzzleGrid'
import { useMineSweeper } from './useMineSweeper'
import { usePuzzleGenerator } from './usePuzzleGenerator'

const headerClassName = classNames('flex', 'items-center', 'justify-center', 'w-third', 'f2')

export function MineSweeper({
  domEnv,
  numberOfMines,
  puzzleSizes,
  initialDifficulty,
}: MineSweeperProps) {
  const generatePuzzle = usePuzzleGenerator(numberOfMines, puzzleSizes)
  const { difficulty, puzzle, sendEvent } = useMineSweeper({
    initialDifficulty,
    generatePuzzle,
    storage: domEnv.localStorage,
  })
  const remainingMines = React.useMemo(() => numberOfMinesRemaining(puzzle), [puzzle])
  const haveLost = React.useMemo(() => numberOfMines[difficulty] > remainingMines, [
    numberOfMines,
    difficulty,
    remainingMines,
  ])
  const [uncoveredClues, setUncoveredClues] = React.useState(0)

  React.useEffect(() => {
    if (haveLost) {
      return
    }

    setUncoveredClues(numberOfUncoveredClues(puzzle))
  }, [haveLost, puzzle])

  return (
    <section
      className={classNames(
        'w-100',
        'h-100',
        'flex',
        'flex-column',
        'items-center',
        'justify-center',
      )}
    >
      <h1>MineSweeper</h1>

      <table className={classNames('ma5', 'mt0', 'pa5', 'pt0', 'collapse')}>
        <thead>
          <td colSpan={puzzleSizes[difficulty][0]} className={classNames('flex', 'items-center')}>
            <section
              onClick={() => sendEvent(['change-difficulty'])}
              className={classNames(headerClassName, 'pointer')}
            >
              {remainingMines}
            </section>

            <section
              className={classNames(headerClassName, 'pointer')}
              onClick={() => sendEvent(['new-puzzle'])}
            >
              <p dangerouslySetInnerHTML={{ __html: haveLost ? `&#128560` : `&#128515` }}></p>
            </section>

            <section className={headerClassName}>{uncoveredClues}</section>
          </td>
        </thead>

        <tbody>
          <PuzzleGrid puzzle={puzzle} sendEvent={sendEvent} />
        </tbody>
      </table>
    </section>
  )
}

export type MineSweeperProps = {
  readonly domEnv: DomEnv
  readonly numberOfMines: NumberOfMines
  readonly puzzleSizes: PuzzleSizes
  readonly initialDifficulty?: Difficulty
}
