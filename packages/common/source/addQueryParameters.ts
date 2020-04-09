export function addQueryParameters(
  url: string,
  queryParams: Record<string, string | undefined>,
): string
export function addQueryParameters(
  url: string,
): (queryParams: Record<string, string | undefined>) => string

/**
 * Append Query Parameters to a Url
 * @param url :: String
 * @param queryParams :: Record<string, string | undefined>
 * @returns string
 */
export function addQueryParameters(url: string, queryParams?: Record<string, string | undefined>) {
  if (queryParams === undefined) {
    return (queryParams: Record<string, string | undefined>) =>
      __addQueryParameters(url, queryParams)
  }

  return __addQueryParameters(url, queryParams)
}

function __addQueryParameters(
  url: string,
  queryParams: Record<string, string | undefined>,
): string {
  const params = Object.keys(queryParams).sort().map(queryParam(queryParams)).join('&')

  return encodeURI(`${url}${params ? `?${params}` : ''}`)
}

function queryParam(queryParams: Record<string, string | undefined>) {
  return (key: keyof typeof queryParams): string => {
    const value = queryParams[key]

    return value ? `${key}=${value}` : key
  }
}
