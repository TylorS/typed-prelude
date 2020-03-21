import { Direction } from '../../model'

export const isVertical = (direction: Direction) =>
  direction === Direction.Up || direction === Direction.Down

export const isPositive = (direction: Direction) =>
  direction === Direction.Down || direction === Direction.Right
