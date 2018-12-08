import { addQueryParameters } from '../common/addQueryParameters'
import { Future } from '../future'
import { DropKeys, MergeObjects } from '../objects'
import { http } from './http'
import { HttpOptions, HttpResponse, Request } from './types'

export type GetOptions = Partial<
  MergeObjects<DropKeys<HttpOptions, 'body'>, { queryParameters?: Record<string, string> }>
>

export const get = (<A extends {}>(url: string, options: GetOptions = {}): Request<A> =>
  http(addQueryParameters(url, options.queryParameters || {}), options)) as {
  (url: string, options?: GetOptions): Future<Error, HttpResponse>
  <A extends {}>(url: string, options?: GetOptions): Request<A>
}
