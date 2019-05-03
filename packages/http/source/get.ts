import { addQueryParameters, DropKeys } from '@typed/common'
import { MergeObjects } from '@typed/objects'
import { http } from './http'
import { HttpOptions, HttpRequest } from './types'

export type GetOptions = Partial<
  MergeObjects<DropKeys<HttpOptions, 'body'>, { queryParameters?: Record<string, string> }>
>

/**
 * Create Get Requests
 * @param url :: string
 * @param options :: GetOptions
 * @returns :: Request<A>
 */
export const get = (url: string, options: GetOptions = {}): HttpRequest =>
  http(addQueryParameters(url, options.queryParameters || {}), options)
