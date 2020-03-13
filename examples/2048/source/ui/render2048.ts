import { equals } from '@typed/logic'
import { html } from 'lighterhtml'
import { Dispatch, GameState } from '../application'
import { Position, Tile } from '../domain'

const emptyTile = (position: Position): Tile => ({
  value: 0,
  position,
})

export function* render2048(state: GameState, dispatch: Dispatch) {
  const { grid } = state
  const { size } = grid

  return html`
    <div class="flex flex-column">
      <header class="flex items-center">
        <span onclick=${() => dispatch(['resize'])}>Size ${size[0]}x${size[1]}</span>
        <span>${state.score}</span>
        <span onclick=${() => dispatch(['new-grid'])}>Restart</span>
      </header>

      ${renderGrid(state)}

      <footer>
        <p class="center">
          How to play: Use your arrow keys to move the tiles. When two tiles with the same number
          touch, they merge into one!
        </p>
      </footer>
    </div>
  `
}

function renderGrid({ coordinates, grid }: GameState) {
  const tiles = coordinates.map(position =>
    renderTile(grid.tiles.find(tile => equals(tile.position, position)) || emptyTile(position)),
  )

  return html`
    <main class="grid">
      ${tiles}
    </main>
  `
}

function renderTile(tile: Tile) {
  const { value } = tile

  return html`
    <figure class="tile${value === 0 ? ' tile__empty' : ''}">${value}</figure>
  `
}
