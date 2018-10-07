export function addQueryParameters(
  url: string,
  queryParams?: Record<string, string | undefined>,
): string {
  if (!queryParams) {
    return url
  }

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
