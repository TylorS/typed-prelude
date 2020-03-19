import { Disposable } from '@typed/disposable'
import { Either, Left, Right } from '@typed/either'
import { Resume } from '@typed/env'
import { Effects } from './Effect'
import { Fail } from './Failure'
import { Fiber, FiberState } from './Fiber'

export type Join = { readonly join: <A>(fiber: Fiber<A>) => Resume<Either<Error, A>> }

export const Join: Join = {
  join<A>(fiber: Fiber<A>): Resume<Either<Error, A>> {
    const { info } = fiber

    if (info.state === FiberState.Returned) {
      return Resume.of(Either.of(info.value))
    }

    if (info.state === FiberState.Error) {
      return Resume.of(Left.of<Error>(new Error(`Fiber is in errored state: ${info.error}`)))
    }

    return Resume.create(cb => {
      const disposable = Disposable.lazy()

      fiber.addDisposable(disposable)

      info.promise.then(
        value => disposable.addDisposable(cb(Right.of(value))),
        error => disposable.addDisposable(cb(Left.of(error))),
      )

      return disposable
    })
  },
}

export function* join<A>(f: Fiber<A>): Effects<Join & Fail<Error>, Either<Error, A>> {
  return yield (c: Join & Fail<Error>) => c.join(f)
}
