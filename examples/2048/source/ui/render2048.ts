import { flatten, groupBy } from '@typed/list'
import { equals } from '@typed/logic'
import { mapToList } from '@typed/objects'
import { html } from 'lighterhtml'
import { Dispatch, GameState } from '../application'
import { Position, Tile } from '../domain'

import './2048.css'

const emptyTile = (position: Position): Omit<Tile, 'id'> => ({
  value: 0,
  position,
})

export function* render2048(state: GameState, dispatch: Dispatch) {
  const { grid, score, hasRemainingMoves } = state
  const { size } = grid

  console.log(hasRemainingMoves)

  return html`
    <div class="flex flex-column pa4 items-center">
      <header class="flex flex-wrap items-center">
        <span class="pa2 mh3" onclick=${() => dispatch(['resize'])}
          >Size ${size[0]}x${size[1]}</span
        >
        <span class="pa2 mh3">${score}</span>
        <span class="pa2 mh3" onclick=${() => dispatch(['new-grid'])}>Restart</span>
      </header>

      ${renderGrid(state)}

      <footer>
        <p class="center">
          How to play: Use your arrow keys to move the tiles. When two tiles with the same number
          touch, they merge together. When you combine to create a 2048 tile, you win!
        </p>
      </footer>

      ${hasRemainingMoves
        ? ``
        : html`
            <div class="absolute modal bg-white-90 ba b--black br3">
              <p class="tc">No moves are left,</p>
              <p class="tc">click restart to try again!</p>
            </div>
          `}
    </div>
  `
}

function renderGrid({ coordinates, grid }: GameState) {
  const coordinatesByRow = groupBy(([, y]) => y, coordinates)
  const tilesByRow = mapToList(
    (_, positions) => html`
      <div class="flex items-center">
        ${positions.map(position =>
          renderTile(
            grid.tiles.find(tile => equals(tile.position, position)) || emptyTile(position),
          ),
        )}
      </div>
    `,
    coordinatesByRow,
  )
  const tiles = flatten(tilesByRow)

  return html`
    <main class="ma4 grid">
      ${tiles}
    </main>
  `
}

function renderTile(tile: Omit<Tile, 'id'>) {
  const { value } = tile

  return html`
    <figure class="flex items-center justify-center ma0 tile${value === 0 ? ' tile__empty' : ''}">
      ${value}
    </figure>
  `
}
