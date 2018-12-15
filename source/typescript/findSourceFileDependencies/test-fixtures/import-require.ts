import math = require('./math')

export function importRequire(x: number, y: number) {
  return math.multiply(y, math.add(x, y))
}
