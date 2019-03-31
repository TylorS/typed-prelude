import { MergeObjects } from '@typed/objects'
import { addQueryParameters } from '../common/addQueryParameters'
import { DropKeys } from '../common/types'
import { http } from './http'
import { HttpOptions, Request } from './types'

export type GetOptions = Partial<
  MergeObjects<DropKeys<HttpOptions, 'body'>, { queryParameters?: Record<string, string> }>
>

export const get = <A extends {}>(url: string, options: GetOptions = {}): Request<A> =>
  http(addQueryParameters(url, options.queryParameters || {}), options)
