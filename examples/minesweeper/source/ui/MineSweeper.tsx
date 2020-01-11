import * as React from 'react'
import { Difficulty, NumberOfMines, PuzzleSizes } from '../domain/model'
import { numberOfMinesRemaining, numberOfUncoveredClues } from '../domain/services'
import { classNames } from './classNames'
import { PuzzleGrid } from './PuzzleGrid'
import { useMineSweeper } from './useMineSweeper'
import { usePuzzleGenerator } from './usePuzzleGenerator'

const headerClassName = classNames('flex', 'items-center', 'justify-center', 'w-third', 'f2')

export function MineSweeper({ numberOfMines, puzzleSizes, initialDifficulty }: MineSweeperProps) {
  const generatePuzzle = usePuzzleGenerator(numberOfMines, puzzleSizes)
  const { difficulty, puzzle, sendEvent } = useMineSweeper({ initialDifficulty, generatePuzzle })
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
    <section className={classNames('w-100', 'h-100', 'flex', 'items-center', 'justify-center')}>
      <table className={classNames('pa5')}>
        <thead className={classNames('flex', 'items-center')}>
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
        </thead>

        <tbody className={classNames('ba', 'ba--black-80')}>
          <PuzzleGrid puzzle={puzzle} sendEvent={sendEvent} />
        </tbody>
      </table>
    </section>
  )
}

export type MineSweeperProps = {
  readonly initialDifficulty?: Difficulty
  readonly numberOfMines: NumberOfMines
  readonly puzzleSizes: PuzzleSizes
}
