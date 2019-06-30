import { curry } from '@typed/lambda'
import { isSuccess } from './isSuccess'
import { RemoteData } from './RemoteData'
import { Success } from './Success'

/**
 * Map over the value of a succesful RemoteData.
 * @name map<A, B, C>(f: (value: B) => C, data: RemoteData<A, B>): RemoteData<A, C>
 */
export const map = curry(__map) as {
  <A, B, C>(f: (value: B) => C, data: RemoteData<A, B>): RemoteData<A, C>
  <A, B, C>(f: (value: B) => C): (data: RemoteData<A, B>) => RemoteData<A, C>
}

function __map<A, B, C>(f: (value: B) => C, data: RemoteData<A, B>): RemoteData<A, C> {
  return isSuccess(data) ? Success.of(f(data.value)) : data
}
