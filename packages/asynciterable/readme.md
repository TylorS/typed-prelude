# @typed/asynciterable

> A collection of useful function to work with Async Iterables

## API 

All type signatures are shown as non-curried for brevity, but all functions are auto-curried.

### ap :: <A, B>(fn: AsyncIterable<Arity1<A, B>>, value: AsyncIterable<A>): AsyncIterable<B>

Can be used to apply an AsyncIterable of functions `A => B` to an AsyncIterable of `A`s. The result
is an AsyncIterable of `B`s that produces a value first after each has provided at least 1 value, and then 
every time a value is produced by either.

### append :: <A>(value: A, asyncIterable: AsyncIterable<A>): AsyncIterable<A>

Allows adding one extra value just after the `AsyncIterable` has completed.

### chain :: <A, B>(fn: Arity1<A, AsyncIterable<B>>, asyncIterable: AsyncIterable<A>): AsyncIterable<B>

Allows mapping values produced by an AsyncIterable of `A`s to a series of `AsyncIterable`s of `B`s.

### collect :: <A>(asyncIterable: AsyncIterable<A>): Promise<A[]>

Allows collecting the values produced by an AsyncIterable into a list of values.

### concat :: <A>(a: AsyncIterable<A>, b: AsyncIterable<A>): AsyncIterable<A>

Join two AsyncIterables together to produce a new AsyncIterable containing the values of `a` and when it has finished 
producing values it will consume the values of `b` until completion.

### contains :: <A>(value: A, asyncIterable: AsyncIterable<A>): Promise<boolean>

Checks to see if during the production of values if an AsyncIterable produces a particular value. The returned promise 
will resolve with `true` as soon as it sees the value and `false` if the AsyncIterable returns without seeing the given value.

### drop :: <A>(amount: number, asyncIterable: AsyncIterable<A>): AsyncIterable<A>

Allows you to skip the first `n` number of values

### filter :: <A>(predicate: Predicate<A>, asyncIterable: AsyncIterable<A>): AsyncIterable<A>

Allows you to skip over values that do not match the given `predicate`.

### forEach :: <A>(fn: (value: A) => void, asyncIterable: AsyncIterable<A>): Promise<void>

Allows performing side-effects with each value produced by an AsyncIterable.

### map :: <A, B>(fn: Arity1<A, B>, asyncIterable: AsyncIterable<A>): AsyncIterable<B>

Convert an AsyncIterable of `A`s to an AsyncIterable of `B`s by applying the given function of `A => B`

### prepend :: <A>(value: A, asyncIterable: AsyncIterable<A>): AsyncIterable<A>

Prepends a single value to the start of an AsyncIterable.

### range :: (from: number, to: number): AsyncIterable<number>

Produces and AsyncIterable of numbers between `from` and `to`.

### reduce :: <A, B>(reducer: Arity2<B, A, B>, seed: B, asyncIterable: AsyncIterable<A>): Promise<B>

Allows one to accumulate a value over the lifetime of an AsyncIterable.

### take :: <A>(amount: number, asyncIterable: AsyncIterable<A>): AsyncIterable<A>

Allows one to listen for a specific number of values from a given AsyncIterable. The underlying AsyncIterable will
not be affected if it produces less than the amount specified.
