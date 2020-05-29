[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [list](list.md)

# Package: list

# @typed/list

> Everything you need to work with lists/arrays.

## Index

### Enumerations

* [SortOrder](../enums/list.sortorder.md)

### Interfaces

* [ReduceByArity2](../interfaces/list.reducebyarity2.md)
* [ReduceByArity3](../interfaces/list.reducebyarity3.md)
* [ReduceByArity4](../interfaces/list.reducebyarity4.md)

### Type aliases

* [ArrayLikeValue](list.md#arraylikevalue)
* [NestedArray](list.md#nestedarray)
* [NoInfer](list.md#noinfer)
* [ReduceByArity1](list.md#reducebyarity1)
* [SortFn](list.md#sortfn)

### Variables

* [ap](list.md#const-ap)
* [append](list.md#const-append)
* [appendOrRemove](list.md#const-appendorremove)
* [appendOrRemoveBy](list.md#const-appendorremoveby)
* [ascend](list.md#const-ascend)
* [chain](list.md#const-chain)
* [concat](list.md#const-concat)
* [contains](list.md#const-contains)
* [descend](list.md#const-descend)
* [drop](list.md#const-drop)
* [dropLast](list.md#const-droplast)
* [endsWith](list.md#const-endswith)
* [filter](list.md#const-filter)
* [find](list.md#const-find)
* [findIndex](list.md#const-findindex)
* [findLast](list.md#const-findlast)
* [findLastIndex](list.md#const-findlastindex)
* [forEach](list.md#const-foreach)
* [groupBy](list.md#const-groupby)
* [includes](list.md#const-includes)
* [indexOf](list.md#const-indexof)
* [insert](list.md#const-insert)
* [isZero](list.md#const-iszero)
* [join](list.md#const-join)
* [lastIndexOf](list.md#const-lastindexof)
* [map](list.md#const-map)
* [maybeFilter](list.md#const-maybefilter)
* [move](list.md#const-move)
* [multiSort](list.md#const-multisort)
* [multiSortWithOrder](list.md#const-multisortwithorder)
* [prepend](list.md#const-prepend)
* [range](list.md#const-range)
* [reduce](list.md#const-reduce)
* [reduceBy](list.md#const-reduceby)
* [reduceRight](list.md#const-reduceright)
* [remove](list.md#const-remove)
* [slice](list.md#const-slice)
* [sort](list.md#const-sort)
* [splitAt](list.md#const-splitat)
* [splitEvery](list.md#const-splitevery)
* [startsWith](list.md#const-startswith)
* [take](list.md#const-take)
* [takeLast](list.md#const-takelast)
* [takeLastWhile](list.md#const-takelastwhile)
* [takeWhile](list.md#const-takewhile)
* [uniq](list.md#const-uniq)
* [uniqBy](list.md#const-uniqby)
* [update](list.md#const-update)
* [without](list.md#const-without)
* [zip](list.md#const-zip)

### Functions

* [__appendOrRemove](list.md#__appendorremove)
* [__findLast](list.md#__findlast)
* [__findLastIndex](list.md#__findlastindex)
* [__forEach](list.md#__foreach)
* [__groupBy](list.md#__groupby)
* [__insert](list.md#__insert)
* [__join](list.md#__join)
* [__lastIndexOf](list.md#__lastindexof)
* [__move](list.md#__move)
* [__range](list.md#__range)
* [__startsWith](list.md#__startswith)
* [__without](list.md#__without)
* [_append](list.md#_append)
* [_takeLastWhile](list.md#_takelastwhile)
* [_takeWhile](list.md#_takewhile)
* [between](list.md#between)
* [filterMaybes](list.md#const-filtermaybes)
* [findMovedIndex](list.md#findmovedindex)
* [flatten](list.md#flatten)
* [flattenReducer](list.md#flattenreducer)
* [groupByReducer](list.md#groupbyreducer)
* [head](list.md#const-head)
* [last](list.md#const-last)
* [length](list.md#const-length)
* [outOfBounds](list.md#outofbounds)
* [reverse](list.md#const-reverse)
* [unnest](list.md#unnest)

## Type aliases

###  ArrayLikeValue

Ƭ **ArrayLikeValue**: *A extends ArrayLike<infer R> ? R : never*

*Defined in [packages/list/source/forEach/index.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/forEach/index.ts#L3)*

___

###  NestedArray

Ƭ **NestedArray**: *ReadonlyArray‹A | ReadonlyArray‹A››*

*Defined in [packages/list/source/flatten/flatten.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/flatten/flatten.ts#L1)*

___

###  NoInfer

Ƭ **NoInfer**: *A & object*

*Defined in [packages/list/source/NoInfer.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/NoInfer.ts#L2)*

___

###  ReduceByArity1

Ƭ **ReduceByArity1**: *function*

*Defined in [packages/list/source/reduceBy/index.ts:60](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L60)*

#### Type declaration:

▸ (`list`: ReadonlyArray‹A›): *object*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

* \[ **key**: *string*\]: B

___

###  SortFn

Ƭ **SortFn**: *function*

*Defined in [packages/list/source/sort/index.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/sort/index.ts#L16)*

#### Type declaration:

▸ (`a`: A, `b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

## Variables

### `Const` ap

• **ap**: *function* = curry(<A, B>(fn: ReadonlyArray<Arity1<A, B>>, value: ReadonlyArray<A>): B[] =>
  chain((f) => map(f, value), fn),
) as {
  <A, B>(fn: ReadonlyArray<Arity1<A, B>>, value: ReadonlyArray<A>): B[]
  <A, B>(fn: ReadonlyArray<Arity1<A, B>>): (value: ReadonlyArray<A>) => B[]
}

*Defined in [packages/list/source/ap/ap.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/ap/ap.ts#L8)*

Apply a list of functions to a list of values.

#### Type declaration:

▸ <**A**, **B**>(`fn`: ReadonlyArray‹[Arity1](lambda.md#arity1)‹A, B››, `value`: ReadonlyArray‹A›): *B[]*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | ReadonlyArray‹[Arity1](lambda.md#arity1)‹A, B›› |
`value` | ReadonlyArray‹A› |

▸ <**A**, **B**>(`fn`: ReadonlyArray‹[Arity1](lambda.md#arity1)‹A, B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | ReadonlyArray‹[Arity1](lambda.md#arity1)‹A, B›› |

▸ (`value`: ReadonlyArray‹A›): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ReadonlyArray‹A› |

___

### `Const` append

• **append**: *function* = curry(_append) as {
  <A>(value: A, list: ReadonlyArray<A>): A[]
  <A>(value: A): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/append/append.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/append/append.ts#L9)*

Append a value to the end of a list

**`param`** :: a

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`value`: A, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` appendOrRemove

• **appendOrRemove**: *function* = curry(<A>(item: A, items: ReadonlyArray<A>): A[] =>
  __appendOrRemove(item, items, id),
) as {
  <A>(item: A, items: ReadonlyArray<A>): A[]
  <A>(item: A): (items: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/appendOrRemove/index.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/appendOrRemove/index.ts#L15)*

Append a value to a list if it does not exist or remove if it does exist.
Useful for toggling things on/off.

**`param`** :: a

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`item`: A, `items`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`item` | A |
`items` | ReadonlyArray‹A› |

▸ <**A**>(`item`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`item` | A |

▸ (`items`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`items` | ReadonlyArray‹A› |

___

### `Const` appendOrRemoveBy

• **appendOrRemoveBy**: *function* = curry(__appendOrRemove) as {
  <A, B = A>(item: A, items: ReadonlyArray<A>, comparison: (value: A) => B): A[]
  <A>(item: A, items: ReadonlyArray<A>): <B = A>(comparison: (value: A) => B) => A[]
  <A>(item: A): {
    <B = A>(items: ReadonlyArray<A>, comparison: (value: A) => B): A[]
    (items: ReadonlyArray<A>): <B = A>(comparison: (value: A) => B) => A[]
  }
}

*Defined in [packages/list/source/appendOrRemove/index.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/appendOrRemove/index.ts#L31)*

Append a value to a list if it does not exist or remove if it does exist.
Allows providing a custom comparison function.

**`param`** :: a

**`param`** :: [a]

**`param`** :: (a -> b)

**`returns`** :: [a]

#### Type declaration:

▸ <**A**, **B**>(`item`: A, `items`: ReadonlyArray‹A›, `comparison`: function): *A[]*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **item**: *A*

▪ **items**: *ReadonlyArray‹A›*

▪ **comparison**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**A**>(`item`: A, `items`: ReadonlyArray‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`item` | A |
`items` | ReadonlyArray‹A› |

▸ <**B**>(`comparison`: function): *A[]*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **comparison**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**A**>(`item`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`item` | A |

▸ <**B**>(`items`: ReadonlyArray‹A›, `comparison`: function): *A[]*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **items**: *ReadonlyArray‹A›*

▪ **comparison**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`items`: ReadonlyArray‹A›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`items` | ReadonlyArray‹A› |

▸ <**B**>(`comparison`: function): *A[]*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **comparison**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

___

### `Const` ascend

• **ascend**: *function* = curry(function ascend<A, B extends ComparableValues>(
  f: (a: A) => B,
  a: A,
  b: A,
): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) {
    return -1
  }

  if (aa > bb) {
    return 1
  }

  return 0
}) as {
  <A, B extends ComparableValues>(f: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B extends ComparableValues>(f: (a: A) => B, a: A): (b: A) => ComparisonNumbers
  <A, B extends ComparableValues>(f: (a: A) => B): {
    (a: A, b: A): ComparisonNumbers
    (a: A): (b: A) => ComparisonNumbers
  }
}

*Defined in [packages/list/source/ascend/ascend.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/ascend/ascend.ts#L10)*

Sort a function in ascending order given a comparison function.

**`param`** :: (a -> b)

**`param`** :: a

**`param`** :: a

**`returns`** :: int

#### Type declaration:

▸ <**A**, **B**>(`f`: function, `a`: A, `b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Type parameters:**

▪ **A**

▪ **B**: *[ComparableValues](lambda.md#comparablevalues)*

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **a**: *A*

▪ **b**: *A*

▸ <**A**, **B**>(`f`: function, `a`: A): *function*

**Type parameters:**

▪ **A**

▪ **B**: *[ComparableValues](lambda.md#comparablevalues)*

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **a**: *A*

▸ (`b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A |

▸ <**A**, **B**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**: *[ComparableValues](lambda.md#comparablevalues)*

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ (`a`: A, `b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▸ (`a`: A): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ (`b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A |

___

### `Const` chain

• **chain**: *function* = curry((f, list) => unnest(list.map(f))) as {
  <A, B>(fn: Arity2<A, number, ReadonlyArray<B>>, list: ReadonlyArray<A>): B[]
  <A, B>(fn: Arity2<A, number, ReadonlyArray<B>>): (list: ReadonlyArray<A>) => B[]
}

*Defined in [packages/list/source/chain/chain.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/chain/chain.ts#L10)*

Combine a list of lists together by applying a function to
the values contained in a list.

**`param`** :: (a -> [b])

**`param`** :: [a]

**`returns`** :: [b]

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity2](lambda.md#arity2)‹A, number, ReadonlyArray‹B››, `list`: ReadonlyArray‹A›): *B[]*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹A, number, ReadonlyArray‹B›› |
`list` | ReadonlyArray‹A› |

▸ <**A**, **B**>(`fn`: [Arity2](lambda.md#arity2)‹A, number, ReadonlyArray‹B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity2](lambda.md#arity2)‹A, number, ReadonlyArray‹B›› |

▸ (`list`: ReadonlyArray‹A›): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` concat

• **concat**: *function* = curry((a, b) => a.concat(b)) as {
  <A>(head: ReadonlyArray<A>, tail: ReadonlyArray<A>): A[]
  <A>(head: ReadonlyArray<A>): (tail: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/concat/concat.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/concat/concat.ts#L9)*

Concatenate two lists together into one.

**`param`** :: [a]

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`head`: ReadonlyArray‹A›, `tail`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`head` | ReadonlyArray‹A› |
`tail` | ReadonlyArray‹A› |

▸ <**A**>(`head`: ReadonlyArray‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`head` | ReadonlyArray‹A› |

▸ (`tail`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`tail` | ReadonlyArray‹A› |

___

### `Const` contains

• **contains**: *function* = curry((value, list) => isJust(indexOf(value, list))) as {
  <A>(value: A, list: ArrayLike<A>): boolean
  <A>(value: A): (list: ArrayLike<A>) => boolean
}

*Defined in [packages/list/source/contains/contains.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/contains/contains.ts#L12)*

Returns true if a value is contained in a given list otherwise false.

**`param`** :: a

**`param`** :: [a]

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`value`: A, `list`: ArrayLike‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ArrayLike‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`list`: ArrayLike‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` descend

• **descend**: *function* = curry(function descend<A, B extends ComparableValues>(
  f: (a: A) => B,
  a: A,
  b: A,
): ComparisonNumbers {
  const aa = f(a)
  const bb = f(b)

  if (aa < bb) {
    return 1
  }

  if (aa > bb) {
    return -1
  }

  return 0
}) as {
  <A, B extends ComparableValues>(f: (a: A) => B, a: A, b: A): ComparisonNumbers
  <A, B extends ComparableValues>(f: (a: A) => B, a: A): (b: A) => ComparisonNumbers
  <A, B extends ComparableValues>(f: (a: A) => B): {
    (a: A, b: A): ComparisonNumbers
    (a: A): (b: A) => ComparisonNumbers
  }
}

*Defined in [packages/list/source/descend/descend.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/descend/descend.ts#L10)*

Sort a function in descending order given a comparison function.

**`param`** :: (a -> b)

**`param`** :: a

**`param`** :: a

**`returns`** :: int

#### Type declaration:

▸ <**A**, **B**>(`f`: function, `a`: A, `b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Type parameters:**

▪ **A**

▪ **B**: *[ComparableValues](lambda.md#comparablevalues)*

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **a**: *A*

▪ **b**: *A*

▸ <**A**, **B**>(`f`: function, `a`: A): *function*

**Type parameters:**

▪ **A**

▪ **B**: *[ComparableValues](lambda.md#comparablevalues)*

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▪ **a**: *A*

▸ (`b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A |

▸ <**A**, **B**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**: *[ComparableValues](lambda.md#comparablevalues)*

**Parameters:**

▪ **f**: *function*

▸ (`a`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ (`a`: A, `b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`b` | A |

▸ (`a`: A): *function*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |

▸ (`b`: A): *[ComparisonNumbers](lambda.md#comparisonnumbers)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | A |

___

### `Const` drop

• **drop**: *function* = curry(<A>(quantity: number, list: ReadonlyArray<A>): A[] =>
  list.slice(quantity),
) as {
  <A>(quantity: number, list: ReadonlyArray<A>): A[]
  <A>(quantity: number): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/drop/drop.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/drop/drop.ts#L9)*

Drop `n` amount of values from the beginning of a list.

**`param`** :: number

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`quantity`: number, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`quantity` | number |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`quantity`: number): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`quantity` | number |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` dropLast

• **dropLast**: *function* = curry(<A>(quantity: number, list: ReadonlyArray<A>): A[] =>
  list.slice(0, list.length - quantity),
) as {
  <A>(quantity: number, list: ReadonlyArray<A>): A[]
  <A>(quantity: number): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/dropLast/dropLast.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/dropLast/dropLast.ts#L9)*

Drop `n` amount of items from the end of a list

**`param`** :: number

**`param`** :: [a]

**`returns::`** [a]

#### Type declaration:

▸ <**A**>(`quantity`: number, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`quantity` | number |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`quantity`: number): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`quantity` | number |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` endsWith

• **endsWith**: *function* = curry(<A>(expected: ReadonlyArray<A>, list: ArrayLike<A>) =>
  equals(expected, slice(list.length - expected.length, list.length, list)),
) as {
  <A>(expected: ReadonlyArray<A>, list: ArrayLike<A>): boolean
  <A>(expected: ReadonlyArray<A>): (list: ArrayLike<A>) => boolean
}

*Defined in [packages/list/source/endsWith/index.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/endsWith/index.ts#L11)*

Returns true if a list ends with a given set of values otherwise false.

**`param`** :: [a]

**`param`** :: [a]

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`expected`: ReadonlyArray‹A›, `list`: ArrayLike‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | ReadonlyArray‹A› |
`list` | ArrayLike‹A› |

▸ <**A**>(`expected`: ReadonlyArray‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | ReadonlyArray‹A› |

▸ (`list`: ArrayLike‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` filter

• **filter**: *function* = curry(<A>(predicate: Predicate<A>, list: ReadonlyArray<A>): A[] => list.filter(predicate)) as {
  <A, B extends A>(predicate: Is<B>, list: ReadonlyArray<A>): B[]
  <B>(predicate: Is<B>): <A>(list: ReadonlyArray<A>) => B[]

  <A>(predicate: Predicate<A>, list: ReadonlyArray<A>): A[]
  <A>(predicate: Predicate<A>): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/filter/index.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/filter/index.ts#L9)*

Filter a list given a predicate.

**`param`** :: (a -> boolean)

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**, **B**>(`predicate`: [Is](lambda.md#is)‹B›, `list`: ReadonlyArray‹A›): *B[]*

**Type parameters:**

▪ **A**

▪ **B**: *A*

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](lambda.md#is)‹B› |
`list` | ReadonlyArray‹A› |

▸ <**B**>(`predicate`: [Is](lambda.md#is)‹B›): *function*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Is](lambda.md#is)‹B› |

▸ <**A**>(`list`: ReadonlyArray‹A›): *B[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` find

• **find**: *function* = curry(
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<A> =>
    map((index: number) => list[index], findIndex(predicate, list)),
) as {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<A>
}

*Defined in [packages/list/source/find/index.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/find/index.ts#L12)*

Search for a value in a list given a predicate.

**`param`** :: (a -> boolean)

**`param`** :: [a]

**`returns`** :: Maybe a

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹[NoInfer](list.md#noinfer)‹A››, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹[NoInfer](list.md#noinfer)‹A›› |
`list` | ArrayLike‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` findIndex

• **findIndex**: *function* = curry(
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<number> => {
    for (let i = 0; i < list.length; ++i) {
      if (predicate(list[i])) {
        return Maybe.of(i)
      }
    }

    return Nothing
  },
) as {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<number>
}

*Defined in [packages/list/source/findIndex/index.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/findIndex/index.ts#L11)*

Find the index of a value in an array like

**`param`** :: (a -> boolean)

**`param`** :: [a]

**`returns`** :: Maybe number

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹[NoInfer](list.md#noinfer)‹A››, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹[NoInfer](list.md#noinfer)‹A›› |
`list` | ArrayLike‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` findLast

• **findLast**: *function* = curry(__findLast) as {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<A>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<A>
}

*Defined in [packages/list/source/findLast/index.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/findLast/index.ts#L11)*

Find a value in an array-like starting from the end of the array-like

**`param`** :: (a -> boolean)

**`param`** :: [a]

**`returns`** :: Maybe a

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹[NoInfer](list.md#noinfer)‹A››, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹[NoInfer](list.md#noinfer)‹A›› |
`list` | ArrayLike‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` findLastIndex

• **findLastIndex**: *function* = curry(__findLastIndex) as {
  <A>(predicate: Predicate<NoInfer<A>>, list: ArrayLike<A>): Maybe<number>
  <A>(predicate: Predicate<A>): (list: ArrayLike<A>) => Maybe<number>
}

*Defined in [packages/list/source/findLastIndex/index.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/findLastIndex/index.ts#L11)*

Find the index of a value in an array-like starting from the end of the array-like.

**`param`** :: (a -> boolean)

**`param`** :: [a]

**`returns`** :: Maybe a

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹[NoInfer](list.md#noinfer)‹A››, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹[NoInfer](list.md#noinfer)‹A›› |
`list` | ArrayLike‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` forEach

• **forEach**: *function* = curry(__forEach) as {
  <R, A extends ArrayLike<R>>(f: Arity2<R, number, void>, list: A): A
  <R>(f: Arity2<R, number, void>): <A extends ArrayLike<R>>(list: A) => A
}

*Defined in [packages/list/source/forEach/index.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/forEach/index.ts#L12)*

Perform a side-effect on every value in an array like. Returns the
array-like passed in.

**`param`** :: (a -> number -> *)

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**R**, **A**>(`f`: [Arity2](lambda.md#arity2)‹R, number, void›, `list`: A): *A*

**Type parameters:**

▪ **R**

▪ **A**: *ArrayLike‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity2](lambda.md#arity2)‹R, number, void› |
`list` | A |

▸ <**R**>(`f`: [Arity2](lambda.md#arity2)‹R, number, void›): *function*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity2](lambda.md#arity2)‹R, number, void› |

▸ <**A**>(`list`: A): *A*

**Type parameters:**

▪ **A**: *ArrayLike‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | A |

___

### `Const` groupBy

• **groupBy**: *function* = curry(__groupBy) as {
  <A, B extends PropertyKey>(f: Arity1<A, B>, list: ReadonlyArray<A>): Record<B, A[]>
  <A, B extends PropertyKey>(f: Arity1<A, B>): (list: ReadonlyArray<A>) => Record<B, A[]>
}

*Defined in [packages/list/source/groupBy/index.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/groupBy/index.ts#L9)*

Converts a list of values into groups keyed by passed in function.

**`param`** :: a -> b

**`param`** :: [a]

**`returns`** 

#### Type declaration:

▸ <**A**, **B**>(`f`: [Arity1](lambda.md#arity1)‹A, B›, `list`: ReadonlyArray‹A›): *[Record](io.md#const-record)‹B, A[]›*

**Type parameters:**

▪ **A**

▪ **B**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, B› |
`list` | ReadonlyArray‹A› |

▸ <**A**, **B**>(`f`: [Arity1](lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, B› |

▸ (`list`: ReadonlyArray‹A›): *[Record](io.md#const-record)‹B, A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` includes

• **includes**: *function* = curry(
  <A>(value: A, list: ArrayLike<A>): boolean => indexOf(list, value) > -1,
) as {
  <A>(value: A, list: ArrayLike<A>): boolean
  <A>(value: A): (list: ArrayLike<A>) => boolean
}

*Defined in [packages/list/source/includes/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/includes/index.ts#L10)*

Returns true if a given value is contained in a list

**`param`** :: a

**`param`** :: [a]

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`value`: A, `list`: ArrayLike‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ArrayLike‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`list`: ArrayLike‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` indexOf

• **indexOf**: *function* = curry(
  <A>(value: A, list: ArrayLike<A>): Maybe<number> => {
    const index = _indexOf(list, value)

    return index > -1 ? Maybe.of(index) : Nothing
  },
) as {
  <A>(value: A, list: ArrayLike<A>): Maybe<number>
  <A>(value: A): (list: ArrayLike<A>) => Maybe<number>
}

*Defined in [packages/list/source/indexOf/indexOf.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/indexOf/indexOf.ts#L11)*

Find the index of a value

**`param`** :: a

**`param`** :: [a]

**`returns`** :: Maybe int

#### Type declaration:

▸ <**A**>(`value`: A, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ArrayLike‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` insert

• **insert**: *function* = curry(__insert) as {
  <A>(index: number, value: A, list: ReadonlyArray<A>): A[]
  <A>(index: number, value: A): (list: ReadonlyArray<A>) => A[]
  <A>(index: number): {
    (value: A, list: A[]): A[]
    (value: A): (list: A[]) => A[]
  }
}

*Defined in [packages/list/source/insert/insert.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/insert/insert.ts#L10)*

Insert a value at a given index

**`param`** :: int

**`param`** :: a

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`index`: number, `value`: A, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`value` | A |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`index`: number, `value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`value` | A |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`index`: number): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

▸ (`value`: A, `list`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | A[] |

▸ (`value`: A): *function*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`list`: A[]): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | A[] |

___

### `Const` isZero

• **isZero**: *function* = equals(0)

*Defined in [packages/list/source/remove/remove.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/remove/remove.ts#L4)*

#### Type declaration:

▸ (`value`: unknown): *value is A*

**Parameters:**

Name | Type |
------ | ------ |
`value` | unknown |

___

### `Const` join

• **join**: *function* = curry(__join) as {
  <A>(separator: string, list: ArrayLike<A>): string
  <A>(separator: string): (list: ArrayLike<A>) => string
}

*Defined in [packages/list/source/join/index.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/join/index.ts#L9)*

Going together a list into a string separated by some string.

**`param`** :: string

**`param`** :: [a]

**`returns`** :: string

#### Type declaration:

▸ <**A**>(`separator`: string, `list`: ArrayLike‹A›): *string*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string |
`list` | ArrayLike‹A› |

▸ <**A**>(`separator`: string): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string |

▸ (`list`: ArrayLike‹A›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` lastIndexOf

• **lastIndexOf**: *function* = curry(__lastIndexOf) as {
  <A>(value: A, list: ArrayLike<A>): Maybe<number>
  <A>(value: A): (list: ArrayLike<A>) => Maybe<number>
}

*Defined in [packages/list/source/lastIndexOf/index.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/lastIndexOf/index.ts#L12)*

Find the last index of a given value in a list

**`param`** :: a

**`param`** :: [a]

**`returns`** Maybe number

#### Type declaration:

▸ <**A**>(`value`: A, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ArrayLike‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` map

• **map**: *function* = curry((f, list) => mapArrayLike(f, list)) as {
  <A, B>(fn: Arity1<A, B>, list: ArrayLike<A>): B[]
  <A, B>(fn: Arity1<A, B>): (list: ArrayLike<A>) => B[]
}

*Defined in [packages/list/source/map/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/map/index.ts#L10)*

Map over a list of values

**`param`** :: (a -> b)

**`param`** :: [a]

**`returns`** :: [b]

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `list`: ArrayLike‹A›): *B[]*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`list` | ArrayLike‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |

▸ (`list`: ArrayLike‹A›): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` maybeFilter

• **maybeFilter**: *function* = curry(<A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: ReadonlyArray<B>): B[] => {
  if (isNothing(maybe)) {
    return list.slice()
  }

  const a = fromJust(maybe)

  return list.filter((b) => predicate(a, b))
}) as {
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>, list: ReadonlyArray<B>): B[]
  <A, B>(predicate: Predicate2<A, B>, maybe: Maybe<A>): (list: ReadonlyArray<B>) => B[]
  <A, B>(predicate: Predicate2<A, B>): {
    (maybe: Maybe<A>, list: ReadonlyArray<B>): B[]
    (maybe: Maybe<A>): (list: ReadonlyArray<B>) => B[]
  }
}

*Defined in [packages/list/source/filterMaybes.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/filterMaybes.ts#L19)*

Filter a list using a maybe value. Returns the list unchanged if maybe is Nothing.

**`param`** :: (a -> b -> boolean)

**`param`** :: Maybe a

**`param`** :: [b]

**`returns`** :: [b]

#### Type declaration:

▸ <**A**, **B**>(`predicate`: [Predicate2](lambda.md#predicate2)‹A, B›, `maybe`: [Maybe](io.md#const-maybe)‹A›, `list`: ReadonlyArray‹B›): *B[]*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate2](lambda.md#predicate2)‹A, B› |
`maybe` | [Maybe](io.md#const-maybe)‹A› |
`list` | ReadonlyArray‹B› |

▸ <**A**, **B**>(`predicate`: [Predicate2](lambda.md#predicate2)‹A, B›, `maybe`: [Maybe](io.md#const-maybe)‹A›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate2](lambda.md#predicate2)‹A, B› |
`maybe` | [Maybe](io.md#const-maybe)‹A› |

▸ (`list`: ReadonlyArray‹B›): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹B› |

▸ <**A**, **B**>(`predicate`: [Predicate2](lambda.md#predicate2)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate2](lambda.md#predicate2)‹A, B› |

▸ (`maybe`: [Maybe](io.md#const-maybe)‹A›, `list`: ReadonlyArray‹B›): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](io.md#const-maybe)‹A› |
`list` | ReadonlyArray‹B› |

▸ (`maybe`: [Maybe](io.md#const-maybe)‹A›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`maybe` | [Maybe](io.md#const-maybe)‹A› |

▸ (`list`: ReadonlyArray‹B›): *B[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹B› |

___

### `Const` move

• **move**: *function* = curry(__move) as {
  <A>(fromIndex: number, toIndex: number, list: ArrayLike<A>): A[]
  (fromIndex: number, toIndex: number): <A>(list: ArrayLike<A>) => A[]
  (fromIndex: number): {
    <A>(toIndex: number, list: ArrayLike<A>): A[]
    (toIndex: number): <A>(list: ArrayLike<A>) => A[]
  }
}

*Defined in [packages/list/source/move/index.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/move/index.ts#L12)*

Move a value from one index to another

**`param`** :: int

**`param`** :: int

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`fromIndex`: number, `toIndex`: number, `list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fromIndex` | number |
`toIndex` | number |
`list` | ArrayLike‹A› |

▸ (`fromIndex`: number, `toIndex`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`fromIndex` | number |
`toIndex` | number |

▸ <**A**>(`list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

▸ (`fromIndex`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`fromIndex` | number |

▸ <**A**>(`toIndex`: number, `list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`toIndex` | number |
`list` | ArrayLike‹A› |

▸ (`toIndex`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`toIndex` | number |

▸ <**A**>(`list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` multiSort

• **multiSort**: *function* = curry(function multiSort<A>(sortFns: Arity1<A, PropertyKey>[], list: ReadonlyArray<A>): A[] {
  return multiSortWithOrder(SortOrder.Ascending, sortFns, list)
})

*Defined in [packages/list/source/multiSort/multiSort.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/multiSort/multiSort.ts#L13)*

Order a list into groups and subgroups

**`param`** :: [(a -> PropertyKey)]

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`sortFns`: [Arity1](lambda.md#arity1)‹A, PropertyKey›[], `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`sortFns` | [Arity1](lambda.md#arity1)‹A, PropertyKey›[] |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`sortFns`: [Arity1](lambda.md#arity1)‹A, PropertyKey›[]): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`sortFns` | [Arity1](lambda.md#arity1)‹A, PropertyKey›[] |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` multiSortWithOrder

• **multiSortWithOrder**: *function* = curry(function multiSortWithOrder<A>(
  order: SortOrder,
  sortFns: Arity1<A, PropertyKey>[],
  list: ReadonlyArray<A>,
): A[] {
  if (sortFns.length === 0 || list.length === 0) {
    return list.slice()
  }

  const sort = order === SortOrder.Ascending ? ascend : descend
  const initialObject = groupBy(sortFns[0], list)
  const initialKeys = Object.keys(initialObject).sort(sort(id))
  const innerSortFns = sortFns.slice(1)
  const result = initialKeys.reduce((acc, key) => {
    acc[key] = multiSortWithOrder(order, innerSortFns, initialObject[key])

    return acc
  }, {} as Record<string, A[]>)

  return chain((x) => result[x], initialKeys)
})

*Defined in [packages/list/source/multiSort/multiSort.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/multiSort/multiSort.ts#L25)*

#### Type declaration:

▸ <**A**>(`order`: [SortOrder](../enums/list.sortorder.md), `sortFns`: [Arity1](lambda.md#arity1)‹A, PropertyKey›[], `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`order` | [SortOrder](../enums/list.sortorder.md) |
`sortFns` | [Arity1](lambda.md#arity1)‹A, PropertyKey›[] |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`order`: [SortOrder](../enums/list.sortorder.md), `sortFns`: [Arity1](lambda.md#arity1)‹A, PropertyKey›[]): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`order` | [SortOrder](../enums/list.sortorder.md) |
`sortFns` | [Arity1](lambda.md#arity1)‹A, PropertyKey›[] |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

▸ (`order`: [SortOrder](../enums/list.sortorder.md)): *function*

**Parameters:**

Name | Type |
------ | ------ |
`order` | [SortOrder](../enums/list.sortorder.md) |

▸ <**A**>(`sortFns`: [Arity1](lambda.md#arity1)‹A, PropertyKey›[], `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`sortFns` | [Arity1](lambda.md#arity1)‹A, PropertyKey›[] |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`sortFns`: [Arity1](lambda.md#arity1)‹A, PropertyKey›[]): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`sortFns` | [Arity1](lambda.md#arity1)‹A, PropertyKey›[] |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` prepend

• **prepend**: *function* = curry(<A>(value: A, list: A[]): A[] => [value].concat(list)) as {
  <A>(value: A, list: ReadonlyArray<A>): A[]
  <A>(value: A): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/prepend/prepend.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/prepend/prepend.ts#L9)*

Add a value at the beginning of a list

**`param`** :: a

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`value`: A, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` range

• **range**: *function* = curry(__range)

*Defined in [packages/list/source/range/range.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/range/range.ts#L9)*

Create a list of number from one number to another

**`param`** :: int

**`param`** :: int

**`retuns`** :: [int]

#### Type declaration:

▸ (`from`: number, `to`: number): *number[]*

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

▸ (`to`: number): *number[]*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

___

### `Const` reduce

• **reduce**: *function* = curry(
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B, list: ReadonlyArray<A>): B =>
    list.reduce(fn, seed),
) as {
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B, list: ReadonlyArray<A>): B
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B): (list: ReadonlyArray<A>) => B
  <A, B>(fn: (accumulator: B, value: A, index: number) => B): {
    (seed: B, list: ReadonlyArray<A>): B
    (seed: B): (list: ReadonlyArray<A>) => B
  }
}

*Defined in [packages/list/source/reduce/reduce.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduce/reduce.ts#L10)*

Reduce over a list of values.

**`param`** :: (b -> a -> b)

**`param`** :: b

**`param`** :: [a]

**`returns`** :: b

#### Type declaration:

▸ <**A**, **B**>(`fn`: function, `seed`: B, `list`: ReadonlyArray‹A›): *B*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`accumulator`: B, `value`: A, `index`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | B |
`value` | A |
`index` | number |

▪ **seed**: *B*

▪ **list**: *ReadonlyArray‹A›*

▸ <**A**, **B**>(`fn`: function, `seed`: B): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`accumulator`: B, `value`: A, `index`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | B |
`value` | A |
`index` | number |

▪ **seed**: *B*

▸ (`list`: ReadonlyArray‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

▸ <**A**, **B**>(`fn`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`accumulator`: B, `value`: A, `index`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | B |
`value` | A |
`index` | number |

▸ (`seed`: B, `list`: ReadonlyArray‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |
`list` | ReadonlyArray‹A› |

▸ (`seed`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |

▸ (`list`: ReadonlyArray‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` reduceBy

• **reduceBy**: *[ReduceByArity4](../interfaces/list.reducebyarity4.md)* = curry(
  <A, B>(
    f: (acc: B, x: A) => B,
    seed: B,
    by: (a: A) => PropertyKey,
    list: A[],
  ): { readonly [key: string]: B } => {
    const length = list.length
    const newObj: any = {}

    for (let i = 0; i < length; ++i) {
      const a = list[i]
      const key = by(a)
      const b = f(newObj[key] || seed, a)

      newObj[key] = b
    }

    return newObj
  },
) as ReduceByArity4

*Defined in [packages/list/source/reduceBy/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceBy/index.ts#L10)*

Group and reduce a list of values.

**`param`** :: (b -> a -> b)

**`param`** :: b

**`param`** :: (a -> PropertyKey)

**`returns`** 

___

### `Const` reduceRight

• **reduceRight**: *function* = curry(
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B, list: ReadonlyArray<A>): B =>
    list.reduceRight(fn, seed),
) as {
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B, list: ReadonlyArray<A>): B
  <A, B>(fn: (accumulator: B, value: A, index: number) => B, seed: B): (list: ReadonlyArray<A>) => B
  <A, B>(fn: (accumulator: B, value: A, index: number) => B): {
    (seed: B, list: ReadonlyArray<A>): B
    (seed: B): (list: ReadonlyArray<A>) => B
  }
}

*Defined in [packages/list/source/reduceRight/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reduceRight/index.ts#L10)*

Reduce over a list of values.

**`param`** :: (b -> a -> b)

**`param`** :: b

**`param`** :: [a]

**`returns`** :: b

#### Type declaration:

▸ <**A**, **B**>(`fn`: function, `seed`: B, `list`: ReadonlyArray‹A›): *B*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`accumulator`: B, `value`: A, `index`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | B |
`value` | A |
`index` | number |

▪ **seed**: *B*

▪ **list**: *ReadonlyArray‹A›*

▸ <**A**, **B**>(`fn`: function, `seed`: B): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`accumulator`: B, `value`: A, `index`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | B |
`value` | A |
`index` | number |

▪ **seed**: *B*

▸ (`list`: ReadonlyArray‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

▸ <**A**, **B**>(`fn`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`accumulator`: B, `value`: A, `index`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`accumulator` | B |
`value` | A |
`index` | number |

▸ (`seed`: B, `list`: ReadonlyArray‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |
`list` | ReadonlyArray‹A› |

▸ (`seed`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |

▸ (`list`: ReadonlyArray‹A›): *B*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` remove

• **remove**: *function* = curry(function remove<A>(
  index: number,
  amount: number,
  list: ReadonlyArray<A>,
): A[] {
  const length = list.length

  if (isZero(amount) || isZero(length) || index >= length) {
    return list.slice()
  }

  if (isZero(index) && amount >= length) {
    return []
  }

  const newList = Array(length - Math.abs(index) - 1)

  for (let i = 0; i < index; ++i) {
    newList[i] = list[i]
  }

  for (let i = index + amount; i < length; ++i) {
    newList[i - amount] = list[i]
  }

  return newList
}) as {
  <A>(index: number, amount: number, list: ReadonlyArray<A>): A[]
  (index: number, amount: number): <A>(list: ReadonlyArray<A>) => A[]
  (index: number): {
    <A>(amount: number, list: ReadonlyArray<A>): A[]
    (amount: number): <A>(list: ReadonlyArray<A>) => A[]
  }
}

*Defined in [packages/list/source/remove/remove.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/remove/remove.ts#L13)*

Remove values from a list at a given index.

**`param`** :: int

**`param`** :: int

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`index`: number, `amount`: number, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`amount` | number |
`list` | ReadonlyArray‹A› |

▸ (`index`: number, `amount`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`amount` | number |

▸ <**A**>(`list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

▸ (`index`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

▸ <**A**>(`amount`: number, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`list` | ReadonlyArray‹A› |

▸ (`amount`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

▸ <**A**>(`list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` slice

• **slice**: *function* = curry(<A>(from: number, to: number, list: ArrayLike<A>): A[] =>
  Array.from(list).slice(from, to),
) as {
  <A>(from: number, to: number, list: ArrayLike<A>): A[]
  (from: number, to: number): <A>(list: ArrayLike<A>) => A[]
  (from: number): {
    <A>(to: number, list: ArrayLike<A>): A[]
    (to: number): <A>(list: ArrayLike<A>) => A[]
  }
}

*Defined in [packages/list/source/slice/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/slice/index.ts#L10)*

Slice chunks out of a list

**`param`** :: int

**`param`** :: int

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`from`: number, `to`: number, `list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |
`list` | ArrayLike‹A› |

▸ (`from`: number, `to`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |

▸ <**A**>(`list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

▸ (`from`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |

▸ <**A**>(`to`: number, `list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |
`list` | ArrayLike‹A› |

▸ (`to`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

▸ <**A**>(`list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` sort

• **sort**: *function* = curry(<A>(sortFn: SortFn<A>, list: ReadonlyArray<A>): A[] =>
  list.slice().sort(sortFn),
) as {
  <A>(sortFn: SortFn<A>, list: ReadonlyArray<A>): A[]
  <A>(sortFn: SortFn<A>): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/sort/index.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/sort/index.ts#L9)*

Sort a list

**`param`** :: Comparable b => (a -> a -> b)

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`sortFn`: [SortFn](list.md#sortfn)‹A›, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`sortFn` | [SortFn](list.md#sortfn)‹A› |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`sortFn`: [SortFn](list.md#sortfn)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`sortFn` | [SortFn](list.md#sortfn)‹A› |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` splitAt

• **splitAt**: *function* = curry(
  <A>(index: number, list: ReadonlyArray<A>): Tuple<A[], A[]> => [
    list.slice(0, index),
    list.slice(index),
  ],
) as {
  <A>(index: number, list: ReadonlyArray<A>): Tuple<A[], A[]>
  <A>(index: number): (list: ReadonlyArray<A>) => Tuple<A[], A[]>
}

*Defined in [packages/list/source/splitAt/splitAt.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/splitAt/splitAt.ts#L7)*

Split a list into two parts at a given index

#### Type declaration:

▸ <**A**>(`index`: number, `list`: ReadonlyArray‹A›): *[Tuple](tuple.md#tuple)‹A[], A[]›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`index`: number): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

▸ (`list`: ReadonlyArray‹A›): *[Tuple](tuple.md#tuple)‹A[], A[]›*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` splitEvery

• **splitEvery**: *function* = curry(function splitEvery<A>(
  amount: number,
  list: ReadonlyArray<A>,
): A[][] {
  if (amount <= 0) {
    return [list.slice()]
  }

  const result: A[][] = []
  let i = 0

  while (i < list.length) {
    result.push(list.slice(i, (i += amount)))
  }

  return result
}) as {
  <A>(amount: number, list: ReadonlyArray<A>): A[][]
  <A>(amount: number): (list: ReadonlyArray<A>) => A[][]
}

*Defined in [packages/list/source/splitEvery/splitEvery.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/splitEvery/splitEvery.ts#L9)*

Split a list into a list of lists containing a specified amount of values.

**`param`** :: int

**`param`** :: [a]

**`returns`** :: [[a]]

#### Type declaration:

▸ <**A**>(`amount`: number, `list`: ReadonlyArray‹A›): *A[][]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`amount`: number): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

▸ (`list`: ReadonlyArray‹A›): *A[][]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` startsWith

• **startsWith**: *function* = curry(__startsWith) as {
  <A>(search: ArrayLike<A>, list: ArrayLike<A>): boolean
  <A>(search: ArrayLike<A>): (list: ArrayLike<A>) => boolean
}

*Defined in [packages/list/source/startsWith/startsWith.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/startsWith/startsWith.ts#L9)*

Checks if a list starts with a given set of values

**`param`** :: [a]

**`param`** :: [a]

**`returns`** :: boolean

#### Type declaration:

▸ <**A**>(`search`: ArrayLike‹A›, `list`: ArrayLike‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`search` | ArrayLike‹A› |
`list` | ArrayLike‹A› |

▸ <**A**>(`search`: ArrayLike‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`search` | ArrayLike‹A› |

▸ (`list`: ArrayLike‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` take

• **take**: *function* = curry(<A>(n: number, list: ReadonlyArray<A>) =>
  list.slice(0, n < 0 ? Infinity : n),
) as {
  <A>(n: number, list: ReadonlyArray<A>): A[]
  <A>(n: number): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/take/index.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/take/index.ts#L9)*

Take `n` number of values from the beginning of a list

**`param`** :: int

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`n`: number, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`n`: number): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` takeLast

• **takeLast**: *function* = curry(<A>(n: number, list: ReadonlyArray<A>) =>
  drop(n >= 0 ? list.length - n : 0, list),
) as {
  <A>(n: number, list: ReadonlyArray<A>): A[]
  <A>(n: number): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/takeLast/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/takeLast/index.ts#L10)*

Take `n` number of values from the end of a list

**`param`** :: int

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`n`: number, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`n`: number): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` takeLastWhile

• **takeLastWhile**: *function* = curry(_takeLastWhile)

*Defined in [packages/list/source/takeLastWhile/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/takeLastWhile/index.ts#L10)*

Take values from the ending of a list while predicate is true

**`param`** :: int

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`f`: function, `list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `i`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`i` | number |

▪ **list**: *ArrayLike‹A›*

▸ <**A**>(`f`: function): *function*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `i`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`i` | number |

▸ (`list`: ArrayLike‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` takeWhile

• **takeWhile**: *function* = curry(_takeWhile)

*Defined in [packages/list/source/takeWhile/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/takeWhile/index.ts#L10)*

Take values from the start of a list while predicate is true

**`param`** :: int

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`f`: function, `list`: ArrayLike‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `i`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`i` | number |

▪ **list**: *ArrayLike‹A›*

▸ <**A**>(`f`: function): *function*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `i`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`i` | number |

▸ (`list`: ArrayLike‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ArrayLike‹A› |

___

### `Const` uniq

• **uniq**: *function* = uniqBy(id)

*Defined in [packages/list/source/uniq/index.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/uniq/index.ts#L7)*

Get unique set of values contained in list.

#### Type declaration:

▸ <**A**>(`list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` uniqBy

• **uniqBy**: *function* = curry(
  <A, B>(toComparisonValue: (value: A, index: number) => B, list: ReadonlyArray<A>): A[] => {
    const valuesSeen: B[] = []
    const result: A[] = []

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < list.length; ++i) {
      const value = list[i]
      const comparisonValue = toComparisonValue(value, i)
      const valueHasBeenSeen = includes(comparisonValue, valuesSeen)

      if (!valueHasBeenSeen) {
        valuesSeen.push(comparisonValue)
        result.push(value)
      }
    }

    return result
  },
) as {
  <A, B>(toComparisonValue: (value: A, index: number) => B, list: ReadonlyArray<A>): A[]
  <A, B>(toComparisonValue: (value: A, index: number) => B): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/uniqBy/index.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/uniqBy/index.ts#L10)*

Remove duplicate values from a list given a comparison function.

**`param`** :: (a -> int -> b)

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**, **B**>(`toComparisonValue`: function, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **toComparisonValue**: *function*

▸ (`value`: A, `index`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`index` | number |

▪ **list**: *ReadonlyArray‹A›*

▸ <**A**, **B**>(`toComparisonValue`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **toComparisonValue**: *function*

▸ (`value`: A, `index`: number): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`index` | number |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` update

• **update**: *function* = curry(function update<A>(
  index: number,
  value: A,
  list: ReadonlyArray<A>,
): A[] {
  const length = list.length
  const newList = list.slice()

  if (length === 0 || index < 0 || index >= length) {
    return newList
  }

  newList[index] = value

  return newList
}) as {
  <A>(index: number, value: A, list: ReadonlyArray<A>): A[]
  <A>(index: number, value: A): (list: ReadonlyArray<A>) => A[]
  (index: number): {
    <A>(value: A, list: ReadonlyArray<A>): A[]
    <A>(value: A): (list: ReadonlyArray<A>) => A[]
  }
}

*Defined in [packages/list/source/update/update.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/update/update.ts#L10)*

Replace a value at a given index

**`param`** :: int

**`param`** :: a

**`param`** :: [a]

**`returns`** :: [a]

#### Type declaration:

▸ <**A**>(`index`: number, `value`: A, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`value` | A |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`index`: number, `value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`value` | A |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

▸ (`index`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

▸ <**A**>(`value`: A, `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` without

• **without**: *function* = curry(__without) as {
  <A>(values: A[], list: ReadonlyArray<A>): A[]
  <A>(values: A[]): (list: ReadonlyArray<A>) => A[]
}

*Defined in [packages/list/source/without/index.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/without/index.ts#L8)*

Returns a list without the specified values.

**`name`** without<A>(values: A[], list: A[]): Array<A>

#### Type declaration:

▸ <**A**>(`values`: A[], `list`: ReadonlyArray‹A›): *A[]*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`values` | A[] |
`list` | ReadonlyArray‹A› |

▸ <**A**>(`values`: A[]): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`values` | A[] |

▸ (`list`: ReadonlyArray‹A›): *A[]*

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› |

___

### `Const` zip

• **zip**: *function* = curry(function zip<A, B>(xs: ReadonlyArray<A>, ys: ReadonlyArray<B>): [A, B][] {
  const length = Math.min(xs.length, ys.length)
  const newList = Array(length)

  for (let i = 0; i < length; ++i) {
    newList[i] = [xs[i], ys[i]]
  }

  return newList
}) as {
  <A, B>(xs: ReadonlyArray<A>, ys: ReadonlyArray<B>): [A, B][]
  <A>(xs: ReadonlyArray<A>): <B>(ys: ReadonlyArray<B>) => [A, B][]
}

*Defined in [packages/list/source/zip/zip.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/zip/zip.ts#L9)*

Zip together two lists into a list of Tuples

**`param`** :: [a]

**`param`** :: [b]

**`returns`** :: [(a, b)]

#### Type declaration:

▸ <**A**, **B**>(`xs`: ReadonlyArray‹A›, `ys`: ReadonlyArray‹B›): *[A, B][]*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`xs` | ReadonlyArray‹A› |
`ys` | ReadonlyArray‹B› |

▸ <**A**>(`xs`: ReadonlyArray‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`xs` | ReadonlyArray‹A› |

▸ <**B**>(`ys`: ReadonlyArray‹B›): *[A, B][]*

**Type parameters:**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`ys` | ReadonlyArray‹B› |

## Functions

###  __appendOrRemove

▸ **__appendOrRemove**<**A**, **B**>(`item`: A, `items`: ReadonlyArray‹A›, `comparison`: function): *A[]*

*Defined in [packages/list/source/appendOrRemove/index.ts:40](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/appendOrRemove/index.ts#L40)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **item**: *A*

▪ **items**: *ReadonlyArray‹A›*

▪ **comparison**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *A[]*

___

###  __findLast

▸ **__findLast**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹A›*

*Defined in [packages/list/source/findLast/index.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/findLast/index.ts#L19)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`list` | ArrayLike‹A› |

**Returns:** *[Maybe](io.md#const-maybe)‹A›*

___

###  __findLastIndex

▸ **__findLastIndex**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

*Defined in [packages/list/source/findLastIndex/index.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/findLastIndex/index.ts#L19)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`list` | ArrayLike‹A› |

**Returns:** *[Maybe](io.md#const-maybe)‹number›*

___

###  __forEach

▸ **__forEach**<**R**, **A**>(`f`: [Arity2](lambda.md#arity2)‹R, number, void›, `list`: A): *A*

*Defined in [packages/list/source/forEach/index.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/forEach/index.ts#L17)*

**Type parameters:**

▪ **R**

▪ **A**: *ArrayLike‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity2](lambda.md#arity2)‹R, number, void› |
`list` | A |

**Returns:** *A*

___

###  __groupBy

▸ **__groupBy**<**A**, **B**>(`f`: [Arity1](lambda.md#arity1)‹A, B›, `list`: ReadonlyArray‹A›): *[Record](io.md#const-record)‹B, A[]›*

*Defined in [packages/list/source/groupBy/index.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/groupBy/index.ts#L14)*

**Type parameters:**

▪ **A**

▪ **B**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, B› |
`list` | ReadonlyArray‹A› |

**Returns:** *[Record](io.md#const-record)‹B, A[]›*

___

###  __insert

▸ **__insert**<**A**>(`index`: number, `value`: A, `list`: ReadonlyArray‹A›): *A[]*

*Defined in [packages/list/source/insert/insert.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/insert/insert.ts#L19)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`value` | A |
`list` | ReadonlyArray‹A› |

**Returns:** *A[]*

___

###  __join

▸ **__join**<**A**>(`separator`: string, `list`: ArrayLike‹A›): *string*

*Defined in [packages/list/source/join/index.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/join/index.ts#L14)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | string |
`list` | ArrayLike‹A› |

**Returns:** *string*

___

###  __lastIndexOf

▸ **__lastIndexOf**<**A**>(`value`: A, `list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹number›*

*Defined in [packages/list/source/lastIndexOf/index.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/lastIndexOf/index.ts#L17)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ArrayLike‹A› |

**Returns:** *[Maybe](io.md#const-maybe)‹number›*

___

###  __move

▸ **__move**<**A**>(`fromIndex`: number, `toIndex`: number, `list`: ArrayLike‹A›): *A[]*

*Defined in [packages/list/source/move/index.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/move/index.ts#L21)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fromIndex` | number |
`toIndex` | number |
`list` | ArrayLike‹A› |

**Returns:** *A[]*

___

###  __range

▸ **__range**(`from`: number, `to`: number): *number[]*

*Defined in [packages/list/source/range/range.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/range/range.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |

**Returns:** *number[]*

___

###  __startsWith

▸ **__startsWith**<**A**>(`search`: ArrayLike‹A›, `list`: ArrayLike‹A›): *boolean*

*Defined in [packages/list/source/startsWith/startsWith.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/startsWith/startsWith.ts#L14)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`search` | ArrayLike‹A› |
`list` | ArrayLike‹A› |

**Returns:** *boolean*

___

###  __without

▸ **__without**<**A**>(`values`: A[], `list`: ReadonlyArray‹A›): *A[]*

*Defined in [packages/list/source/without/index.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/without/index.ts#L13)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`values` | A[] |
`list` | ReadonlyArray‹A› |

**Returns:** *A[]*

___

###  _append

▸ **_append**<**A**>(`value`: A, `list`: ReadonlyArray‹A›): *A[]*

*Defined in [packages/list/source/append/append.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/append/append.ts#L14)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`list` | ReadonlyArray‹A› |

**Returns:** *A[]*

___

###  _takeLastWhile

▸ **_takeLastWhile**<**A**>(`f`: function, `list`: ArrayLike‹A›): *A[]*

*Defined in [packages/list/source/takeLastWhile/index.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/takeLastWhile/index.ts#L15)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `i`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`i` | number |

▪ **list**: *ArrayLike‹A›*

**Returns:** *A[]*

___

###  _takeWhile

▸ **_takeWhile**<**A**>(`f`: function, `list`: ArrayLike‹A›): *A[]*

*Defined in [packages/list/source/takeWhile/index.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/takeWhile/index.ts#L15)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **f**: *function*

▸ (`a`: A, `i`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | A |
`i` | number |

▪ **list**: *ArrayLike‹A›*

**Returns:** *A[]*

___

###  between

▸ **between**(`min`: number, `max`: number): *function*

*Defined in [packages/list/source/move/index.ts:53](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/move/index.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *function*

▸ (`num`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

___

### `Const` filterMaybes

▸ **filterMaybes**<**A**>(`list`: ReadonlyArray‹[Maybe](io.md#const-maybe)‹A››): *A[]*

*Defined in [packages/list/source/filterMaybes.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/filterMaybes.ts#L9)*

Flatten a list of maybes into a list of values.

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹[Maybe](io.md#const-maybe)‹A›› |

**Returns:** *A[]*

:: [a]

___

###  findMovedIndex

▸ **findMovedIndex**(`i`: number, `fromIndex`: number, `toIndex`: number): *number*

*Defined in [packages/list/source/move/index.ts:36](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/move/index.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`i` | number |
`fromIndex` | number |
`toIndex` | number |

**Returns:** *number*

___

###  flatten

▸ **flatten**<**A**>(`list`: ReadonlyArray‹A› | [NestedArray](list.md#nestedarray)‹A› | [NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹A›› | [NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹A››› | [NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹A››››): *A[]*

*Defined in [packages/list/source/flatten/flatten.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/flatten/flatten.ts#L6)*

Flatten an array of arrays into a single array.

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`list` | ReadonlyArray‹A› &#124; [NestedArray](list.md#nestedarray)‹A› &#124; [NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹A›› &#124; [NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹A››› &#124; [NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹[NestedArray](list.md#nestedarray)‹A›››› |

**Returns:** *A[]*

___

###  flattenReducer

▸ **flattenReducer**<**A**>(`acc`: A[], `value`: A | A[]): *A[]*

*Defined in [packages/list/source/flatten/flatten.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/flatten/flatten.ts#L17)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`acc` | A[] |
`value` | A &#124; A[] |

**Returns:** *A[]*

___

###  groupByReducer

▸ **groupByReducer**<**A**, **B**>(`f`: [Arity1](lambda.md#arity1)‹A, B›): *(Anonymous function)*

*Defined in [packages/list/source/groupBy/index.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/groupBy/index.ts#L21)*

**Type parameters:**

▪ **A**

▪ **B**: *PropertyKey*

**Parameters:**

Name | Type |
------ | ------ |
`f` | [Arity1](lambda.md#arity1)‹A, B› |

**Returns:** *(Anonymous function)*

___

### `Const` head

▸ **head**<**A**>(`list`: ArrayLike‹A›): *Nothing | Just‹A›*

*Defined in [packages/list/source/head/index.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/head/index.ts#L8)*

Returns the head of a list

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | ArrayLike‹A› | :: [a] |

**Returns:** *Nothing | Just‹A›*

:: Maybe a

___

### `Const` last

▸ **last**<**A**>(`list`: ArrayLike‹A›): *[Maybe](io.md#const-maybe)‹A›*

*Defined in [packages/list/source/last/index.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/last/index.ts#L8)*

Returns the last value in a given list

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | ArrayLike‹A› | :: [a] |

**Returns:** *[Maybe](io.md#const-maybe)‹A›*

:: Maybe a

___

### `Const` length

▸ **length**<**A**>(`list`: A): *number*

*Defined in [packages/list/source/length/index.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/length/index.ts#L6)*

Return the length of a list

**Type parameters:**

▪ **A**: *object*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | A | :: [a] |

**Returns:** *number*

number

___

###  outOfBounds

▸ **outOfBounds**(`length`: number, `value`: number): *boolean*

*Defined in [packages/list/source/move/index.ts:49](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/move/index.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |
`value` | number |

**Returns:** *boolean*

___

### `Const` reverse

▸ **reverse**<**A**>(`list`: ReadonlyArray‹A›): *A[]*

*Defined in [packages/list/source/reverse/index.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/reverse/index.ts#L6)*

Reverse the order of a list's value.

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | ReadonlyArray‹A› | :: [a] |

**Returns:** *A[]*

:: [a]

___

###  unnest

▸ **unnest**<**A**>(`nestedList`: ReadonlyArray‹ReadonlyArray‹A››): *A[]*

*Defined in [packages/list/source/chain/chain.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/list/source/chain/chain.ts#L20)*

Flatten a list of lists with a depth of 1.

**`returns::`** [a]

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nestedList` | ReadonlyArray‹ReadonlyArray‹A›› | :: [[a]] |

**Returns:** *A[]*
