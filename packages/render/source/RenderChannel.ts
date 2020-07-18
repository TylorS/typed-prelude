import { Disposable, LazyDisposable } from '@typed/disposable'
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
import { fromJust, isJust, isNothing, Just } from '@typed/maybe'
import { filter } from '@typed/subscription'
import { FifoQueue } from './FifoQueue'
import { PatchEnv } from './Patch'
import { RenderRef } from './RenderRef'
import { requestIdleCallback } from './requestIdleCallback'

type EnvId = HookEnvironment['id']

export interface RenderState<A, B> extends LazyDisposable {
  readonly setRenderable: (id: EnvId, renderable: B) => void
  readonly getRenderable: (id: EnvId) => B
  readonly setRenderer: (
    id: EnvId,
    renderer: [(ref: RenderRef<A>) => HookEffects<any, B>, any],
  ) => void
  readonly setRendered: (id: EnvId, rendered: RenderRef<A>) => void
  readonly currentlyUpdating: (id: EnvId) => boolean
}

export const useRenderChannel = <A, B>() =>
  useChannelValue(RenderChannel) as HookEffects<
    HooksManagerEnv & TimerEnv & PatchEnv<A, B, unknown>,
    RenderState<A, B>
  >

export const RenderChannel = createChannel(function* <A, B>() {
  const { hooksManager, timer, patch } = yield* get<
    HooksManagerEnv & TimerEnv & PatchEnv<A, B, unknown>
  >()
  const { hookEvents } = hooksManager
  const removeEvents = filter(isRemoveEvent, hookEvents)
  const updateEvents = filter(isUpdateEvent, hookEvents)
  const needsUpdate = new FifoQueue<HookEnvironment>()
  const renderables = new Map<HookEnvironment['id'], B>()
  const rendereds = new Map<HookEnvironment['id'], RenderRef<A>>()
  const renderers = new Map<
    HookEnvironment['id'],
    [(ref: RenderRef<A>) => HookEffects<any, B>, any]
  >()
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

  function setRenderable(hookEnvironmentId: HookEnvironment['id'], vNode: B): void {
    renderables.set(hookEnvironmentId, vNode)
  }

  function getRenderable(hookEnvironmentId: HookEnvironment['id']): unknown {
    return renderables.get(hookEnvironmentId)!
  }

  function setRendered(hookEnvironmentId: HookEnvironment['id'], ref: RenderRef<A>): void {
    rendereds.set(hookEnvironmentId, ref)
  }

  function getRendered(hookEnvironmentId: HookEnvironment['id']): RenderRef<A> {
    return rendereds.get(hookEnvironmentId)!
  }

  function setRenderer<
    E
  >(hookEnvironmentId: HookEnvironment['id'], renderer: [() => HookEffects<E, B>, E]) {
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
    const rendered = getRendered(id)
    const renderer = getRenderer(id)
    const shouldRequeue =
      currentlyUpdating(id) && !needsUpdate.some((e) => e.id === hookEnvironment.id)

    if (!rendered || isNothing(rendered.ref.current) || !renderer || !updated) {
      return
    }

    if (shouldRequeue) {
      needsUpdate.enqueue(hookEnvironment)

      return
    }

    currentlyUpdatingStatuses.set(id, true)

    const [render, env] = renderer

    const b = yield* runWith(runWithHooks(render(rendered), hookEnvironment), env)
    const a = yield* patch(fromJust(rendered.ref.current as Just<A>), b)

    setRenderable(id, b)
    rendered.setRef(a)

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
    setRendered,
    ...disposable,
  } as const
})

function isRemoveEvent(event: HookEnvironmentEvent): event is HookEnvironmentRemovedEvent {
  return event[0] === HookEnvironmentEventType.Removed
}

function isUpdateEvent(event: HookEnvironmentEvent): event is HookEnvironmentUpdatedEvent {
  return event[0] === HookEnvironmentEventType.Updated
}
