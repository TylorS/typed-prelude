import add, { multiply } from './math'

export function namedImports(x: number, y: number) {
  return multiply(y, add(x, y))
}
