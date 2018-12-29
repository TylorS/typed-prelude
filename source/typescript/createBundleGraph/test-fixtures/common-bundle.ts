import { cjs } from './commonjs'
import { main } from './dynamic-import'

export async function foo() {
  const n = await main()

  return cjs(n)
}
