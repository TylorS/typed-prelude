import { Disposable } from '@typed/disposable'
import { addEventListener, DomEnv } from '@typed/dom'
import { Effects, get, runEffects, TimerEnv } from '@typed/effects'
import { HookEffects, HooksManagerEnv, useEffectOnce } from '@typed/hooks'
import { Direction } from '../domain'

export function* useArrowKeys<E>(
  fn: (direction: Direction) => Effects<E, void>,
): HookEffects<E & HooksManagerEnv & DomEnv & TimerEnv, Disposable> {
  const env = yield* get()

  return yield* useEffectOnce(() => listenForArrowKeys(fn, env.document.body, env))
}

function listenForArrowKeys<E>(
  fn: (direction: Direction) => Effects<E, void>,
  element: HTMLElement,
  env: E,
): Disposable {
  return addEventListener('keydown', element, (ev) => {
    if (ev.key === 'ArrowUp') {
      return runEffects(fn(Direction.Up), env)
    }

    if (ev.key === 'ArrowDown') {
      return runEffects(fn(Direction.Down), env)
    }

    if (ev.key === 'ArrowLeft') {
      return runEffects(fn(Direction.Left), env)
    }

    if (ev.key === 'ArrowRight') {
      return runEffects(fn(Direction.Right), env)
    }
  })
}
