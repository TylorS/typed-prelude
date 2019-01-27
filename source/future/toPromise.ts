import { EffectResources } from '@typed/effect'
import { curry } from '@typed/lambda'
import { fork } from './fork'
import { Future } from './Future'

export const toPromise = curry(
  async <Resources, A, B>(
    resources: EffectResources<Resources>,
    future: Future<A, B, Resources>,
  ): Promise<B> => new Promise<B>((resolve, reject) => fork(reject, resolve, resources, future)),
) as {
  <Resources, A, B>(
    resources: EffectResources<Resources>,
    future: Future<A, B, Resources>,
  ): FuturePromise<A, B>

  <Resources>(resources: EffectResources<Resources>): <A, B>(
    future: Future<A, B, Resources>,
  ) => FuturePromise<A, B>
}

export interface FuturePromise<A, B> extends Promise<B> {
  catch<TResult = never>(
    onrejected?: ((reason: A) => TResult | PromiseLike<TResult>) | undefined | null,
  ): Promise<TResult>
}
