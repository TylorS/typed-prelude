import { Disposable } from '@typed/disposable'
import { Arity1, IO } from '@typed/lambda'

export interface Clock {
  readonly currentTime: IO<number>
}

export interface VirtualClock extends Clock {
  readonly timePast: (delayMS: number) => void
}

export interface Timer extends Clock {
  readonly delay: (fn: Arity1<number>, delayMs: number) => Disposable
}

export interface VirtualTimer extends Timer {
  readonly timePast: (delayMS: number) => void
}
