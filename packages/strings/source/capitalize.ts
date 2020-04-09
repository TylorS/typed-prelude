/**
 * Capitalize a string
 * @param str :: string
 * @returns :: string
 */
export function capitalize(str: string): string {
  return capitalizeFirst(str.split(' ').map(capitalizeFirst).join(' '))
}

function capitalizeFirst(str: string): string {
  if (str && str[0]) {
    return str[0].toUpperCase() + str.slice(1)
  }

  return str
}
