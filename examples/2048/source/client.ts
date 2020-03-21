import { createDomEnv } from '@typed/dom'
import { PureEffect, runEffects } from '@typed/effects'
import { Resume } from '@typed/env'
import {
  createHookEnvironment,
  createHooksManager,
  HookEffects,
  InitialState,
  TimerChannel,
  useChannel,
  withHooks,
} from '@typed/hooks'
import { createTimer } from '@typed/timer'
import { BrowserGenerator } from '@typed/uuid'
import { RequiredResources, use2048 } from './application'
import { GRID_STORAGE_KEY, ROOT_ELEMENT_SELECTOR } from './constants'
import { GridRepository, RenderEnv } from './domain'
import { patch } from './infrastructure/patch'
import { createGridRepository } from './infrastructure/StorageRandomIntGridRepository'
import { render2048 } from './ui/render2048'

const rootElement = document.querySelector(ROOT_ELEMENT_SELECTOR)

if (!rootElement) {
  throw new Error(`Unable to find root element ${ROOT_ELEMENT_SELECTOR}`)
}

const timer = createTimer()
const hooksManager = createHooksManager(new BrowserGenerator())
const hookEnvironment = createHookEnvironment(hooksManager)

const main = withHooks(function* main<E>(
  repo: GridRepository<E>,
): HookEffects<E & RequiredResources & RenderEnv, void> {
  yield* useChannel(TimerChannel, InitialState.of(timer))

  const [gameState, dispatch] = yield* use2048(repo)

  yield* patch(yield* render2048(gameState, dispatch))
},
false)

runEffects(runMainOnRaf(createGridRepository(GRID_STORAGE_KEY)), {
  hookEnvironment,
  storage: localStorage,
  floor: Math.floor,
  random: Math.random,
  ...createDomEnv(),
  rootElement,
  timer,
  ...new BrowserGenerator(),
})

function* runMainOnRaf<E>(
  repo: GridRepository<E>,
): HookEffects<E & RequiredResources & RenderEnv, void> {
  yield* main(repo)

  while (true) {
    yield* raf()

    if (hookEnvironment.updated) {
      yield* main(repo)
    }
  }
}

function* raf(): PureEffect<number> {
  return yield <C>(_: C) =>
    Resume.create<number>(cb => {
      const handle = requestAnimationFrame(cb)
      const dispose = () => cancelAnimationFrame(handle)

      return { dispose }
    })
}
