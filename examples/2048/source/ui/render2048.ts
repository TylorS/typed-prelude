import { Effects } from '@typed/effects'
import { html, text, VNode } from '@typed/html'
import { flatten, groupBy } from '@typed/list'
import { equals } from '@typed/logic'
import { mapToList } from '@typed/objects'
import { Dispatch, GameState } from '../application'
import { Position, Tile } from '../domain'

import { getWinningAmount } from 'source/application/getWinningAmount'
import './2048.css'

const emptyTile = (position: Position): Omit<Tile, 'id'> => ({
  value: 0,
  position,
})

export function* render2048<E>(state: GameState, dispatch: Dispatch<E>): Effects<E, VNode<E>> {
  const { grid, score, hasRemainingMoves, hasWon } = state
  const { size } = grid
  const winningAmount = getWinningAmount(grid)

  return html('div', { className: 'flex flex-column pa4 items-center' }, [
    html('header', { className: 'flex flex-wrap items-center' }, [
      html<E>(
        'button',
        {
          className: 'pa2 ph4 mh3 pointer bg-light-blue bn white br3 f6',
          on: {
            click: () => dispatch(['resize']),
          },
        },
        [text(`Size `), text(String(size[0])), text('x'), text(String(size[1]))],
      ),

      html('span', { className: 'pa2 mh3 f1' }, [text(String(score))]),

      html<E>(
        'button',
        {
          className: 'pa2 ph4 mh3 pointer bg-light-blue bn white br3 f6',
          on: {
            click: () => dispatch(['new-grid']),
          },
        },
        [text('Restart')],
      ),
    ]),

    renderGrid(state),

    html('footer', null, [
      html('p', { className: 'tc' }, [text('How to play: Use your arrow keys to move the tiles.')]),

      html('p', { className: 'tc' }, [
        text('When two tiles with the same number touch, they merge together.'),
      ]),

      html('p', { className: 'tc' }, [
        text(`When you combine enough tiles to create a ${winningAmount} tile, you win!`),
      ]),
    ]),

    !hasRemainingMoves && !hasWon
      ? html('div', { className: 'absolute modal bg-white ba b--black br3' }, [
          html('p', { className: 'tc' }, [text('No moves are left,')]),
          html('p', { className: 'tc' }, [text('Click restart to play again!')]),
        ])
      : null,

    hasWon
      ? html('div', { className: 'absolute modal bg-white ba b--black br3' }, [
          html('p', { className: 'tc' }, [text('You Win!')]),
          html('p', { className: 'tc' }, [text('Click restart to play again!')]),
        ])
      : null,
  ])
}

function renderGrid({ coordinates, grid }: GameState) {
  const coordinatesByRow = groupBy(([, y]) => y, coordinates)
  const tilesByRow = mapToList(
    (_, positions) =>
      html(
        'div',
        { className: 'flex items-center' },
        positions.map((position) =>
          renderTile(
            grid.tiles.find((tile) => equals(tile.position, position)) || emptyTile(position),
          ),
        ),
      ),
    coordinatesByRow,
  )
  const tiles = flatten(tilesByRow)

  return html('main', { className: 'ma4 pa3 br2 grid' }, tiles)
}

const getTileClassName = (value: number) =>
  `flex items-center justify-center ma2 br2 ${getColorClass(value)}  tile${
    value === 0 ? ' tile__empty' : ''
  }`

function renderTile(tile: Omit<Tile, 'id'>) {
  const { value } = tile

  return html(
    'figure',
    {
      className: getTileClassName(value),
    },
    [text(`${value === 0 ? '' : value}`)],
  )
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
