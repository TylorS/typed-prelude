import { Future } from '@typed/future'

export type HttpOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'PATCH' | 'HEAD'
  headers?: Record<string, string | undefined>
  body?: string
}

export type HttpResponse = {
  responseText: string
  status: number
  statusText: string
  headers: Record<string, string | undefined>
}

// A type-param is used to represent a parsed type
// @ts-ignore
export interface Request<A extends {}> extends Future<Error, HttpResponse> {}
