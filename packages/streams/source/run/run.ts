import { Disposable } from '@most/types'
import { Effect } from '@typed/effects'
import { Resume } from '@typed/env'
import { Arity1 } from '@typed/lambda'
import { create, Subject } from 'most-subject'
import { disposeAll } from '../../../disposable/esm'
import { createProxySinks } from './createProxySinks'
import { disposeSources } from './disposeSources'
import { replicateSinks } from './replicateSinks'
import { Component, IOComponent, Run, SchedulerEnv, Sinks, Sources } from './types'

export function* run<A extends Sources, B extends Sinks>(
  main: Component<A, B>,
  io: IOComponent<B, A>,
): Effect<SchedulerEnv, Run<A, B>> {
  return yield ({ scheduler }: SchedulerEnv) =>
    Resume.create((cb: Arity1<Run<A, B>, Disposable>) => {
      const sinkProxies = {} as Record<keyof A, Subject<any, any>>
      const [endSink, endSignal] = create()
      const [sources, disposable] = io(createProxySinks(sinkProxies, endSignal))
      const sinks = main(sources)
      const replicationDisposable = replicateSinks<B>(sinks, sinkProxies, scheduler)
      const dispose = () => {
        endSink.event(scheduler.currentTime(), void 0)
        disposable.dispose()
        replicationDisposable.dispose()
        disposeSources(sources)
      }

      return disposeAll([cb([sources, sinks]), { dispose }])
    })
}
