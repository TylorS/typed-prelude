export * from './chain'
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

export namespace Iterable {
  export const of = function* of<A>(value: A): IterableIterator<A> {
    yield value
  }
}
