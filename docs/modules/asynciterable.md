[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [asynciterable](asynciterable.md)

# Package: asynciterable

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

## Index

### Namespaces

* [AsyncIterable](asynciterable.md#asynciterable)

### Variables

* [ap](asynciterable.md#const-ap)
* [append](asynciterable.md#const-append)
* [chain](asynciterable.md#const-chain)
* [concat](asynciterable.md#const-concat)
* [contains](asynciterable.md#const-contains)
* [drop](asynciterable.md#const-drop)
* [filter](asynciterable.md#const-filter)
* [forEach](asynciterable.md#const-foreach)
* [map](asynciterable.md#const-map)
* [prepend](asynciterable.md#const-prepend)
* [range](asynciterable.md#const-range)
* [rangeBy](asynciterable.md#const-rangeby)
* [reduce](asynciterable.md#const-reduce)
* [take](asynciterable.md#const-take)

### Functions

* [__append](asynciterable.md#__append)
* [__chain](asynciterable.md#__chain)
* [__concat](asynciterable.md#__concat)
* [__contains](asynciterable.md#__contains)
* [__drop](asynciterable.md#__drop)
* [__filter](asynciterable.md#__filter)
* [__forEach](asynciterable.md#__foreach)
* [__map](asynciterable.md#__map)
* [__prepend](asynciterable.md#__prepend)
* [__rangeBy](asynciterable.md#__rangeby)
* [__reduce](asynciterable.md#__reduce)
* [__take](asynciterable.md#__take)
* [collect](asynciterable.md#collect)

## Namespaces

###  AsyncIterable

• **AsyncIterable**:

*Defined in [packages/asynciterable/source/index.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/index.ts#L16)*

### `Const` fromIterable

▸ **fromIterable**<**A**>(`iterable`: Iterable‹A›): *AsyncIterableIterator‹A›*

*Defined in [packages/asynciterable/source/index.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/index.ts#L21)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

**Returns:** *AsyncIterableIterator‹A›*

### `Const` of

▸ **of**<**A**>(`value`: A): *AsyncIterableIterator‹A›*

*Defined in [packages/asynciterable/source/index.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/index.ts#L17)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *AsyncIterableIterator‹A›*

## Variables

### `Const` ap

• **ap**: *function* = curry(
  <A, B>(fn: AsyncIterable<Arity1<A, B>>, value: AsyncIterable<A>): AsyncIterable<B> =>
    chain((f) => map(f, value), fn),
) as {
  <A, B>(fn: AsyncIterable<Arity1<A, B>>, value: AsyncIterable<A>): AsyncIterable<B>
  <A, B>(fn: AsyncIterable<Arity1<A, B>>): (value: AsyncIterable<A>) => AsyncIterable<B>
}

*Defined in [packages/asynciterable/source/ap.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/ap.ts#L8)*

Apply an async iterable of functions to an async iterable of values.

#### Type declaration:

▸ <**A**, **B**>(`fn`: AsyncIterable‹[Arity1](lambda.md#arity1)‹A, B››, `value`: AsyncIterable‹A›): *AsyncIterable‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | AsyncIterable‹[Arity1](lambda.md#arity1)‹A, B›› |
`value` | AsyncIterable‹A› |

▸ <**A**, **B**>(`fn`: AsyncIterable‹[Arity1](lambda.md#arity1)‹A, B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | AsyncIterable‹[Arity1](lambda.md#arity1)‹A, B›› |

▸ (`value`: AsyncIterable‹A›): *AsyncIterable‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | AsyncIterable‹A› |

___

### `Const` append

• **append**: *function* = curry(__append)

*Defined in [packages/asynciterable/source/append.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/append.ts#L3)*

#### Type declaration:

▸ <**A**>(`value`: A, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`asyncIterable` | AsyncIterable‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` chain

• **chain**: *function* = curry(__chain)

*Defined in [packages/asynciterable/source/chain.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/chain.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, AsyncIterable‹B››, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, AsyncIterable‹B›› |
`asyncIterable` | AsyncIterable‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, AsyncIterable‹B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, AsyncIterable‹B›› |

▸ (`asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` concat

• **concat**: *function* = curry(__concat)

*Defined in [packages/asynciterable/source/concat.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/concat.ts#L3)*

#### Type declaration:

▸ <**A**>(`a`: AsyncIterable‹A›, `b`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | AsyncIterable‹A› |
`b` | AsyncIterable‹A› |

▸ <**A**>(`a`: AsyncIterable‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | AsyncIterable‹A› |

▸ (`b`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | AsyncIterable‹A› |

___

### `Const` contains

• **contains**: *function* = curry(__contains)

*Defined in [packages/asynciterable/source/contains.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/contains.ts#L4)*

#### Type declaration:

▸ <**A**>(`value`: A, `asyncIterable`: AsyncIterable‹A›): *Promise‹boolean›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`asyncIterable` | AsyncIterable‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`asyncIterable`: AsyncIterable‹A›): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` drop

• **drop**: *function* = curry(__drop) as {
  <A>(amount: number, asyncIterable: AsyncIterable<A>): AsyncIterable<A>
  (amount: number): <A>(asyncIterable: AsyncIterable<A>) => AsyncIterable<A>
}

*Defined in [packages/asynciterable/source/drop.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/drop.ts#L3)*

#### Type declaration:

▸ <**A**>(`amount`: number, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`asyncIterable` | AsyncIterable‹A› |

▸ (`amount`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

▸ <**A**>(`asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` filter

• **filter**: *function* = curry(__filter)

*Defined in [packages/asynciterable/source/filter.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/filter.ts#L3)*

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`asyncIterable` | AsyncIterable‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` forEach

• **forEach**: *function* = curry(__forEach)

*Defined in [packages/asynciterable/source/forEach.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/forEach.ts#L3)*

#### Type declaration:

▸ <**A**>(`fn`: function, `asyncIterable`: AsyncIterable‹A›): *Promise‹void›*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **asyncIterable**: *AsyncIterable‹A›*

▸ <**A**>(`fn`: function): *function*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`asyncIterable`: AsyncIterable‹A›): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` map

• **map**: *function* = curry(__map)

*Defined in [packages/asynciterable/source/map.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/map.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`asyncIterable` | AsyncIterable‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |

▸ (`asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` prepend

• **prepend**: *function* = curry(__prepend)

*Defined in [packages/asynciterable/source/prepend.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/prepend.ts#L3)*

#### Type declaration:

▸ <**A**>(`value`: A, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`asyncIterable` | AsyncIterable‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` range

• **range**: *function* = curry((from: number, to: number) => __rangeBy(from, to, 1))

*Defined in [packages/asynciterable/source/range.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/range.ts#L6)*

Inclusive range by 1

#### Type declaration:

▸ (`from`: number, `to`: number): *AsyncIterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |

▸ (`from`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |

▸ (`to`: number): *AsyncIterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

___

### `Const` rangeBy

• **rangeBy**: *function* = curry(__rangeBy)

*Defined in [packages/asynciterable/source/range.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/range.ts#L14)*

Inclusive range by given increment

#### Type declaration:

▸ (`from`: number, `to`: number, `by`: number): *AsyncIterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |
`by` | number |

▸ (`from`: number, `to`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |

▸ (`by`: number): *AsyncIterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`by` | number |

▸ (`from`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |

▸ (`to`: number, `by`: number): *AsyncIterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |
`by` | number |

▸ (`to`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

▸ (`by`: number): *AsyncIterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`by` | number |

___

### `Const` reduce

• **reduce**: *function* = curry(__reduce)

*Defined in [packages/asynciterable/source/reduce.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/reduce.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹B, A, B›, `seed`: B, `asyncIterable`: AsyncIterable‹A›): *Promise‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹B, A, B› |
`seed` | B |
`asyncIterable` | AsyncIterable‹A› |

▸ <**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹B, A, B›, `seed`: B): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹B, A, B› |
`seed` | B |

▸ (`asyncIterable`: AsyncIterable‹A›): *Promise‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

▸ <**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹B, A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹B, A, B› |

▸ (`seed`: B, `asyncIterable`: AsyncIterable‹A›): *Promise‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |
`asyncIterable` | AsyncIterable‹A› |

▸ (`seed`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |

▸ (`asyncIterable`: AsyncIterable‹A›): *Promise‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

___

### `Const` take

• **take**: *function* = curry(__take) as {
  <A>(amount: number, asyncIterable: AsyncIterable<A>): AsyncIterable<A>
  (amount: number): <A>(asyncIterable: AsyncIterable<A>) => AsyncIterable<A>
}

*Defined in [packages/asynciterable/source/take.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/take.ts#L3)*

#### Type declaration:

▸ <**A**>(`amount`: number, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`asyncIterable` | AsyncIterable‹A› |

▸ (`amount`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

▸ <**A**>(`asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

## Functions

###  __append

▸ **__append**<**A**>(`value`: A, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

*Defined in [packages/asynciterable/source/append.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/append.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *AsyncIterable‹A›*

___

###  __chain

▸ **__chain**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, AsyncIterable‹B››, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹B›*

*Defined in [packages/asynciterable/source/chain.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/chain.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, AsyncIterable‹B›› |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *AsyncIterable‹B›*

___

###  __concat

▸ **__concat**<**A**>(`a`: AsyncIterable‹A›, `b`: AsyncIterable‹A›): *AsyncIterable‹A›*

*Defined in [packages/asynciterable/source/concat.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/concat.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | AsyncIterable‹A› |
`b` | AsyncIterable‹A› |

**Returns:** *AsyncIterable‹A›*

___

###  __contains

▸ **__contains**<**A**>(`value`: A, `asyncIterable`: AsyncIterable‹A›): *Promise‹boolean›*

*Defined in [packages/asynciterable/source/contains.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/contains.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *Promise‹boolean›*

___

###  __drop

▸ **__drop**<**A**>(`amount`: number, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

*Defined in [packages/asynciterable/source/drop.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/drop.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *AsyncIterable‹A›*

___

###  __filter

▸ **__filter**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

*Defined in [packages/asynciterable/source/filter.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/filter.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *AsyncIterable‹A›*

___

###  __forEach

▸ **__forEach**<**A**>(`fn`: function, `asyncIterable`: AsyncIterable‹A›): *Promise‹void›*

*Defined in [packages/asynciterable/source/forEach.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/forEach.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **asyncIterable**: *AsyncIterable‹A›*

**Returns:** *Promise‹void›*

___

###  __map

▸ **__map**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹B›*

*Defined in [packages/asynciterable/source/map.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/map.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *AsyncIterable‹B›*

___

###  __prepend

▸ **__prepend**<**A**>(`value`: A, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

*Defined in [packages/asynciterable/source/prepend.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/prepend.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *AsyncIterable‹A›*

___

###  __rangeBy

▸ **__rangeBy**(`from`: number, `to`: number, `by`: number): *AsyncIterable‹number›*

*Defined in [packages/asynciterable/source/range.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/range.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |
`by` | number |

**Returns:** *AsyncIterable‹number›*

___

###  __reduce

▸ **__reduce**<**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹B, A, B›, `seed`: B, `asyncIterable`: AsyncIterable‹A›): *Promise‹B›*

*Defined in [packages/asynciterable/source/reduce.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/reduce.ts#L12)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹B, A, B› |
`seed` | B |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *Promise‹B›*

___

###  __take

▸ **__take**<**A**>(`amount`: number, `asyncIterable`: AsyncIterable‹A›): *AsyncIterable‹A›*

*Defined in [packages/asynciterable/source/take.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/take.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *AsyncIterable‹A›*

___

###  collect

▸ **collect**<**A**>(`asyncIterable`: AsyncIterable‹A›): *Promise‹A[]›*

*Defined in [packages/asynciterable/source/collect.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asynciterable/source/collect.ts#L1)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`asyncIterable` | AsyncIterable‹A› |

**Returns:** *Promise‹A[]›*
