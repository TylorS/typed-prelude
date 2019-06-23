import { curry, Predicate } from '@typed/lambda'

export const filter: {
  <A>(predicate: Predicate<A>, asyncIterable: AsyncIterable<A>): AsyncIterable<A>
  <A>(predicate: Predicate<A>): (asyncIterable: AsyncIterable<A>) => AsyncIterable<A>
} = curry(__filter)

async function* __filter<A>(
  predicate: Predicate<A>,
  asyncIterable: AsyncIterable<A>,
): AsyncIterable<A> {
  for await (const x of asyncIterable) {
    if (predicate(x)) {
      yield x
    }
  }
}
