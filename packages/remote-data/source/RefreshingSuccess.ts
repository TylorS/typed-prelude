import { RemoteDataStatus } from './enums'

export interface RefreshingSuccess<A> {
  readonly status: RemoteDataStatus.RefreshingSuccess
  readonly value: A
}

export namespace RefreshingSuccess {
  export const of = <A>(value: A): RefreshingSuccess<A> => ({
    status: RemoteDataStatus.RefreshingSuccess,
    value,
  })
}
