import { Disposable, withIsDisposed } from '@typed/disposable'
import { Future } from '@typed/future'

export function futurify<R>(fn: (cb: NodeCallback<R>) => void): () => Future<never, Error, R>

export function futurify<A, R>(
  fn: (a: A, cb: NodeCallback<R>) => void,
): (a: A) => Future<never, Error, R>

export function futurify<A, B, R>(
  fn: (a: A, b: B, cb: NodeCallback<R>) => void,
): (a: A, b: B) => Future<never, Error, R>

export function futurify<A, B, C, R>(
  fn: (a: A, b: B, c: C, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C) => Future<never, Error, R>

export function futurify<A, B, C, D, R>(
  fn: (a: A, b: B, c: C, d: D, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C, d: D) => Future<never, Error, R>

export function futurify<A, B, C, D, E, R>(
  fn: (a: A, b: B, c: C, d: D, e: E, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C, d: D, e: E) => Future<never, Error, R>

export function futurify<A, B, C, D, E, F, R>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C, d: D, e: E, f: F) => Future<never, Error, R>

export function futurify<A, B, C, D, E, F, G, R>(
  fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, cb: NodeCallback<R>) => void,
): (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => Future<never, Error, R>

export function futurify<A extends NodeCallbackFn>(fn: A) {
  return (...args: any[]): Future<never, Error, any> => {
    return Future.create<never, Error, any>((reject, resolve) => {
      const disposable = Disposable.lazy()

      disposable.addDisposable(
        withIsDisposed((isDisposed) => {
          args.push((err: Error | null | undefined, value?: any) => {
            if (isDisposed()) {
              return
            }

            if (err) {
              return disposable.addDisposable(reject(err))
            }

            return disposable.addDisposable(resolve(value!))
          })

          fn.apply(void 0, args as any)
        }),
      )

      return disposable
    })
  }
}

export type NodeCallback<A> = (error: Error | null | undefined | void, value?: A) => void

export type NodeCallbackFn = {
  <A, B, C, D, E, F, G, R>(a: A, b: B, c: C, d: D, e: E, f: F, g: G, cb: NodeCallback<R>): void
  <A, B, C, D, E, F, R>(a: A, b: B, c: C, d: D, e: E, f: F, cb: NodeCallback<R>): void
  <A, B, C, D, E, R>(a: A, b: B, c: C, d: D, e: E, cb: NodeCallback<R>): void
  <A, B, C, D, R>(a: A, b: B, c: C, d: D, cb: NodeCallback<R>): void
  <A, B, C, R>(a: A, b: B, c: C, cb: NodeCallback<R>): void
  <A, B, R>(a: A, b: B, cb: NodeCallback<R>): void
  <A, R>(a: A, cb: NodeCallback<R>): void
  <R>(cb: NodeCallback<R>): void
}
