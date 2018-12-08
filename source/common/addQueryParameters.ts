import { curry } from '../lambda'

export const addQueryParameters = curry(__addQueryParameters)

function __addQueryParameters(
  url: string,
  queryParams: Record<string, string | undefined>,
): string {
  const params = Object.keys(queryParams)
    .sort()
    .map(queryParam(queryParams))
    .join('&')

  return encodeURI(`${url}${params ? `?${params}` : ''}`)
}

function queryParam(queryParams: Record<string, string | undefined>) {
  return (key: keyof typeof queryParams): string => {
    const value = queryParams[key]

    return value ? `${key}=${value}` : key
  }
}
