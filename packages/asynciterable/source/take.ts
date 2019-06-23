import { curry } from '@typed/lambda'

export const take = curry(__take) as {
  <A>(amount: number, asyncIterable: AsyncIterable<A>): AsyncIterable<A>
  (amount: number): <A>(asyncIterable: AsyncIterable<A>) => AsyncIterable<A>
}

async function* __take<A>(amount: number, asyncIterable: AsyncIterable<A>): AsyncIterable<A> {
  for await (const x of asyncIterable) {
    if (amount-- > 0) {
      yield x
    }
  }
}
