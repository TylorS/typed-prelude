import { Disposable } from '@typed/disposable'
import { IO } from '@typed/lambda'

export interface Clock {
  readonly currentTime: IO<number>
}

export interface VirtualClock extends Clock {
  readonly timePast: (delayMS: number) => void
}

export interface Timer extends Clock {
  readonly delay: (fn: IO, delayMs: number) => Disposable
}

export interface VirtualTimer extends Timer {
  readonly timePast: (delayMS: number) => void
}
