import { equals } from '@typed/logic'
import {
  isDoneLoading,
  isFailure,
  isLoading,
  isRefreshing,
  isRefreshingFailure,
  isRefreshingSuccess,
  isSuccess,
  NoData,
  RemoteData,
} from '@typed/remote-data'
import { Guard, TypeOf } from './Guard'
import { Record } from './Record'
import { refinement } from './refinement'

const isNoData = equals(NoData)

const _RemoteData = refinement(
  Record,
  (r): r is RemoteData<unknown, unknown> =>
    isNoData(r) ||
    isLoading(r as RemoteData<unknown, unknown>) ||
    isDoneLoading(r as RemoteData<unknown, unknown>) ||
    isRefreshing(r as RemoteData<unknown, unknown>),
)

export { _RemoteData as RemoteData }

export function remoteData<L extends Guard, R extends Guard>(
  left: L,
  right: R,
): Guard<RemoteData<TypeOf<L>, TypeOf<R>>> {
  return refinement(_RemoteData, (u): u is RemoteData<TypeOf<L>, TypeOf<R>> => {
    if (isFailure(u) || isRefreshingFailure(u)) {
      return left.is(u.value)
    }

    if (isSuccess(u) || isRefreshingSuccess(u)) {
      return right.is(u.value)
    }

    return true
  })
}
