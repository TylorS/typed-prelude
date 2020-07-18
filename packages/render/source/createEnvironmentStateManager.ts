import { Disposable } from '@typed/disposable'
import { runEffects } from '@typed/effects'
import { HookEffects, HookEnvironment, HooksManager } from '@typed/hooks'
import { Timer } from '@typed/timer'
import { IdleScheduler } from './createIdleScheduler'
import { FifoQueue } from './FifoQueue'
import { RenderRef } from './RenderRef'

export type EnvId = HookEnvironment['id']
export type Renderer<E, A, B> = readonly [(ref: RenderRef<A>) => HookEffects<E, B>, E]

export type EnvironmentStateManagerOptions = {
  readonly queue: FifoQueue<HookEnvironment>
  readonly hooksManager: HooksManager
  readonly scheduler: IdleScheduler
  readonly timer: Timer
}

export function createEnvironmentStateManager<A, B>({
  queue,
  hooksManager,
  scheduler,
  timer,
}: EnvironmentStateManagerOptions) {
  const renderables = new Map<EnvId, B>()
  const rendereds = new Map<EnvId, RenderRef<A>>()
  const renderers = new Map<EnvId, Renderer<any, A, B>>()
  const currentlyUpdatingStatuses = new Map<EnvId, boolean>()

  const removeUpdated = () => queue.remove((e) => !e.updated)

  function removeEnvById(id: EnvId): Disposable {
    queue.remove((q) => q.id === id)
    renderables.delete(id)
    renderers.delete(id)
    currentlyUpdatingStatuses.delete(id)

    return Disposable.None
  }

  function updateEnv(hookEnvironment: HookEnvironment, updated: boolean): Disposable {
    const { id } = hookEnvironment
    const canSkip =
      hooksManager.hasUpdatedParents(hookEnvironment) || queue.some((e) => e.id === id)
    const shouldEnqueue = updated && !canSkip

    if (shouldEnqueue) {
      queue.enqueue(hookEnvironment)
    }

    if (!scheduler.scheduled) {
      return runEffects(scheduler.scheduleNextRun(), { timer })
    }

    if (!updated) {
      removeUpdated()
    }

    return Disposable.None
  }

  function setRenderable(id: EnvId, vNode: B): void {
    renderables.set(id, vNode)
  }

  function getRenderable(id: EnvId): B {
    return renderables.get(id)!
  }

  function setRendered(id: EnvId, vNode: RenderRef<A>): void {
    rendereds.set(id, vNode)
  }

  function getRendered(id: EnvId): RenderRef<A> {
    return rendereds.get(id)!
  }

  function setRenderer<E>(id: EnvId, renderer: Renderer<E, A, B>) {
    renderers.set(id, renderer)
  }

  function getRenderer(hookEnvironmentId: EnvId): Renderer<any, A, B> | undefined {
    return renderers.get(hookEnvironmentId)
  }

  function currentlyUpdating(id: EnvId): boolean {
    return currentlyUpdatingStatuses.get(id) ?? false
  }

  function setUpdating(id: EnvId, updating: boolean) {
    currentlyUpdatingStatuses.set(id, updating)
  }

  return {
    updateEnv,
    removeEnvById,
    setRenderable,
    getRenderable,
    setRenderer,
    getRenderer,
    setRendered,
    getRendered,
    currentlyUpdating,
    setUpdating,
  } as const
}
