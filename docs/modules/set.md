[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [set](set.md)

# Package: set

# @typed/set

> Functions for working with immutable `ReadonlySet`s

## Index

### Variables

* [add](set.md#const-add)
* [ap](set.md#const-ap)
* [chain](set.md#const-chain)
* [concat](set.md#const-concat)
* [difference](set.md#const-difference)
* [filter](set.md#const-filter)
* [forEach](set.md#const-foreach)
* [has](set.md#const-has)
* [intersection](set.md#const-intersection)
* [map](set.md#const-map)
* [remove](set.md#const-remove)
* [subset](set.md#const-subset)
* [subsetOf](set.md#const-subsetof)
* [withMutations](set.md#const-withmutations)

### Functions

* [__add](set.md#__add)
* [__filter](set.md#__filter)
* [__forEach](set.md#__foreach)
* [__has](set.md#__has)
* [__remove](set.md#__remove)
* [__subset](set.md#__subset)
* [__subsetOf](set.md#__subsetof)
* [__withMutations](set.md#__withmutations)
* [entries](set.md#const-entries)
* [size](set.md#const-size)
* [valuesOf](set.md#const-valuesof)

## Variables

### `Const` add

• **add**: *function* = curry(__add)

*Defined in [packages/set/source/add.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/add.ts#L4)*

#### Type declaration:

▸ <**A**>(`value`: A, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`set` | ReadonlySet‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

___

### `Const` ap

• **ap**: *function* = curry(
  <A, B>(fn: ReadonlySet<Arity1<A, B>>, value: ReadonlySet<A>): ReadonlySet<B> =>
    chain((f) => map(f, value), fn),
)

*Defined in [packages/set/source/ap.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/ap.ts#L5)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: ReadonlySet‹[Arity1](lambda.md#arity1)‹A, B››, `value`: ReadonlySet‹A›): *ReadonlySet‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | ReadonlySet‹[Arity1](lambda.md#arity1)‹A, B›› |
`value` | ReadonlySet‹A› |

▸ <**A**, **B**>(`fn`: ReadonlySet‹[Arity1](lambda.md#arity1)‹A, B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | ReadonlySet‹[Arity1](lambda.md#arity1)‹A, B›› |

▸ (`value`: ReadonlySet‹A›): *ReadonlySet‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | ReadonlySet‹A› |

___

### `Const` chain

• **chain**: *function* = curry(
  <A, B>(fn: Arity1<A, ReadonlySet<B>>, set: ReadonlySet<A>): ReadonlySet<B> => {
    const bs = new Set<B>()

    set.forEach((a) => fn(a).forEach((b) => bs.add(b)))

    return bs
  },
)

*Defined in [packages/set/source/chain.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/chain.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, ReadonlySet‹B››, `set`: ReadonlySet‹A›): *ReadonlySet‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, ReadonlySet‹B›› |
`set` | ReadonlySet‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, ReadonlySet‹B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, ReadonlySet‹B›› |

▸ (`set`: ReadonlySet‹A›): *ReadonlySet‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

___

### `Const` concat

• **concat**: *function* = curry(
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): ReadonlySet<A> => {
    const set = new Set()

    a.forEach((x) => set.add(x))
    b.forEach((x) => set.add(x))

    return set as ReadonlySet<A>
  },
)

*Defined in [packages/set/source/concat.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/concat.ts#L3)*

#### Type declaration:

▸ <**A**>(`a`: ReadonlySet‹A›, `b`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |
`b` | ReadonlySet‹A› |

▸ <**A**>(`a`: ReadonlySet‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |

▸ (`b`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | ReadonlySet‹A› |

___

### `Const` difference

• **difference**: *function* = curry(
  <A>(a: ReadonlySet<A>, differenceOf: ReadonlySet<A>): ReadonlySet<A> =>
    withMutations((x) => x.forEach((y) => a.has(y) && x.delete(y)), differenceOf),
)

*Defined in [packages/set/source/difference.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/difference.ts#L4)*

#### Type declaration:

▸ <**A**>(`a`: ReadonlySet‹A›, `differenceOf`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |
`differenceOf` | ReadonlySet‹A› |

▸ <**A**>(`a`: ReadonlySet‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |

▸ (`differenceOf`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`differenceOf` | ReadonlySet‹A› |

___

### `Const` filter

• **filter**: *function* = curry(__filter)

*Defined in [packages/set/source/filter.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/filter.ts#L3)*

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`set` | ReadonlySet‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

___

### `Const` forEach

• **forEach**: *function* = curry(__forEach)

*Defined in [packages/set/source/forEach.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/forEach.ts#L3)*

#### Type declaration:

▸ <**A**>(`fn`: [Arity1](lambda.md#arity1)‹A›, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A› |
`set` | ReadonlySet‹A› |

▸ <**A**>(`fn`: [Arity1](lambda.md#arity1)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A› |

▸ (`set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

___

### `Const` has

• **has**: *function* = curry(__has)

*Defined in [packages/set/source/has.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/has.ts#L3)*

#### Type declaration:

▸ <**A**>(`value`: A, `set`: ReadonlySet‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`set` | ReadonlySet‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`set`: ReadonlySet‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

___

### `Const` intersection

• **intersection**: *function* = curry(
  <A>(a: ReadonlySet<A>, b: ReadonlySet<A>): ReadonlySet<A> =>
    withMutations((x) => x.forEach((y) => !b.has(y) && x.delete(y)), a),
)

*Defined in [packages/set/source/intersection.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/intersection.ts#L4)*

#### Type declaration:

▸ <**A**>(`a`: ReadonlySet‹A›, `b`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |
`b` | ReadonlySet‹A› |

▸ <**A**>(`a`: ReadonlySet‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |

▸ (`b`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | ReadonlySet‹A› |

___

### `Const` map

• **map**: *function* = curry(
  <A, B>(fn: Arity1<A, B>, set: ReadonlySet<A>): ReadonlySet<B> => {
    const bs = new Set<B>()

    set.forEach((a) => bs.add(fn(a)))

    return bs
  },
)

*Defined in [packages/set/source/map.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/map.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `set`: ReadonlySet‹A›): *ReadonlySet‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`set` | ReadonlySet‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |

▸ (`set`: ReadonlySet‹A›): *ReadonlySet‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

___

### `Const` remove

• **remove**: *function* = curry(__remove)

*Defined in [packages/set/source/remove.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/remove.ts#L4)*

#### Type declaration:

▸ <**A**>(`value`: A, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`set` | ReadonlySet‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

___

### `Const` subset

• **subset**: *function* = curry(__subset)

*Defined in [packages/set/source/subset.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/subset.ts#L3)*

#### Type declaration:

▸ <**A**>(`a`: ReadonlySet‹A›, `b`: ReadonlySet‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |
`b` | ReadonlySet‹A› |

▸ <**A**>(`a`: ReadonlySet‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |

▸ (`b`: ReadonlySet‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`b` | ReadonlySet‹A› |

___

### `Const` subsetOf

• **subsetOf**: *function* = curry(__subsetOf)

*Defined in [packages/set/source/subset.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/subset.ts#L8)*

#### Type declaration:

▸ <**A**>(`a`: ReadonlySet‹A›, `b`: ReadonlySet‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |
`b` | ReadonlySet‹A› |

▸ <**A**>(`a`: ReadonlySet‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |

▸ (`b`: ReadonlySet‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`b` | ReadonlySet‹A› |

___

### `Const` withMutations

• **withMutations**: *function* = curry(__withMutations)

*Defined in [packages/set/source/withMutations.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/withMutations.ts#L3)*

#### Type declaration:

▸ <**A**>(`fn`: function, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`set`: [Set](../interfaces/objects.mutableset.md#set)‹A›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`set` | [Set](../interfaces/objects.mutableset.md#set)‹A› |

▪ **set**: *ReadonlySet‹A›*

▸ <**A**>(`fn`: function): *function*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`set`: [Set](../interfaces/objects.mutableset.md#set)‹A›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`set` | [Set](../interfaces/objects.mutableset.md#set)‹A› |

▸ (`set`: ReadonlySet‹A›): *ReadonlySet‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

## Functions

###  __add

▸ **__add**<**A**>(`value`: A, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

*Defined in [packages/set/source/add.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/add.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`set` | ReadonlySet‹A› |

**Returns:** *ReadonlySet‹A›*

___

###  __filter

▸ **__filter**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

*Defined in [packages/set/source/filter.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/filter.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`set` | ReadonlySet‹A› |

**Returns:** *ReadonlySet‹A›*

___

###  __forEach

▸ **__forEach**<**A**>(`fn`: [Arity1](lambda.md#arity1)‹A›, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

*Defined in [packages/set/source/forEach.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/forEach.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A› |
`set` | ReadonlySet‹A› |

**Returns:** *ReadonlySet‹A›*

___

###  __has

▸ **__has**<**A**>(`value`: A, `set`: ReadonlySet‹A›): *boolean*

*Defined in [packages/set/source/has.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/has.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`set` | ReadonlySet‹A› |

**Returns:** *boolean*

___

###  __remove

▸ **__remove**<**A**>(`value`: A, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

*Defined in [packages/set/source/remove.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/remove.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`set` | ReadonlySet‹A› |

**Returns:** *ReadonlySet‹A›*

___

###  __subset

▸ **__subset**<**A**>(`a`: ReadonlySet‹A›, `b`: ReadonlySet‹A›): *boolean*

*Defined in [packages/set/source/subset.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/subset.ts#L13)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | ReadonlySet‹A› |
`b` | ReadonlySet‹A› |

**Returns:** *boolean*

___

###  __subsetOf

▸ **__subsetOf**<**A**>(`b`: ReadonlySet‹A›, `a`: ReadonlySet‹A›): *boolean*

*Defined in [packages/set/source/subset.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/subset.ts#L17)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`b` | ReadonlySet‹A› |
`a` | ReadonlySet‹A› |

**Returns:** *boolean*

___

###  __withMutations

▸ **__withMutations**<**A**>(`fn`: function, `set`: ReadonlySet‹A›): *ReadonlySet‹A›*

*Defined in [packages/set/source/withMutations.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/withMutations.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`set`: [Set](../interfaces/objects.mutableset.md#set)‹A›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`set` | [Set](../interfaces/objects.mutableset.md#set)‹A› |

▪ **set**: *ReadonlySet‹A›*

**Returns:** *ReadonlySet‹A›*

___

### `Const` entries

▸ **entries**<**A**>(`set`: ReadonlySet‹A›): *IterableIterator‹[A, A]›*

*Defined in [packages/set/source/entries.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/entries.ts#L1)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

**Returns:** *IterableIterator‹[A, A]›*

___

### `Const` size

▸ **size**(`set`: ReadonlySet‹unknown›): *number*

*Defined in [packages/set/source/size.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/size.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹unknown› |

**Returns:** *number*

___

### `Const` valuesOf

▸ **valuesOf**<**A**>(`set`: ReadonlySet‹A›): *IterableIterator‹A›*

*Defined in [packages/set/source/valuesOf.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/set/source/valuesOf.ts#L1)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`set` | ReadonlySet‹A› |

**Returns:** *IterableIterator‹A›*
