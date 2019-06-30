import { curry } from '@typed/lambda'
import { isSuccess } from './isSuccess'
import { RemoteData } from './RemoteData'

/**
 * Returns a `RemoteData` that is the result of calling `f` with the resolved
 * value of another `RemoteData`.
 * @name chain<A, B, C>(f: (value: B) => RemoteData<A, C>, data: RemoteData<A, B>): RemoteData<A C>
 */
export const chain = curry(__chain) as {
  <A, B, C>(f: (value: B) => RemoteData<A, C>, data: RemoteData<A, B>): RemoteData<A, C>
  <A, B, C>(f: (value: B) => RemoteData<A, C>): (data: RemoteData<A, B>) => RemoteData<A, C>
}

function __chain<A, B, C>(
  f: (value: B) => RemoteData<A, C>,
  data: RemoteData<A, B>,
): RemoteData<A, C> {
  return isSuccess(data) ? f(data.value) : data
}
