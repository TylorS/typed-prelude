import { Disposable } from '@typed/disposable'
import { Effects, get, runEffects, runWith, TimerEnv } from '@typed/effects'
import {
  createChannel,
  HookEffects,
  HookEnvironment,
  HookEnvironmentEvent,
  HookEnvironmentEventType,
  HookEnvironmentRemovedEvent,
  HookEnvironmentUpdatedEvent,
  HooksManagerEnv,
  runWithHooks,
  useChannelValue,
} from '@typed/hooks'
import { fromJust, isJust, isNothing } from '@typed/maybe'
import { PatchEnv } from '@typed/render'
import { filter } from '@typed/subscription'
import { VNode } from './domain'
import { FifoQueue } from './FifoQueue'
import { requestIdleCallback } from './requestIdleCallback'

export const useHtmlChannel = () => useChannelValue(HtmlChannel)

export const HtmlChannel = createChannel(function* () {
  const { hooksManager, timer, patch } = yield* get<
    HooksManagerEnv & TimerEnv & PatchEnv<VNode, VNode, unknown>
  >()
  const { hookEvents } = hooksManager
  const removeEvents = filter(isRemoveEvent, hookEvents)
  const updateEvents = filter(isUpdateEvent, hookEvents)
  const needsUpdate = new FifoQueue<HookEnvironment>()
  const renderables = new Map<HookEnvironment['id'], VNode>()
  const renderers = new Map<HookEnvironment['id'], [() => HookEffects<any, VNode>, any]>()
  const currentlyUpdatingStatuses = new Map<HookEnvironment['id'], boolean>()
  const removeUpdated = () => needsUpdate.remove((e) => !e.updated)
  const disposable = Disposable.lazy()
  let scheduled = false

  disposable.addDisposable(
    removeEvents.subscribe(([, { id }]) => {
      needsUpdate.remove((q) => q.id === id)
      renderables.delete(id)
      renderers.delete(id)
      currentlyUpdatingStatuses.delete(id)

      return Disposable.None
    }),
  )

  disposable.addDisposable(
    updateEvents.subscribe(([, { hookEnvironment, updated }]) => {
      const { id } = hookEnvironment
      const canSkip =
        hooksManager.hasUpdatedParents(hookEnvironment) || needsUpdate.some((e) => e.id === id)
      const shouldEnqueue = updated && !canSkip

      if (shouldEnqueue) {
        needsUpdate.enqueue(hookEnvironment)
      }

      if (!scheduled) {
        return runEffects(scheduleNextRun(), { timer })
      }

      if (!updated) {
        removeUpdated()
      }

      return Disposable.None
    }),
  )

  function setRenderable(hookEnvironmentId: HookEnvironment['id'], vNode: VNode): void {
    renderables.set(hookEnvironmentId, vNode)
  }

  function getRenderable(hookEnvironmentId: HookEnvironment['id']): VNode {
    return renderables.get(hookEnvironmentId)!
  }

  function setRenderer<
    E,
    A extends VNode
  >(hookEnvironmentId: HookEnvironment['id'], renderer: [() => HookEffects<E, A>, E]) {
    renderers.set(hookEnvironmentId, renderer)
  }

  function getRenderer(hookEnvironmentId: HookEnvironment['id']) {
    return renderers.get(hookEnvironmentId)
  }

  function currentlyUpdating(hookEnvironmentId: HookEnvironment['id']): boolean {
    return currentlyUpdatingStatuses.get(hookEnvironmentId) ?? false
  }

  function* applyUpdate(hookEnvironment: HookEnvironment) {
    const { id, updated } = hookEnvironment
    const renderable = getRenderable(id)
    const renderer = getRenderer(id)

    if (!renderable || !renderer || !updated) {
      return
    }

    if (currentlyUpdating(id) && !needsUpdate.some((e) => e.id === hookEnvironment.id)) {
      needsUpdate.enqueue(hookEnvironment)

      return
    }

    currentlyUpdatingStatuses.set(id, true)

    const [render, env] = renderer

    const vNode = yield* runWith(runWithHooks(render(), hookEnvironment), env)

    setRenderable(id, yield* patch(renderable, vNode))

    currentlyUpdatingStatuses.set(id, false)
  }

  function* scheduleNextRun(): Effects<TimerEnv, void> {
    scheduled = true

    const deadline = yield* requestIdleCallback(1000)
    const timeRemaining = () => deadline.timeRemaining() > 0 || deadline.didTimeout

    while (timeRemaining()) {
      const next = needsUpdate.dequeue()

      if (isNothing(next)) {
        break
      }

      const hookEnvironment = fromJust(next)

      yield* applyUpdate(hookEnvironment)

      if (isNothing(needsUpdate.peek())) {
        break
      }
    }

    if (isJust(needsUpdate.peek())) {
      return yield* scheduleNextRun()
    }

    scheduled = false
  }

  return {
    setRenderable,
    getRenderable,
    setRenderer,
    currentlyUpdating,
    ...disposable,
  } as const
})

function isRemoveEvent(event: HookEnvironmentEvent): event is HookEnvironmentRemovedEvent {
  return event[0] === HookEnvironmentEventType.Removed
}

function isUpdateEvent(event: HookEnvironmentEvent): event is HookEnvironmentUpdatedEvent {
  return event[0] === HookEnvironmentEventType.Updated
}
