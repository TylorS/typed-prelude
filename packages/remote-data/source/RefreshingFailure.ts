import { RemoteDataStatus } from './enums'

export interface RefreshingFailure<A> {
  readonly status: RemoteDataStatus.RefreshingFailure
  readonly value: A
}

export namespace RefreshingFailure {
  export const of = <A>(value: A): RefreshingFailure<A> => ({
    status: RemoteDataStatus.RefreshingFailure,
    value,
  })
}
