import { createServerDomEnv } from '@typed/dom'

const { document } = createServerDomEnv({ setGlobals: true })

import { runEffects } from '@typed/effects'
import { Resume } from '@typed/env'
import {
  createHookEnvironment,
  createHooksManagerEnv,
  InitialState,
  useEffectOnce,
  UseRef,
  useState,
} from '@typed/hooks'
import { Just } from '@typed/maybe'
import { describe, given, it } from '@typed/test'
import { createVirtualTimer } from '@typed/timer'
import { NodeGenerator } from '@typed/uuid'
import { html, render, Renderable } from 'lighterhtml'
import * as mostlyDom from 'mostly-dom'
import { PatchEnv } from './Patch'
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
            equal(initial + 1, current)

            done()
          } catch (error) {
            done(error)
          }

          return Resume.of(previous + current)
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
        equal(Just.of(initial + 1), yield* useKeyManager(key, sut, initial))
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
        patch: (previous, current) => Resume.of(render(previous, current)),
      }

      function* sut([, setRef]: UseRef<Element>) {
        const [getState, updateState] = yield* useState(InitialState.of(0))
        const value = yield* getState()

        yield* useEffectOnce(() => runEffects(updateState((x) => x + 1)))

        return html`
          <main
            ref=${(el) => {
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

          return Resume.of(patchVNode(previous, current))
        },
      }

      function* sut([, setRef]: UseRef<mostlyDom.ElementVNode>) {
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
      }

      runEffects(test(), {
        ...hooksManagerEnv,
        ...patch,
        hookEnvironment: rootHookEnvironment,
        timer,
      })

      // Give the useEffect*s time to run
      timer.progressTimeBy(1)

      equal(2, patched)
    }),
  ]),
])
