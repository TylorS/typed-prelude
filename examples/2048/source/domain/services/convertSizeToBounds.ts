import { Bounds, Size } from '../model'

export function convertSizeToBounds([x, y]: Size): Bounds {
  return { rows: [0, y - 1], columns: [0, x - 1] }
}
