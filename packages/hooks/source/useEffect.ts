import { Disposable, dispose, disposeAll } from '@typed/disposable'
import { TimerEnv } from '@typed/effects'
import { Fn, IO } from '@typed/lambda'
import { unwrap, withDefault } from '@typed/maybe'
import { getHookEnv } from './getHookEnv'
import { ChannelEffects, HookEnv } from './types'
import { useDepChange } from './useDepChange'
import { useTimer } from './useTimer'

const empty: [] = []

export function* useEffect<A extends readonly any[]>(
  fn: Fn<A, Disposable>,
  deps: A,
): ChannelEffects<HookEnv & TimerEnv, Disposable> {
  return yield* __useEffect(fn, deps, true)
}

export function* useUpdateEffect<A extends readonly any[]>(
  fn: Fn<A, Disposable>,
  deps: A,
): ChannelEffects<HookEnv & TimerEnv, Disposable> {
  return yield* __useEffect(fn, deps, false)
}

export function* useEffectOnce(fn: IO<Disposable>): ChannelEffects<HookEnv & TimerEnv, Disposable> {
  return yield* useEffect(fn, empty)
}

function* __useEffect<A extends readonly any[]>(
  fn: Fn<A, Disposable>,
  deps: A,
  firstRun: boolean,
): ChannelEffects<HookEnv & TimerEnv, Disposable> {
  const { useRef, addDisposable } = yield* getHookEnv()
  const [disposable, setDisposable] = yield* useRef<any, Disposable>()
  const depsChanged = yield* useDepChange(deps, firstRun)
  const timer = yield* useTimer()

  if (depsChanged) {
    unwrap(dispose, disposable.current)

    const timerDisposable = timer.delay(() => fn(...deps), 0)

    setDisposable(disposeAll([addDisposable(timerDisposable), timerDisposable]))
  }

  return withDefault(Disposable.None, disposable.current)
}
