import * as math from './math'

export function namespaceImports(x: number, y: number) {
  return math.multiply(y, math.add(x, y))
}
