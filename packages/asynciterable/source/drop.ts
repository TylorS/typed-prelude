import { curry } from '@typed/lambda'

export const drop = curry(__drop) as {
  <A>(amount: number, asyncIterable: AsyncIterable<A>): AsyncIterable<A>
  (amount: number): <A>(asyncIterable: AsyncIterable<A>) => AsyncIterable<A>
}

async function* __drop<A>(amount: number, asyncIterable: AsyncIterable<A>): AsyncIterable<A> {
  for await (const x of asyncIterable) {
    if (--amount < 0) {
      yield x
    }
  }
}
