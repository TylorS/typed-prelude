import { Stream } from '@most/types'
import { get } from '@typed/effects'
import { ChannelEffects, HookEnv, useMemo } from '@typed/hooks'
import {
  createStreamChannel,
  SchedulerEnv,
  StreamChannel,
  useStreamChannel,
  useStreamChannelSink,
} from '@typed/streams'
import { TestMessage } from '../domain'
import { ApplicationEvent } from './events'

// Domain-level events
export interface TestEventChannel extends StreamChannel<unknown, TestMessage, TestMessage> {}

export const TestEventChannel: TestEventChannel = createStreamChannel()

export const useTestEventStream = (): ChannelEffects<HookEnv, Stream<TestMessage>> =>
  useStreamChannel(TestEventChannel)

export function* useSendTestEvent() {
  const { scheduler } = yield* get<SchedulerEnv>()
  const sink = yield* useStreamChannelSink(TestEventChannel)
  const sendTestEvent = yield* useMemo(
    (_) => (event: TestMessage) => sink.event(scheduler.currentTime(), event),
    [sink, scheduler],
  )

  return sendTestEvent
}

// Application-level events
export interface ApplicationEventChannel
  extends StreamChannel<unknown, ApplicationEvent, ApplicationEvent> {}

export const ApplicationEventChannel: ApplicationEventChannel = createStreamChannel()

export const useApplicationEventStream = (): ChannelEffects<HookEnv, Stream<ApplicationEvent>> =>
  useStreamChannel(ApplicationEventChannel)

export function* useSendApplicationEvent() {
  const { scheduler } = yield* get<SchedulerEnv>()
  const sink = yield* useStreamChannelSink(ApplicationEventChannel)
  const sendApplicationEvent = yield* useMemo(
    (_) => (event: ApplicationEvent) => sink.event(scheduler.currentTime(), event),
    [sink, scheduler],
  )

  return sendApplicationEvent
}
