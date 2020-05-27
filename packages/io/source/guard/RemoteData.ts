import { equals } from '@typed/logic'
import { isFailure, isLoading, isSuccess, NoData, RemoteData } from '@typed/remote-data'
import { Guard, TypeOf } from './Guard'
import { Record } from './Record'

const isNoData = equals(NoData)

export function remoteData<L extends Guard<never>, R extends Guard<never>>(
  left: L,
  right: R,
): Guard<RemoteData<TypeOf<L>, TypeOf<R>>> {
  return {
    is: (u): u is RemoteData<TypeOf<L>, TypeOf<R>> => {
      if (!Record.is(u)) {
        return false
      }

      if (isNoData(u) || isLoading(u as any)) {
        return true
      }

      if (isFailure(u as any)) {
        return left.is(u.value)
      }

      if (isSuccess(u as any)) {
        return right.is(u.value)
      }

      return false
    },
  }
}
