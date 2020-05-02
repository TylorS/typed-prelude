import { Disposable } from '@typed/disposable'
import { addEventListener, DomEnv } from '@typed/dom'
import { get, TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useEffectOnce } from '@typed/hooks'
import { Direction } from '../domain'

export function* useArrowKeys(
  fn: (direction: Direction) => void,
): HookEffects<HooksManagerEnv & DomEnv & TimerEnv, Disposable> {
  const { document } = yield* get<DomEnv>()

  return yield* useEffectOnce(() => listenForArrowKeys(fn, document.body))
}

function listenForArrowKeys(fn: (direction: Direction) => void, element: HTMLElement): Disposable {
  return addEventListener('keydown', element, (ev) => {
    if (ev.key === 'ArrowUp') {
      return fn(Direction.Up)
    }

    if (ev.key === 'ArrowDown') {
      return fn(Direction.Down)
    }

    if (ev.key === 'ArrowLeft') {
      return fn(Direction.Left)
    }

    if (ev.key === 'ArrowRight') {
      return fn(Direction.Right)
    }
  })
}
