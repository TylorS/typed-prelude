import { Disposable } from '@typed/disposable'
import { get } from '@typed/effects'
import { Fn } from '@typed/lambda'
import { withDefault } from '@typed/maybe'
import { HookEnvironment } from './HookEnvironment'
import { useDepChange } from './useDepChange'
import { useTimer } from './useTimer'

export function* useEffect<A extends readonly any[]>(fn: Fn<A, Disposable>, deps: A) {
  const { useRef } = yield* get<HookEnvironment>()
  const [disposable, setDisposable] = yield* useRef<Disposable>()
  const depsChanged = yield* useDepChange(deps)
  const timer = yield* useTimer()

  if (depsChanged) {
    setDisposable(timer.delay(() => fn(...deps), 0))
  }

  return withDefault(Disposable.None, disposable.current)
}
