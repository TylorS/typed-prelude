import { curry, pipe } from '@typed/lambda'

import { Loadable, Loading } from './Loadable'
import { HttpOptions, Request } from './types'

// TODO: Write some tests
// I ripped this out of a side-project

export const http: {
  <A>(url: string, options?: HttpOptions): Request<A>
  <A>(url: string): (options?: HttpOptions) => Request<A>
} = curry(
  <A>(url: string, options: HttpOptions = {}): Request<A> => ({
    runEnv: (f, { http }) => (
      f(Loading),
      http(
        url,
        options,
        pipe(
          Loadable.of,
          f,
        ),
        pipe(Loadable.error),
      )
    ),
  }),
)
