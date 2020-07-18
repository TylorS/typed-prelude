import { createServerDomEnv } from '@typed/dom'

const { document } = createServerDomEnv({ setGlobals: true })

import { Effect, runEffects } from '@typed/effects'
import {
  createHookEnvironment,
  createHooksManagerEnv,
  InitialState,
  useEffectOnce,
  UseRef,
  useState,
} from '@typed/hooks'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from '@typed/timer'
import { NodeGenerator } from '@typed/uuid'
import { html, render, Renderable } from 'lighterhtml'
import * as mostlyDom from 'mostly-dom'
import { PatchEnv } from './Patch'
import { RenderRef } from './RenderRef'
import { useKeyManager } from './useKeyManager'

export const test = describe(`useKeyManager`, [
  given(`a key and an HookEffect-returning function that can be patched`, [
    it(`creates a HookEnvironment to run the effect in isolation`, ({ equal }, done) => {
      const key = { whatever: 42 }
      const timer = createVirtualTimer()
      const hooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const rootHookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)
      const initial = 0

      const patch: PatchEnv<number, number> = {
        patch: (previous, current) => {
          try {
            equal(initial, previous)
            equal(initial + 2, current)

            done()
          } catch (error) {
            done(error)
          }

          return Effect.of(previous + current)
        },
      }

      function* sut() {
        const [getState, updateState] = yield* useState(InitialState.of(initial))
        const value = yield* getState()

        yield* useEffectOnce(() => runEffects(updateState((x) => x + 1)))

        return value + 1
      }

      function* test() {
        // Only runs once
        equal(initial + 1, yield* useKeyManager(key, sut, initial))

        timer.progressTimeBy(1)
      }

      runEffects(test(), {
        ...hooksManagerEnv,
        ...patch,
        hookEnvironment: rootHookEnvironment,
        timer,
      })

      // Give the useEffect*s time to run
      timer.progressTimeBy(1)
    }),
  ]),

  describe(`lighterhtml`, [
    it(`works to patch "components" individually using UseRef`, ({ equal }) => {
      const key = { whatever: 42 }
      const timer = createVirtualTimer()
      const hooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const rootHookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)
      const tagName = 'main'
      const patch: PatchEnv<Element, Renderable> = {
        patch: (previous, current) => Effect.of(render(previous, current)),
      }

      function* sut({ setRef }: RenderRef<Element>) {
        const [getState, updateState] = yield* useState(InitialState.of(0))
        const value = yield* getState()

        yield* useEffectOnce(() => runEffects(updateState((x) => x + 1)))

        return html`
          <main
            ref=${(el: Element) => {
              equal(tagName, el.tagName)

              setRef(el)
            }}
          >
            ${value}
            <main></main>
          </main>
        `
      }

      function* test() {
        yield* useKeyManager(key, sut, document.createElement(tagName))

        timer.progressTimeBy(1)
      }

      runEffects(test(), {
        ...hooksManagerEnv,
        ...patch,
        hookEnvironment: rootHookEnvironment,
        timer,
      })

      // Give the useEffect*s time to run
      timer.progressTimeBy(1)
    }),
  ]),

  describe(`mostly-dom`, [
    it(`works to patch "components" individually using UseRef`, ({ equal }) => {
      const key = { whatever: 42 }
      const timer = createVirtualTimer()
      const hooksManagerEnv = createHooksManagerEnv(new NodeGenerator())
      const rootHookEnvironment = createHookEnvironment(hooksManagerEnv.hooksManager)
      const tagName = 'main'

      const patchVNode = mostlyDom.init()
      let patched = 0
      const patch: PatchEnv<mostlyDom.ElementVNode, mostlyDom.VNode> = {
        patch: (previous, current) => {
          patched++

          return Effect.of(patchVNode(previous, current))
        },
      }

      function* sut({ setRef }: RenderRef<mostlyDom.ElementVNode>) {
        const [getState, updateState] = yield* useState(InitialState.of(0))

        yield* useEffectOnce(() => runEffects(updateState((x) => x + 1)))

        return mostlyDom.h(
          tagName,
          {
            create: setRef,
            remove: (_, remove) => {
              setRef()
              remove()
            },
          },
          [String(yield* getState())],
        )
      }

      function* test() {
        const rootElement = document.createElement(tagName)

        yield* useKeyManager(key, sut, mostlyDom.elementToVNode(rootElement))

        timer.progressTimeBy(1)
      }

      runEffects(test(), {
        ...hooksManagerEnv,
        ...patch,
        hookEnvironment: rootHookEnvironment,
        timer,
      })

      // Give the useEffect*s time to run
      timer.progressTimeBy(1)

      equal(1, patched)
    }),
  ]),
])
