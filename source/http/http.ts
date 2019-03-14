import { Future } from '@typed/future'
import { curry } from '@typed/lambda'

import { HttpOptions, HttpResources, HttpResponse, Request } from './types'

// TODO: Write some tests
// I ripped this out of a side-project

export const http: {
  <A>(url: string, options?: HttpOptions): Request<A>
  <A>(url: string): (options?: HttpOptions) => Request<A>
} = curry(
  <A>(url: string, options: HttpOptions = {}): Request<A> =>
    Future.create<Error, HttpResponse, HttpResources>((reject, resolve, { http }) =>
      http(url, options, resolve, reject),
    ),
)
