import { curry } from '@typed/lambda'

export const forEach: {
  <A>(fn: (value: A) => void, asyncIterable: AsyncIterable<A>): Promise<void>
  <A>(fn: (value: A) => void): (asyncIterable: AsyncIterable<A>) => Promise<void>
} = curry(__forEach)

async function __forEach<A>(
  fn: (value: A) => void,
  asyncIterable: AsyncIterable<A>,
): Promise<void> {
  for await (const x of asyncIterable) {
    fn(x)
  }
}
