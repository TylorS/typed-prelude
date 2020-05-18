import { FiberFailure, Fork, Join, TimerEnv } from '@typed/effects'
import { LoggerEnv } from '@typed/logger'

export type TestEnv = LoggerEnv & TimerEnv & Fork & Join & FiberFailure & TestOptions

export type TestOptions = { readonly timeout: number }
