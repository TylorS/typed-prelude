[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [tuple](tuple.md)

# Package: tuple

# @typed/tuple

> Functions for working with pairs of values

## Index

### Type aliases

* [First](tuple.md#first)
* [Second](tuple.md#second)
* [Tuple](tuple.md#tuple)

### Variables

* [ap](tuple.md#const-ap)
* [apLeft](tuple.md#const-apleft)
* [chain](tuple.md#const-chain)
* [chainLeft](tuple.md#const-chainleft)
* [map](tuple.md#const-map)
* [mapLeft](tuple.md#const-mapleft)

### Functions

* [first](tuple.md#const-first)
* [second](tuple.md#const-second)
* [swap](tuple.md#const-swap)

## Type aliases

###  First

Ƭ **First**: *A[0]*

*Defined in [packages/tuple/source/tuple.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/tuple.ts#L2)*

___

###  Second

Ƭ **Second**: *A[1]*

*Defined in [packages/tuple/source/tuple.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/tuple.ts#L3)*

___

###  Tuple

Ƭ **Tuple**: *keyof [A, B]*

*Defined in [packages/tuple/source/tuple.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/tuple.ts#L1)*

## Variables

### `Const` ap

• **ap**: *function* = curry(
  <A, B, C>(fn: Tuple<A, Arity1<B, C>>, value: Tuple<A, B>): Tuple<A, C> =>
    chain((f) => map(f, value), fn),
)

*Defined in [packages/tuple/source/ap.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/ap.ts#L12)*

Apply the function in a tuple to the values in another using the second value.

**`param`** :: Tuple a (b -> Tuple a c)

**`param`** :: Tuple a b

**`returns`** Tuple a c

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Tuple](tuple.md#tuple)‹A, [Arity1](lambda.md#arity1)‹B, C››, `value`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Tuple](tuple.md#tuple)‹A, [Arity1](lambda.md#arity1)‹B, C›› |
`value` | [Tuple](tuple.md#tuple)‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [Tuple](tuple.md#tuple)‹A, [Arity1](lambda.md#arity1)‹B, C››): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Tuple](tuple.md#tuple)‹A, [Arity1](lambda.md#arity1)‹B, C›› |

▸ (`value`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Tuple](tuple.md#tuple)‹A, B› |

___

### `Const` apLeft

• **apLeft**: *function* = curry(
  <A, B, C>(fn: Tuple<Arity1<A, C>, B>, tuple: Tuple<A, B>): Tuple<C, B> =>
    chainLeft((f) => mapLeft(f, tuple), fn),
)

*Defined in [packages/tuple/source/apLeft.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/apLeft.ts#L12)*

Apply the function in a tuple to the values in another using the left value.

**`param`** :: Tuple (a -> Tuple a c) b

**`param`** :: Tuple a b

**`returns`** Tuple a c

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Tuple](tuple.md#tuple)‹[Arity1](lambda.md#arity1)‹A, C›, B›, `tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹C, B›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Tuple](tuple.md#tuple)‹[Arity1](lambda.md#arity1)‹A, C›, B› |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [Tuple](tuple.md#tuple)‹[Arity1](lambda.md#arity1)‹A, C›, B›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Tuple](tuple.md#tuple)‹[Arity1](lambda.md#arity1)‹A, C›, B› |

▸ (`tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹C, B›*

**Parameters:**

Name | Type |
------ | ------ |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

___

### `Const` chain

• **chain**: *function* = curry(
  <A, B, C>(fn: Arity1<B, Tuple<A, C>>, tuple: Tuple<A, B>): Tuple<A, C> => fn(second(tuple)),
)

*Defined in [packages/tuple/source/chain.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/chain.ts#L10)*

Chain together tuples using the `second` value of a given tuple.

**`param`** :: (b -> Tuple a c)

**`param`** :: Tuple a b

**`returns`** Tuple a c

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, [Tuple](tuple.md#tuple)‹A, C››, `tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, [Tuple](tuple.md#tuple)‹A, C›› |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, [Tuple](tuple.md#tuple)‹A, C››): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, [Tuple](tuple.md#tuple)‹A, C›› |

▸ (`tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

___

### `Const` chainLeft

• **chainLeft**: *function* = curry(
  <A, B, C>(fn: Arity1<A, Tuple<C, B>>, tuple: Tuple<A, B>): Tuple<C, B> => fn(first(tuple)),
)

*Defined in [packages/tuple/source/chainLeft.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/chainLeft.ts#L10)*

Chain together tuples using the `first` value of a given tuple.

**`param`** :: (a -> Tuple a c)

**`param`** :: Tuple a b

**`returns`** Tuple a c

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹A, [Tuple](tuple.md#tuple)‹C, B››, `tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹C, B›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, [Tuple](tuple.md#tuple)‹C, B›› |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹A, [Tuple](tuple.md#tuple)‹C, B››): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, [Tuple](tuple.md#tuple)‹C, B›› |

▸ (`tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹C, B›*

**Parameters:**

Name | Type |
------ | ------ |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

___

### `Const` map

• **map**: *function* = curry(
  <A, B, C>(fn: Arity1<B, C>, tuple: Tuple<A, B>): Tuple<A, C> => [first(tuple), fn(second(tuple))],
)

*Defined in [packages/tuple/source/map.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/map.ts#L10)*

Map the second value of a tuple

**`param`** (b -> c)

**`param`** :: Tuple a b

**`returns`** :: Tuple a c

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›, `tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹B, C›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹B, C› |

▸ (`tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

___

### `Const` mapLeft

• **mapLeft**: *function* = curry(
  <A, B, C>(fn: Arity1<A, C>, tuple: Tuple<A, B>): Tuple<C, B> => [fn(first(tuple)), second(tuple)],
)

*Defined in [packages/tuple/source/mapLeft.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/mapLeft.ts#L10)*

Map the first value of a tuple

**`param`** (a -> c)

**`param`** :: Tuple a b

**`returns`** :: Tuple c b

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹A, C›, `tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹C, B›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, C› |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [Arity1](lambda.md#arity1)‹A, C›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [Arity1](lambda.md#arity1)‹A, C› |

▸ (`tuple`: [Tuple](tuple.md#tuple)‹A, B›): *[Tuple](tuple.md#tuple)‹C, B›*

**Parameters:**

Name | Type |
------ | ------ |
`tuple` | [Tuple](tuple.md#tuple)‹A, B› |

## Functions

### `Const` first

▸ **first**<**T**>(`tuple`: T): *[First](tuple.md#first)‹T›*

*Defined in [packages/tuple/source/tuple.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/tuple.ts#L5)*

**Type parameters:**

▪ **T**: *[Tuple](tuple.md#tuple)*

**Parameters:**

Name | Type |
------ | ------ |
`tuple` | T |

**Returns:** *[First](tuple.md#first)‹T›*

___

### `Const` second

▸ **second**<**T**>(`tuple`: T): *[Second](tuple.md#second)‹T›*

*Defined in [packages/tuple/source/tuple.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/tuple.ts#L6)*

**Type parameters:**

▪ **T**: *[Tuple](tuple.md#tuple)*

**Parameters:**

Name | Type |
------ | ------ |
`tuple` | T |

**Returns:** *[Second](tuple.md#second)‹T›*

___

### `Const` swap

▸ **swap**<**T**>(`tuple`: T): *[Tuple](tuple.md#tuple)‹[Second](tuple.md#second)‹T›, [First](tuple.md#first)‹T››*

*Defined in [packages/tuple/source/swap.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/tuple/source/swap.ts#L8)*

Swap the values contained in a tuple

**Type parameters:**

▪ **T**: *[Tuple](tuple.md#tuple)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tuple` | T | :: Tuple a b |

**Returns:** *[Tuple](tuple.md#tuple)‹[Second](tuple.md#second)‹T›, [First](tuple.md#first)‹T››*

:: Tuple b a
