import { Disposable, dispose } from '@typed/disposable'
import { get } from '@typed/effects'
import { Fn, IO } from '@typed/lambda'
import { unwrap, withDefault } from '@typed/maybe'
import { HookEffects } from './HookEffects'
import { HookEnvironment } from './HookEnvironment'
import { useDepChange } from './useDepChange'
import { useTimer } from './useTimer'

const empty: [] = []

export function* useEffect<A extends readonly any[]>(
  fn: Fn<A, Disposable>,
  deps: A,
): HookEffects<never, Disposable> {
  const { useRef } = yield* get<HookEnvironment>()
  const [disposable, setDisposable] = yield* useRef<Disposable>()
  const depsChanged = yield* useDepChange(deps)
  const timer = yield* useTimer()

  if (depsChanged) {
    unwrap(dispose, disposable.current)
    setDisposable(timer.delay(() => fn(...deps), 0))
  }

  return withDefault(Disposable.None, disposable.current)
}

export function* useEffectOnce(fn: IO<Disposable>): HookEffects<never, Disposable> {
  return yield* useEffect(fn, empty)
}
