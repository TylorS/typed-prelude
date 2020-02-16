import { Disposable, dispose, disposeAll } from '@typed/disposable'
import { Fn, IO } from '@typed/lambda'
import { unwrap, withDefault } from '@typed/maybe'
import { HookEffects } from './HookEffects'
import { useDepChange } from './useDepChange'
import { useTimer } from './useTimer'

const empty: [] = []

export function* useEffect<A extends readonly any[]>(
  fn: Fn<A, Disposable>,
  deps: A,
): HookEffects<never, Disposable> {
  const { useRef, addDisposable } = yield* getHookEnv()
  const [disposable, setDisposable] = yield* useRef<Disposable>()
  const depsChanged = yield* useDepChange(deps)
  const timer = yield* useTimer()

  if (depsChanged) {
    unwrap(dispose, disposable.current)

    const timerDisposable = timer.delay(() => fn(...deps), 0)

    setDisposable(disposeAll([addDisposable(timerDisposable), timerDisposable]))
  }

  return withDefault(Disposable.None, disposable.current)
}

export function* useEffectOnce(fn: IO<Disposable>): HookEffects<never, Disposable> {
  return yield* useEffect(fn, empty)
}
