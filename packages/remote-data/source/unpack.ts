import { curry } from '@typed/lambda'
import { hasNoData } from './hasNoData'
import { isFailure } from './isFailure'
import { isLoading } from './isLoading'
import { RemoteData } from './RemoteData'

export const unpack: {
  <A, B, C>(
    noData: () => C,
    loading: () => C,
    failure: (value: A) => C,
    success: (value: B) => C,
    remoteData: RemoteData<A, B>,
  ): C

  <A, B, C>(
    noData: () => C,
    loading: () => C,
    failure: (value: A) => C,
    success: (value: B) => C,
  ): (remoteData: RemoteData<A, B>) => C

  <A, B, C>(noData: () => C, loading: () => C, failure: (value: A) => C): {
    (success: (value: B) => C, remoteData: RemoteData<A, B>): C
    (success: (value: B) => C): (remoteData: RemoteData<A, B>) => C
  }

  <C>(noData: () => C, loading: () => C): {
    <A, B>(failure: (value: A) => C, success: (value: B) => C, remoteData: RemoteData<A, B>): C
    <A, B>(failure: (value: A) => C, success: (value: B) => C): (remoteData: RemoteData<A, B>) => C
    <A>(failure: (value: A) => C): {
      <B>(success: (value: B) => C, remoteData: RemoteData<A, B>): C
      <B>(success: (value: B) => C): (remoteData: RemoteData<A, B>) => C
    }
  }

  <C>(noData: () => C): {
    <A, B>(
      loading: () => C,
      failure: (value: A) => C,
      success: (value: B) => C,
      remoteData: RemoteData<A, B>,
    ): C

    <A, B>(loading: () => C, failure: (value: A) => C, success: (value: B) => C): (
      remoteData: RemoteData<A, B>,
    ) => C

    <A, B>(loading: () => C, failure: (value: A) => C): {
      (success: (value: B) => C, remoteData: RemoteData<A, B>): C
      (success: (value: B) => C): (remoteData: RemoteData<A, B>) => C
    }

    (loading: () => C): {
      <A, B>(failure: (value: A) => C, success: (value: B) => C, remoteData: RemoteData<A, B>): C
      <A, B>(failure: (value: A) => C, success: (value: B) => C): (
        remoteData: RemoteData<A, B>,
      ) => C
      <A>(failure: (value: A) => C): {
        <B>(success: (value: B) => C, remoteData: RemoteData<A, B>): C
        <B>(success: (value: B) => C): (remoteData: RemoteData<A, B>) => C
      }
    }
  }
} = curry(__unpackRemoteData)

function __unpackRemoteData<A, B, C>(
  noData: () => C,
  loading: () => C,
  failure: (value: A) => C,
  success: (value: B) => C,
  remoteData: RemoteData<A, B>,
): C {
  if (hasNoData(remoteData)) {
    return noData()
  }

  if (isLoading(remoteData)) {
    return loading()
  }

  if (isFailure(remoteData)) {
    return failure(remoteData.value)
  }

  return success(remoteData.value)
}
