import { flatten, groupBy } from '@typed/list'
import { equals } from '@typed/logic'
import { mapToList } from '@typed/objects'
import { html } from 'lighterhtml'
import { Dispatch, GameState } from '../application'
import { Position, Tile } from '../domain'

import { getWinningAmount } from 'source/application/getWinningAmount'
import './2048.css'

const emptyTile = (position: Position): Omit<Tile, 'id'> => ({
  value: 0,
  position,
})

export function* render2048(state: GameState, dispatch: Dispatch) {
  const { grid, score, hasRemainingMoves, hasWon } = state
  const { size } = grid
  const winningAmount = getWinningAmount(grid)

  return html`
    <div class="flex flex-column pa4 items-center">
      <header class="flex flex-wrap items-center">
        <button
          class="pa2 ph4 mh3 pointer bg-light-blue bn white br3 f6"
          onclick=${() => dispatch(['resize'])}
        >
          Size ${size[0]}x${size[1]}
        </button>

        <span class="pa2 mh3 f1">${score}</span>

        <button
          class="pa2 ph4 mh3 pointer bg-light-blue bn white br3 f6"
          onclick=${() => dispatch(['new-grid'])}
        >
          Restart
        </button>
      </header>

      ${renderGrid(state)}

      <footer>
        <p class="tc">
          How to play: Use your arrow keys to move the tiles.
        </p>
        <p class="tc">
          When two tiles with the same number touch, they merge together.
        </p>
        <p class="tc">
          When you combine enough tiles to create a ${winningAmount} tile, you win!
        </p>
      </footer>

      ${hasRemainingMoves || hasWon
        ? ``
        : html`
            <div class="absolute modal bg-white ba b--black br3">
              <p class="tc">No moves are left,</p>
              <p class="tc">click restart to try again!</p>
            </div>
          `}
      ${hasWon
        ? html`
            <div class="absolute modal bg-white ba b--black br3">
              <p class="tc">You Win!</p>
              <p class="tc">click restart to play again!</p>
            </div>
          `
        : ``}
    </div>
  `
}

function renderGrid({ coordinates, grid }: GameState) {
  const coordinatesByRow = groupBy(([, y]) => y, coordinates)
  const tilesByRow = mapToList(
    (_, positions) => html`
      <div class="flex items-center">
        ${positions.map((position) =>
          renderTile(
            grid.tiles.find((tile) => equals(tile.position, position)) || emptyTile(position),
          ),
        )}
      </div>
    `,
    coordinatesByRow,
  )
  const tiles = flatten(tilesByRow)

  return html`
    <main class="ma4 pa3 br2 grid">
      ${tiles}
    </main>
  `
}

function renderTile(tile: Omit<Tile, 'id'>) {
  const { value } = tile

  return html`
    <figure
      class="flex items-center justify-center ma2 br2 ${getColorClass(value)}  tile${value === 0
        ? ' tile__empty'
        : ''}"
    >
      ${value === 0 ? '' : value}
    </figure>
  `
}

function getColorClass(value: number): string {
  switch (value) {
    case 0:
      return ``
    case 2:
      return `bg-light-blue white`
    case 4:
      return `bg-blue white`
    case 8:
      return `bg-dark-blue white`
    case 16:
      return `bg-navy white`
    case 32:
      return `bg-yellow white`
    case 64:
      return `bg-gold white`
    case 128:
      return `bg-orange white`
    case 256:
      return `bg-pink white`
    case 512:
      return `bg-light-red white`
    case 1024:
      return `bg-red white`
    case 2048:
    default:
      return `bg-dark-red white`
  }
}
