import { bar } from 'bar/function'
import { foo } from 'foo/function'

export function foobar() {
  return foo() + bar()
}
