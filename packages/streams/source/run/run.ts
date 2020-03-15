import { Effect, op, resumeLater } from '@typed/effects'
import { create, Subject } from 'most-subject'
import { createProxySinks } from './createProxySinks'
import { disposeSources } from './disposeSources'
import { replicateSinks } from './replicateSinks'
import { Component, IOComponent, Run, SchedulerEnv, Sinks, Sources } from './types'

export const run = <A extends Sources, B extends Sinks>(
  main: Component<A, B>,
  io: IOComponent<B, A>,
): Effect<SchedulerEnv, Run<A, B>> =>
  op(({ scheduler }) =>
    resumeLater(cb => {
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

      cb([sources, sinks])

      return dispose
    }),
  )
