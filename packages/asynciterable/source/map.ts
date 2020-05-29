import { Arity1, curry } from '@typed/lambda'

export const map: {
  <A, B>(fn: Arity1<A, B>, asyncIterable: AsyncIterable<A>): AsyncIterable<B>
  <A, B>(fn: Arity1<A, B>): (asyncIterable: AsyncIterable<A>) => AsyncIterable<B>
} = curry(__map)

async function* __map<A, B>(fn: Arity1<A, B>, asyncIterable: AsyncIterable<A>): AsyncIterable<B> {
  for await (const a of asyncIterable) {
    yield fn(a)
  }
}
