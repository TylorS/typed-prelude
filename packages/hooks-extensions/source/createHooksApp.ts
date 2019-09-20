import { createDomEnv, CreateDomEnvOptions } from '@typed/dom'
import { createManager, HooksManager } from '@typed/hooks'
import { createHttpEnv, createTestHttpEnv, WithHttpManagementOptions } from '@typed/http'
import { ArgsOf, Fn } from '@typed/lambda'
import { createConsoleLogger, createTestLogger, LogLevel } from '@typed/logger'

import { createVirtualTimer } from '@typed/timer'
import {
  DomEnvChannel,
  HistoryEnvChannel,
  HooksManagerChannel,
  HttpEnvChannel,
  LoggerChannel,
  StorageChannel,
  TimerChannel,
} from './channels'

export type CreateHooksAppOptions = {
  readonly dom?: CreateDomEnvOptions
  readonly http?: WithHttpManagementOptions
  readonly logLevel?: LogLevel
}

export function createHooksApp<A extends readonly any[], B, HistoryState = unknown>(
  main: Fn<A, B>,
  manager: HooksManager,
  options: CreateHooksAppOptions = {},
) {
  const { withHooks } = manager
  const domEnv = createDomEnv<HistoryState>(options.dom)
  const httpEnv = createHttpEnv(options.http)
  const logger = createConsoleLogger({
    logLevel: options.logLevel || LogLevel.DEFAULT,
    clock: manager.defaultTimer,
  })

  const app = withHooks(main)

  const { channelValues } = app.context

  channelValues.set(HooksManagerChannel, manager)
  channelValues.set(DomEnvChannel, domEnv)
  channelValues.set(HistoryEnvChannel, { history: domEnv.history, location: domEnv.location })
  channelValues.set(HttpEnvChannel, httpEnv)
  channelValues.set(LoggerChannel, logger)
  channelValues.set(StorageChannel, domEnv.localStorage)
  channelValues.set(TimerChannel, manager.defaultTimer)

  return app
}

export type CreateTestHooksAppOptions = {
  readonly http: ArgsOf<typeof createTestHttpEnv>[0]
  readonly dom?: CreateDomEnvOptions
}

export function createTestHooksApp<A extends readonly any[], B, HistoryState = unknown>(
  main: Fn<A, B>,
  options: CreateTestHooksAppOptions,
) {
  const timer = createVirtualTimer()
  const manager = createManager(timer)
  const { withHooks } = manager
  const domEnv = createDomEnv<HistoryState>(options.dom)
  const httpEnv = createTestHttpEnv(options.http, timer)
  const logger = createTestLogger({
    logLevel: LogLevel.DEFAULT,
    clock: timer,
  })

  const app = withHooks(main)

  const { channelValues } = app.context

  channelValues.set(HooksManagerChannel, manager)
  channelValues.set(DomEnvChannel, domEnv)
  channelValues.set(HistoryEnvChannel, { history: domEnv.history, location: domEnv.location })
  channelValues.set(HttpEnvChannel, httpEnv)
  channelValues.set(LoggerChannel, logger)
  channelValues.set(StorageChannel, domEnv.localStorage)
  channelValues.set(TimerChannel, timer)

  return [app, timer]
}
