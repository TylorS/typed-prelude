import { Either, unpack } from '@typed/either'
import { RemoteDataStatus } from './enums'
import { Failure } from './Failure'
import { RefreshingFailure } from './RefreshingFailure'
import { RefreshingSuccess } from './RefreshingSuccess'
import { Success } from './Success'

export type RemoteData<A = unknown, B = unknown> =
  | NoData
  | Loading
  | Loaded<A, B>
  | Refreshing<A, B>

export type Loadable<A = unknown, B = unknown> = Exclude<RemoteData<A, B>, NoData>

export type Loaded<A = unknown, B = unknown> = Failure<A> | Success<B>

export type Refreshing<A = unknown, B = unknown> = RefreshingFailure<A> | RefreshingSuccess<B>

export type NoData = { readonly status: RemoteDataStatus.NoData }
export const NoData: NoData = { status: RemoteDataStatus.NoData }

export type Loading = { readonly status: RemoteDataStatus.Loading }
export const Loading: Loading = { status: RemoteDataStatus.Loading }

export namespace RemoteData {
  export const of = <A, B>(value: B): RemoteData<A, B> => Success.of(value)
  export const failure = <A, B>(value: A): RemoteData<A, B> => Failure.of(value)

  export const fromEither = <A, B>(either: Either<A, B>): Loaded<A, B> =>
    unpack<A, B, Loaded<A, B>>(Failure.of, Success.of, either)
}
