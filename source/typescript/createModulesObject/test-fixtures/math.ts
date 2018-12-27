import { add } from './add'
import { divide } from './divide'
import { multiply } from './multiply'
import { subtract } from './subtract'

export function example() {
  console.log(add(1, subtract(2, multiply(30, divide(2, 33)))))
}
