import { curry } from '@typed/lambda'

export const prepend: {
  <A>(value: A, asyncIterable: AsyncIterable<A>): AsyncIterable<A>
  <A>(value: A): (asyncIterable: AsyncIterable<A>) => AsyncIterable<A>
} = curry(__prepend)

async function* __prepend<A>(value: A, asyncIterable: AsyncIterable<A>): AsyncIterable<A> {
  yield value

  for await (const x of asyncIterable) {
    yield x
  }
}
