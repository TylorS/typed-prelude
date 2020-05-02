import { createDomEnv } from '@typed/dom'
import { Effect, runEffects } from '@typed/effects'
import { createHookEnvironment, createHooksManagerEnv, HookEffects } from '@typed/hooks'
import { patchOnRaf } from '@typed/render'
import { createTimer } from '@typed/timer'
import { BrowserGenerator } from '@typed/uuid'
import { render as renderLighterHtml, Renderable } from 'lighterhtml'
import { RequiredResources, use2048 } from './application'
import { GRID_STORAGE_KEY, ROOT_ELEMENT_SELECTOR } from './constants'
import { GridRepository } from './domain'
import { createGridRepository } from './infrastructure/StorageGridRepository'
import { render2048 } from './ui/render2048'

const rootElement = document.querySelector(ROOT_ELEMENT_SELECTOR)

if (!rootElement) {
  throw new Error(`Unable to find root element ${ROOT_ELEMENT_SELECTOR}`)
}

const timer = createTimer()
const hooksManagerEnv = createHooksManagerEnv(new BrowserGenerator())
const hookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)

function* main<E>(repo: GridRepository<E>): HookEffects<E & RequiredResources, Renderable> {
  const [gameState, dispatch] = yield* use2048(repo)

  return yield* render2048(gameState, dispatch)
}

const gridRepo = createGridRepository(GRID_STORAGE_KEY)

runEffects(
  patchOnRaf(() => main(gridRepo), rootElement),
  {
    patch: (rootElement: Element, renderable: Renderable) =>
      Effect.of(renderLighterHtml(rootElement, renderable)),
    ...hooksManagerEnv,
    hookEnvironment,
    storage: localStorage,
    floor: Math.floor,
    random: Math.random,
    cancelAnimationFrame,
    requestAnimationFrame,
    timer,
    ...createDomEnv(),
    ...new BrowserGenerator(),
  },
)
