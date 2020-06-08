import { FiberFailure, Fork, Join, TimerEnv } from '@typed/effects'
import { LoggerEnv } from '@typed/logger'
import { AssertionEnv } from './assertions'
import { TestOptions } from './TestOptions'

export type TestEnv = LoggerEnv & TimerEnv & Fork & Join & FiberFailure & TestOptions & AssertionEnv
