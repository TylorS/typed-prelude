[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [objects](../modules/objects.md) › [ImmutableMap](objects.immutablemap.md)

# Interface: ImmutableMap <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

* ReadonlyMap‹[Immutable](../modules/objects.md#immutable)‹K›, [Immutable](../modules/objects.md#immutable)‹V››

  ↳ **ImmutableMap**

## Index

### Properties

* [size](objects.immutablemap.md#readonly-size)

### Methods

* [[Symbol.iterator]](objects.immutablemap.md#[symbol.iterator])
* [entries](objects.immutablemap.md#entries)
* [forEach](objects.immutablemap.md#foreach)
* [get](objects.immutablemap.md#get)
* [has](objects.immutablemap.md#has)
* [keys](objects.immutablemap.md#keys)
* [values](objects.immutablemap.md#values)

## Properties

### `Readonly` size

• **size**: *number*

*Inherited from [ImmutableMap](objects.immutablemap.md).[size](objects.immutablemap.md#readonly-size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:42

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[[Immutable](../modules/objects.md#immutable)‹K›, [Immutable](../modules/objects.md#immutable)‹V›]›*

*Inherited from [ImmutableMap](objects.immutablemap.md).[[Symbol.iterator]](objects.immutablemap.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:141

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[[Immutable](../modules/objects.md#immutable)‹K›, [Immutable](../modules/objects.md#immutable)‹V›]›*

___

###  entries

▸ **entries**(): *IterableIterator‹[[Immutable](../modules/objects.md#immutable)‹K›, [Immutable](../modules/objects.md#immutable)‹V›]›*

*Inherited from [ImmutableMap](objects.immutablemap.md).[entries](objects.immutablemap.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:146

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[[Immutable](../modules/objects.md#immutable)‹K›, [Immutable](../modules/objects.md#immutable)‹V›]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [ImmutableMap](objects.immutablemap.md).[forEach](objects.immutablemap.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:39

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹V›, `key`: [Immutable](../modules/objects.md#immutable)‹K›, `map`: ReadonlyMap‹[Immutable](../modules/objects.md#immutable)‹K›, [Immutable](../modules/objects.md#immutable)‹V››): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹V› |
`key` | [Immutable](../modules/objects.md#immutable)‹K› |
`map` | ReadonlyMap‹[Immutable](../modules/objects.md#immutable)‹K›, [Immutable](../modules/objects.md#immutable)‹V›› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: [Immutable](../modules/objects.md#immutable)‹K›): *[Immutable](../modules/objects.md#immutable)‹V› | undefined*

*Inherited from [ImmutableMap](objects.immutablemap.md).[get](objects.immutablemap.md#get)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:40

**Parameters:**

Name | Type |
------ | ------ |
`key` | [Immutable](../modules/objects.md#immutable)‹K› |

**Returns:** *[Immutable](../modules/objects.md#immutable)‹V› | undefined*

___

###  has

▸ **has**(`key`: [Immutable](../modules/objects.md#immutable)‹K›): *boolean*

*Inherited from [ImmutableMap](objects.immutablemap.md).[has](objects.immutablemap.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:41

**Parameters:**

Name | Type |
------ | ------ |
`key` | [Immutable](../modules/objects.md#immutable)‹K› |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹K››*

*Inherited from [ImmutableMap](objects.immutablemap.md).[keys](objects.immutablemap.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:151

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹K››*

___

###  values

▸ **values**(): *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹V››*

*Inherited from [ImmutableMap](objects.immutablemap.md).[values](objects.immutablemap.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:156

Returns an iterable of values in the map

**Returns:** *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹V››*
