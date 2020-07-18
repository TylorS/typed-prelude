import { Disposable } from '@typed/disposable'
import { runEffects } from '@typed/effects'
import { HookEffects, HookEnvironment, HooksManager } from '@typed/hooks'
import { Timer } from '@typed/timer'
import { IdleScheduler } from './createIdleScheduler'
import { VNode } from './domain'
import { FifoQueue } from './FifoQueue'

export type EnvId = HookEnvironment['id']
export type Renderer<E> = readonly [() => HookEffects<E, VNode>, E]

export type EnvironmentStateManagerOptions = {
  readonly queue: FifoQueue<HookEnvironment>
  readonly hooksManager: HooksManager
  readonly scheduler: IdleScheduler
  readonly timer: Timer
}

export function createEnvironmentStateManager({
  queue,
  hooksManager,
  scheduler,
  timer,
}: EnvironmentStateManagerOptions) {
  const renderables = new Map<EnvId, VNode>()
  const renderers = new Map<EnvId, Renderer<any>>()
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

  function setRenderable(id: EnvId, vNode: VNode): void {
    renderables.set(id, vNode)
  }

  function getRenderable(id: EnvId): VNode {
    return renderables.get(id)!
  }

  function setRenderer<E>(id: EnvId, renderer: Renderer<E>) {
    renderers.set(id, renderer)
  }

  function getRenderer(hookEnvironmentId: EnvId) {
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
    currentlyUpdating,
    setUpdating,
  } as const
}
