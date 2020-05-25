import { Effect } from '@typed/effects'
import { map, Right } from '@typed/either'
import {
  isDoneLoading,
  isFailure,
  isLoading,
  NoData,
  RemoteData,
  RemoteDataStatus,
  Success,
} from '@typed/remote-data'
import { Mixed, Type } from '../Type'
import { either } from './Either'
import { Record } from './Record'

export type RemoteDataType<E, A, B> = Type<'RemoteData', E, RemoteData<A, B>>

export const remoteData = <A extends Mixed, B extends Mixed>(
  left: A,
  right: B,
): RemoteDataType<unknown, Type.Output<A>, Type.Output<B>> => {
  const eitherType = either(left, right)

  const is = (u: unknown): u is RemoteData<Type.Output<A>, Type.Output<B>> => {
    if (!Record.is(u)) {
      return false
    }

    const r = u as RemoteData<unknown, unknown>

    return r === NoData || isLoading(r) || isDoneLoading(r)
  }

  function* decode(u: unknown) {
    if (is(u)) {
      if (u.status === RemoteDataStatus.NoData || isLoading(u)) {
        return Right.of(u)
      }

      if (isFailure(u)) {
        const l = yield* left.decode(u.value)

        return map(() => u, l)
      }

      const r = yield* right.decode((u as Success<Type.Output<B>>).value)

      return map(() => u, r)
    }

    return map(RemoteData.fromEither, yield* eitherType.decode(u))
  }

  return {
    name: 'RemoteData',
    is,
    decode: decode as RemoteDataType<unknown, Type.Output<A>, Type.Output<B>>['decode'],
    encode: Effect.of,
  }
}
