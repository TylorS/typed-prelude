import { Disposable, Task } from '@most/types'
import { Arity2 } from '../lambda'

export function callbackTask<A, B = void>(f: Arity2<A, number, B>, value: A): Task {
  return new CallbackTask(f, value)
}

class CallbackTask<A, B = void> implements Task {
  private disposable: Disposable | undefined
  constructor(private f: Arity2<A, number, B>, private value: A) {}

  public run(time: number) {
    try {
      const { f, value } = this
      const x = f(value, time)

      if (isDisposable(x)) {
        this.disposable = x
      }
    } catch (e) {
      console.error(e)

      throw e
    }
  }

  public error(time: number) {
    this.dispose()

    throw new Error(`Unable to complete task. Time: ${time}`)
  }

  public dispose() {
    if (this.disposable) {
      this.disposable.dispose()
      this.disposable = undefined
    }
  }
}

function isDisposable(x: any): x is Disposable {
  return !!x && !!x.dispose && typeof x.dispose === 'function' && x.dispose.length === 0
}
