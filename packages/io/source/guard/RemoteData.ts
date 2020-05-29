import { equals } from '@typed/logic'
import { isFailure, isLoading, isSuccess, NoData, RemoteData } from '@typed/remote-data'
import { Guard, TypeOf } from './Guard'
import { Record } from './Record'
import { refinement } from './refinement'

const isNoData = equals(NoData)

const _RemoteData = refinement(
  Record,
  (r): r is RemoteData<unknown, unknown> =>
    isNoData(r) ||
    isLoading(r as RemoteData<unknown, unknown>) ||
    isFailure(r as RemoteData<unknown, unknown>) ||
    isSuccess(r as RemoteData<unknown, unknown>),
)

export { _RemoteData as RemoteData }

export function remoteData<L extends Guard, R extends Guard>(
  left: L,
  right: R,
): Guard<RemoteData<TypeOf<L>, TypeOf<R>>> {
  return refinement(_RemoteData, (u): u is RemoteData<TypeOf<L>, TypeOf<R>> => {
    if (isFailure(u)) {
      return left.is(u.value)
    }

    if (isSuccess(u)) {
      return right.is(u.value)
    }

    return true
  })
}
