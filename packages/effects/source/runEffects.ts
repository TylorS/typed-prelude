import { Disposable } from '@typed/disposable'
import { unsafeRun, use } from 'fx-ts'
import { Effect, PureEffect } from './Effect'

export function runEffects<A>(effect: PureEffect<A>): Disposable
export function runEffects<E, A>(effect: Effect<E, A>, environment: E): Disposable

export function runEffects<E, A>(effect: Effect<E, A>, environment: E = {} as E): Disposable {
  return { dispose: unsafeRun(use(effect, environment) as PureEffect<A>) }
}

export function toPromise<E, A>(
  effect: Effect<E, A>,
  environment: E,
): readonly [Promise<A>, Disposable] {
  const pure = use(effect, environment) as PureEffect<A>
  const disposable = Disposable.lazy()
  const promise = new Promise<A>((resolve, reject) => {
    try {
      disposable.addDisposable({ dispose: unsafeRun(pure, resolve) })
    } catch (error) {
      reject(error)
    }
  })

  return [promise, disposable] as const
}

export function asPromise<E, A>(effect: Effect<E, A>, environment: E): Promise<A> {
  return toPromise(effect, environment)[0]
}
