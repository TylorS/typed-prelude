import { equals } from '@typed/logic'
import { html } from 'lighterhtml'
import { Dispatch, GameState } from '../application'
import { Position, Tile } from '../domain'

const emptyTile = (position: Position): Tile => ({
  value: 0,
  position,
})

export function render2048(state: GameState, dispatch: Dispatch) {
  return html`
    <div>Hello, World</div>
  `
}

function renderGrid({ coordinates, grid }: GameState, dispatch: Dispatch) {
  const tiles = coordinates.map(position =>
    renderTile(grid.tiles.find(tile => equals(tile.position, position)) || emptyTile(position)),
  )
}
