import { Disposable } from '@typed/disposable'
import { Either } from '@typed/either'
import { runPure } from '@typed/env'
import { Future } from './Future'

export function toPromise<A, B>(future: Future<never, A, B>): Promise<Either<A, B>> {
  return new Promise(resolve => runPure(either => (resolve(either), Disposable.None), future))
}
