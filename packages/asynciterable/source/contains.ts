import { curry } from '@typed/lambda'
import { equals } from '@typed/logic'

export const contains: {
  <A>(value: A, asyncIterable: AsyncIterable<A>): Promise<boolean>
  <A>(value: A): (asyncIterable: AsyncIterable<A>) => Promise<boolean>
} = curry(__contains)

async function __contains<A>(value: A, asyncIterable: AsyncIterable<A>): Promise<boolean> {
  for await (const x of asyncIterable) {
    if (equals(x, value)) {
      return true
    }
  }

  return false
}
