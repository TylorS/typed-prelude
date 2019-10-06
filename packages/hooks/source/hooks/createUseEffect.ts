import { Disposable } from '@typed/disposable'
import { Fn } from '@typed/lambda'
import { equals } from '@typed/logic'
import { Timer } from '@typed/timer'
import { CreateHookContext, Hook } from '../types'
import { empty } from './common'

export type UseEffectOptions<A extends readonly any[] = readonly any[]> = {
  readonly args?: A
  readonly timer?: Timer
  readonly delayMs?: number
}

const defaultDelay = 0
const defaultOptions = (timer: Timer): UseEffectOptions<any> => ({
  args: empty,
  delayMs: defaultDelay,
  timer,
})

export const createUseEffect = <A extends readonly any[]>(
  { timer }: CreateHookContext,
  fn: Fn<A, Disposable>,
  options: UseEffectOptions<A> = defaultOptions(timer),
) => new UseEffect(timer, fn, options)

export class UseEffect<A extends readonly any[]>
  implements Hook<[Fn<A, Disposable>, UseEffectOptions<A>?], Disposable> {
  private firstRun: boolean = true
  private disposable: Disposable = Disposable.None
  private returnDisposable: Disposable = Disposable.lazy(() => this.disposable)

  constructor(
    private timer: Timer,
    private fn: Fn<A, Disposable>,
    private options: UseEffectOptions<A>,
  ) {}

  public update = (
    fn: Fn<A, Disposable>,
    options: UseEffectOptions<A> = defaultOptions(this.timer),
  ): Disposable => {
    if (this.hasUpdated(fn, options)) {
      this.runEffect()
    }

    return this.returnDisposable
  }

  public dispose = () => {
    this.disposable.dispose()
  }

  private runEffect = () => {
    const { fn, options } = this
    const { args: deps = empty as A, delayMs = 0, timer = this.timer } = options

    this.dispose()
    this.disposable = timer.delay(() => (this.disposable = fn(...deps)), delayMs)
  }

  private hasUpdated = (fn: Fn<A, Disposable>, options: UseEffectOptions<A>) => {
    if (this.firstRun) {
      this.firstRun = false

      return true
    }

    const { args = empty as A, delayMs = defaultDelay, timer = this.timer } = options

    const changed =
      !equals(this.timer, timer) ||
      !equals(this.options.delayMs || defaultDelay, delayMs) ||
      !equals(this.options.args || empty, args)

    if (changed) {
      this.fn = fn
      this.options = options
    }

    return changed
  }
}
