/**
 * Returns true if an object has no keys.
 */
export function isEmpty(x: any): boolean {
  if (x === undefined || x === null) {
    return false
  }

  const keys = Object.keys(x)

  return keys.length === 0
}
