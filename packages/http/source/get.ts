import { addQueryParameters, DropKeys } from '@typed/common'
import { MergeObjects } from '@typed/objects'
import { http } from './http'
import { HttpOptions, HttpRequest } from './types'

export type GetOptions = Readonly<
  Partial<
    MergeObjects<
      DropKeys<HttpOptions, 'body'>,
      { readonly queryParameters?: Record<string, string | undefined> }
    >
  >
>

/**
 * Create Get Requests
 * @param url :: string
 * @param options :: GetOptions
 * @returns :: Request<A>
 */
export const get = <A = unknown>(url: string, options: GetOptions = {}): HttpRequest<A> =>
  http(addQueryParameters(url, options.queryParameters || {}), options)
