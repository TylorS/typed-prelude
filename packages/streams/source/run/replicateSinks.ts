import { disposeAll } from '@most/disposable'
import { Disposable, Scheduler } from '@most/types'
import { Subject } from 'most-subject'
import { Sinks } from './types'

export function replicateSinks<A extends Sinks>(
  sinks: A,
  sinkProxies: Record<keyof A, Subject<any, any>>,
  scheduler: Scheduler,
): Disposable {
  const sinkNames = Object.keys(sinks).filter((name) => !!sinkProxies[name])

  function replicateSink(name: keyof A): Disposable {
    return sinks[name].run(sinkProxies[name][0], scheduler)
  }

  function disposeSinkProxy(name: keyof A) {
    sinkProxies[name][0].end(scheduler.currentTime())
  }

  const disposable = disposeAll(sinkNames.map(replicateSink))

  function dispose() {
    disposable.dispose()
    Object.keys(sinkProxies).forEach(disposeSinkProxy)
  }

  return { dispose }
}
