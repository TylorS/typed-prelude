export * from './ap'
export * from './append'
export * from './chain'
export * from './collect'
export * from './concat'
export * from './contains'
export * from './drop'
export * from './filter'
export * from './forEach'
export * from './map'
export * from './prepend'
export * from './range'
export * from './reduce'
export * from './take'

export namespace AsyncIterable {
  export const of = async function* of<A>(value: A): AsyncIterableIterator<A> {
    yield value
  }

  export const fromIterable = async function* fromIterable<A>(
    iterable: Iterable<A>,
  ): AsyncIterableIterator<A> {
    for (const x of iterable) {
      yield x
    }
  }
}
