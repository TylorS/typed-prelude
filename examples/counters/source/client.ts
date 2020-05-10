import { createDomEnv } from '@typed/dom'
import { runEffects, TimerEnv } from '@typed/effects'
import {
  createHookEnvironment,
  createHooksManagerEnv,
  HookEffects,
  HooksManagerEnv,
  InitialState,
  useState,
} from '@typed/hooks'
import { createPatchEnv, html, patchOnRaf, text, useListManager, VNode } from '@typed/html'
import { range } from '@typed/list'
import { decrement, increment } from '@typed/math'
import { PatchEnv } from '@typed/render'
import { createTimer } from '@typed/timer'
import { BrowserGenerator } from '@typed/uuid'
import { ROOT_ELEMENT_SELECTOR } from './constants'
import { Counter } from './Counter'

const rootElement = document.querySelector(ROOT_ELEMENT_SELECTOR) as HTMLElement | null

if (!rootElement) {
  throw new Error(`Unable to find root element ${ROOT_ELEMENT_SELECTOR}`)
}

const timer = createTimer()
const hooksManagerEnv = createHooksManagerEnv(new BrowserGenerator())
const hookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)

function* main(): HookEffects<TimerEnv & HooksManagerEnv & PatchEnv<VNode, VNode>, VNode> {
  const [getCounters, updateCounters] = yield* useState(InitialState.of(0))
  const children = yield* useListManager(range(0, yield* getCounters()), String, Counter)

  return html('div', null, [
    html(
      'button',
      {
        on: {
          click: () => updateCounters(increment),
        },
      },
      [text('add counter')],
    ),
    html(
      'button',
      {
        on: {
          click: () => updateCounters(decrement),
        },
      },
      [text('remove counter')],
    ),
    ...children,
  ])
}

runEffects(patchOnRaf(main, rootElement), {
  ...createDomEnv(),
  ...createPatchEnv(),
  ...hooksManagerEnv,
  hookEnvironment,
  cancelAnimationFrame,
  requestAnimationFrame,
  timer,
})
