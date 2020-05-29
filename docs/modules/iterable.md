[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [iterable](iterable.md)

# Package: iterable

# @typed/iterable

> Useful functions for working with Iterables 

## Index

### Variables

* [ap](iterable.md#const-ap)
* [append](iterable.md#const-append)
* [chain](iterable.md#const-chain)
* [concat](iterable.md#const-concat)
* [contains](iterable.md#const-contains)
* [drop](iterable.md#const-drop)
* [every](iterable.md#const-every)
* [filter](iterable.md#const-filter)
* [find](iterable.md#const-find)
* [findIndex](iterable.md#const-findindex)
* [forEach](iterable.md#const-foreach)
* [map](iterable.md#const-map)
* [prepend](iterable.md#const-prepend)
* [range](iterable.md#const-range)
* [rangeBy](iterable.md#const-rangeby)
* [reduce](iterable.md#const-reduce)
* [take](iterable.md#const-take)

### Functions

* [__append](iterable.md#__append)
* [__chain](iterable.md#__chain)
* [__concat](iterable.md#__concat)
* [__contains](iterable.md#__contains)
* [__drop](iterable.md#__drop)
* [__filter](iterable.md#__filter)
* [__find](iterable.md#__find)
* [__findIndex](iterable.md#__findindex)
* [__forEach](iterable.md#__foreach)
* [__map](iterable.md#__map)
* [__prepend](iterable.md#__prepend)
* [__rangeBy](iterable.md#__rangeby)
* [__reduce](iterable.md#__reduce)
* [__take](iterable.md#__take)
* [enumerate](iterable.md#enumerate)

## Variables

### `Const` ap

• **ap**: *function* = curry(
  <A, B>(fn: Iterable<Arity1<A, B>>, value: Iterable<A>): Iterable<B> =>
    chain((f) => map(f, value), fn),
) as {
  <A, B>(fn: Iterable<Arity1<A, B>>, value: Iterable<A>): Iterable<B>
  <A, B>(fn: Iterable<Arity1<A, B>>): (value: Iterable<A>) => Iterable<B>
}

*Defined in [packages/iterable/source/ap.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/ap.ts#L8)*

Apply an async iterable of functions to an async iterable of values.

#### Type declaration:

▸ <**A**, **B**>(`fn`: Iterable‹[Arity1](lambda.md#arity1)‹A, B››, `value`: Iterable‹A›): *Iterable‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Iterable‹[Arity1](lambda.md#arity1)‹A, B›› |
`value` | Iterable‹A› |

▸ <**A**, **B**>(`fn`: Iterable‹[Arity1](lambda.md#arity1)‹A, B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Iterable‹[Arity1](lambda.md#arity1)‹A, B›› |

▸ (`value`: Iterable‹A›): *Iterable‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Iterable‹A› |

___

### `Const` append

• **append**: *function* = curry(__append)

*Defined in [packages/iterable/source/append.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/append.ts#L3)*

#### Type declaration:

▸ <**A**>(`value`: A, `iterable`: Iterable‹A›): *Iterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`iterable` | Iterable‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`iterable`: Iterable‹A›): *Iterable‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` chain

• **chain**: *function* = curry(__chain)

*Defined in [packages/iterable/source/chain.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/chain.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, Iterable‹B››, `iterable`: Iterable‹A›): *Iterable‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, Iterable‹B›› |
`iterable` | Iterable‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, Iterable‹B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, Iterable‹B›› |

▸ (`iterable`: Iterable‹A›): *Iterable‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` concat

• **concat**: *function* = curry(__concat)

*Defined in [packages/iterable/source/concat.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/concat.ts#L3)*

#### Type declaration:

▸ <**A**>(`a`: Iterable‹A›, `b`: Iterable‹A›): *Iterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | Iterable‹A› |
`b` | Iterable‹A› |

▸ <**A**>(`a`: Iterable‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | Iterable‹A› |

▸ (`b`: Iterable‹A›): *Iterable‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`b` | Iterable‹A› |

___

### `Const` contains

• **contains**: *function* = curry(__contains)

*Defined in [packages/iterable/source/contains.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/contains.ts#L4)*

#### Type declaration:

▸ <**A**>(`value`: A, `iterable`: Iterable‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`iterable` | Iterable‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`iterable`: Iterable‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` drop

• **drop**: *function* = curry(__drop) as {
  <A>(amount: number, iterable: Iterable<A>): Iterable<A>
  (amount: number): <A>(iterable: Iterable<A>) => Iterable<A>
}

*Defined in [packages/iterable/source/drop.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/drop.ts#L3)*

#### Type declaration:

▸ <**A**>(`amount`: number, `iterable`: Iterable‹A›): *Iterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`iterable` | Iterable‹A› |

▸ (`amount`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

▸ <**A**>(`iterable`: Iterable‹A›): *Iterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` every

• **every**: *function* = curry(<A>(predicate: Predicate<A>, iterable: Iterable<A>): boolean =>
  Array.from(iterable).every(predicate),
)

*Defined in [packages/iterable/source/every.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/every.ts#L3)*

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `iterable`: Iterable‹A›): *boolean*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`iterable` | Iterable‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`iterable`: Iterable‹A›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` filter

• **filter**: *function* = curry(__filter)

*Defined in [packages/iterable/source/filter.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/filter.ts#L3)*

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `iterable`: Iterable‹A›): *Iterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`iterable` | Iterable‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`iterable`: Iterable‹A›): *Iterable‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` find

• **find**: *function* = curry(__find)

*Defined in [packages/iterable/source/find.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/find.ts#L4)*

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `iterable`: Iterable‹A›): *[Maybe](io.md#const-maybe)‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`iterable` | Iterable‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`iterable`: Iterable‹A›): *[Maybe](io.md#const-maybe)‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` findIndex

• **findIndex**: *function* = curry(__findIndex)

*Defined in [packages/iterable/source/findIndex.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/findIndex.ts#L4)*

#### Type declaration:

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `iterable`: Iterable‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`iterable` | Iterable‹A› |

▸ <**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |

▸ (`iterable`: Iterable‹A›): *[Maybe](io.md#const-maybe)‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` forEach

• **forEach**: *function* = curry(__forEach)

*Defined in [packages/iterable/source/forEach.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/forEach.ts#L3)*

#### Type declaration:

▸ <**A**>(`fn`: function, `iterable`: Iterable‹A›): *void*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **iterable**: *Iterable‹A›*

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

▸ (`iterable`: Iterable‹A›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` map

• **map**: *function* = curry(__map)

*Defined in [packages/iterable/source/map.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/map.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `iterable`: Iterable‹A›): *Iterable‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`iterable` | Iterable‹A› |

▸ <**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |

▸ (`iterable`: Iterable‹A›): *Iterable‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` prepend

• **prepend**: *function* = curry(__prepend)

*Defined in [packages/iterable/source/prepend.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/prepend.ts#L3)*

#### Type declaration:

▸ <**A**>(`value`: A, `iterable`: Iterable‹A›): *Iterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`iterable` | Iterable‹A› |

▸ <**A**>(`value`: A): *function*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`iterable`: Iterable‹A›): *Iterable‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` range

• **range**: *function* = curry((from: number, to: number) => __rangeBy(from, to, 1))

*Defined in [packages/iterable/source/range.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/range.ts#L6)*

Inclusive range by 1

#### Type declaration:

▸ (`from`: number, `to`: number): *Iterable‹number›*

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

▸ (`to`: number): *Iterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`to` | number |

___

### `Const` rangeBy

• **rangeBy**: *function* = curry(__rangeBy)

*Defined in [packages/iterable/source/range.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/range.ts#L14)*

Inclusive range by given increment

#### Type declaration:

▸ (`from`: number, `to`: number, `by`: number): *Iterable‹number›*

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

▸ (`by`: number): *Iterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`by` | number |

▸ (`from`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |

▸ (`to`: number, `by`: number): *Iterable‹number›*

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

▸ (`by`: number): *Iterable‹number›*

**Parameters:**

Name | Type |
------ | ------ |
`by` | number |

___

### `Const` reduce

• **reduce**: *function* = curry(__reduce) as any

*Defined in [packages/iterable/source/reduce.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/reduce.ts#L3)*

#### Type declaration:

▸ <**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹B, A, B›, `seed`: B, `iterable`: Iterable‹A›): *Promise‹B›*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹B, A, B› |
`seed` | B |
`iterable` | Iterable‹A› |

▸ <**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹B, A, B›, `seed`: B): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹B, A, B› |
`seed` | B |

▸ (`iterable`: Iterable‹A›): *Promise‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

▸ <**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹B, A, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹B, A, B› |

▸ (`seed`: B, `iterable`: Iterable‹A›): *Promise‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |
`iterable` | Iterable‹A› |

▸ (`seed`: B): *function*

**Parameters:**

Name | Type |
------ | ------ |
`seed` | B |

▸ (`iterable`: Iterable‹A›): *Promise‹B›*

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

___

### `Const` take

• **take**: *function* = curry(__take) as {
  <A>(amount: number, iterable: Iterable<A>): Iterable<A>
  (amount: number): <A>(iterable: Iterable<A>) => Iterable<A>
}

*Defined in [packages/iterable/source/take.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/take.ts#L3)*

#### Type declaration:

▸ <**A**>(`amount`: number, `iterable`: Iterable‹A›): *Iterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`iterable` | Iterable‹A› |

▸ (`amount`: number): *function*

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |

▸ <**A**>(`iterable`: Iterable‹A›): *Iterable‹A›*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

## Functions

###  __append

▸ **__append**<**A**>(`value`: A, `iterable`: Iterable‹A›): *Iterable‹A›*

*Defined in [packages/iterable/source/append.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/append.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`iterable` | Iterable‹A› |

**Returns:** *Iterable‹A›*

___

###  __chain

▸ **__chain**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, Iterable‹B››, `iterable`: Iterable‹A›): *Iterable‹B›*

*Defined in [packages/iterable/source/chain.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/chain.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, Iterable‹B›› |
`iterable` | Iterable‹A› |

**Returns:** *Iterable‹B›*

___

###  __concat

▸ **__concat**<**A**>(`a`: Iterable‹A›, `b`: Iterable‹A›): *Iterable‹A›*

*Defined in [packages/iterable/source/concat.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/concat.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`a` | Iterable‹A› |
`b` | Iterable‹A› |

**Returns:** *Iterable‹A›*

___

###  __contains

▸ **__contains**<**A**>(`value`: A, `iterable`: Iterable‹A›): *boolean*

*Defined in [packages/iterable/source/contains.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/contains.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`iterable` | Iterable‹A› |

**Returns:** *boolean*

___

###  __drop

▸ **__drop**<**A**>(`amount`: number, `iterable`: Iterable‹A›): *Iterable‹A›*

*Defined in [packages/iterable/source/drop.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/drop.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`iterable` | Iterable‹A› |

**Returns:** *Iterable‹A›*

___

###  __filter

▸ **__filter**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `iterable`: Iterable‹A›): *Iterable‹A›*

*Defined in [packages/iterable/source/filter.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/filter.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`iterable` | Iterable‹A› |

**Returns:** *Iterable‹A›*

___

###  __find

▸ **__find**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `iterable`: Iterable‹A›): *[Maybe](io.md#const-maybe)‹A›*

*Defined in [packages/iterable/source/find.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/find.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`iterable` | Iterable‹A› |

**Returns:** *[Maybe](io.md#const-maybe)‹A›*

___

###  __findIndex

▸ **__findIndex**<**A**>(`predicate`: [Predicate](lambda.md#predicate)‹A›, `iterable`: Iterable‹A›): *[Maybe](io.md#const-maybe)‹number›*

*Defined in [packages/iterable/source/findIndex.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/findIndex.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`predicate` | [Predicate](lambda.md#predicate)‹A› |
`iterable` | Iterable‹A› |

**Returns:** *[Maybe](io.md#const-maybe)‹number›*

___

###  __forEach

▸ **__forEach**<**A**>(`fn`: function, `iterable`: Iterable‹A›): *void*

*Defined in [packages/iterable/source/forEach.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/forEach.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **iterable**: *Iterable‹A›*

**Returns:** *void*

___

###  __map

▸ **__map**<**A**, **B**>(`fn`: [Arity1](lambda.md#arity1)‹A, B›, `iterable`: Iterable‹A›): *Iterable‹B›*

*Defined in [packages/iterable/source/map.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/map.ts#L8)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, B› |
`iterable` | Iterable‹A› |

**Returns:** *Iterable‹B›*

___

###  __prepend

▸ **__prepend**<**A**>(`value`: A, `iterable`: Iterable‹A›): *Iterable‹A›*

*Defined in [packages/iterable/source/prepend.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/prepend.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`iterable` | Iterable‹A› |

**Returns:** *Iterable‹A›*

___

###  __rangeBy

▸ **__rangeBy**(`from`: number, `to`: number, `by`: number): *Iterable‹number›*

*Defined in [packages/iterable/source/range.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/range.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`from` | number |
`to` | number |
`by` | number |

**Returns:** *Iterable‹number›*

___

###  __reduce

▸ **__reduce**<**A**, **B**>(`reducer`: [Arity2](lambda.md#arity2)‹B, A, B›, `seed`: B, `iterable`: Iterable‹A›): *B*

*Defined in [packages/iterable/source/reduce.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/reduce.ts#L12)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`reducer` | [Arity2](lambda.md#arity2)‹B, A, B› |
`seed` | B |
`iterable` | Iterable‹A› |

**Returns:** *B*

___

###  __take

▸ **__take**<**A**>(`amount`: number, `iterable`: Iterable‹A›): *Iterable‹A›*

*Defined in [packages/iterable/source/take.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/take.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`amount` | number |
`iterable` | Iterable‹A› |

**Returns:** *Iterable‹A›*

___

###  enumerate

▸ **enumerate**<**A**>(`iterable`: Iterable‹A›): *Iterable‹keyof [A, number]›*

*Defined in [packages/iterable/source/enumerate.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/iterable/source/enumerate.ts#L1)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`iterable` | Iterable‹A› |

**Returns:** *Iterable‹keyof [A, number]›*
