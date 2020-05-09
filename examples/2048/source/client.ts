import { createDomEnv } from '@typed/dom'
import { Capabilities, Fail, runEffects, TypeOf } from '@typed/effects'
import { createHookEnvironment, createHooksManagerEnv } from '@typed/hooks'
import { createPatchEnv, elementToVNode, PatchFailure, VNode } from '@typed/html'
import { patchOnRaf } from '@typed/render'
import { StorageEnv } from '@typed/storage'
import { createTimer } from '@typed/timer'
import { BrowserGenerator } from '@typed/uuid'
import { use2048 } from './application'
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

function* render<E>(repo: GridRepository<E>) {
  const [gameState, dispatch] = yield* use2048(repo)
  const vNode = yield* render2048(gameState, dispatch)

  return vNode
}

function* main<E>(repo: GridRepository<E>, rootElement: HTMLElement) {
  const rootVNode = yield* elementToVNode(rootElement)

  yield* patchOnRaf<E & Capabilities<TypeOf<typeof render>>, VNode, VNode>(
    () => render(repo),
    rootVNode,
  )
}

const gridRepo = createGridRepository(GRID_STORAGE_KEY)

runEffects(main<PatchFailure & StorageEnv>(gridRepo, rootElement as HTMLElement), {
  ...createPatchEnv(),
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
  [PatchFailure]: Fail,
})
