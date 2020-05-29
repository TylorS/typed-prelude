[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [objects](../modules/objects.md) › [MutableMap](objects.mutablemap.md)

# Interface: MutableMap <**K, V**>

## Type parameters

▪ **K**

▪ **V**

## Hierarchy

* [Map](objects.mutablemap.md#map)‹[Mutable](../modules/objects.md#mutable)‹K›, [Mutable](../modules/objects.md#mutable)‹V››

  ↳ **MutableMap**

## Index

### Properties

* [Map](objects.mutablemap.md#map)
* [[Symbol.toStringTag]](objects.mutablemap.md#readonly-[symbol.tostringtag])
* [size](objects.mutablemap.md#readonly-size)

### Methods

* [[Symbol.iterator]](objects.mutablemap.md#[symbol.iterator])
* [clear](objects.mutablemap.md#clear)
* [delete](objects.mutablemap.md#delete)
* [entries](objects.mutablemap.md#entries)
* [forEach](objects.mutablemap.md#foreach)
* [get](objects.mutablemap.md#get)
* [has](objects.mutablemap.md#has)
* [keys](objects.mutablemap.md#keys)
* [set](objects.mutablemap.md#set)
* [values](objects.mutablemap.md#values)

## Properties

###  Map

• **Map**: *MapConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:36

___

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [MutableMap](objects.mutablemap.md).[[Symbol.toStringTag]](objects.mutablemap.md#readonly-[symbol.tostringtag])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:130

___

### `Readonly` size

• **size**: *number*

*Inherited from [MutableMap](objects.mutablemap.md).[size](objects.mutablemap.md#readonly-size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[[Mutable](../modules/objects.md#mutable)‹K›, [Mutable](../modules/objects.md#mutable)‹V›]›*

*Inherited from [MutableMap](objects.mutablemap.md).[[Symbol.iterator]](objects.mutablemap.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

Returns an iterable of entries in the map.

**Returns:** *IterableIterator‹[[Mutable](../modules/objects.md#mutable)‹K›, [Mutable](../modules/objects.md#mutable)‹V›]›*

___

###  clear

▸ **clear**(): *void*

*Inherited from [MutableMap](objects.mutablemap.md).[clear](objects.mutablemap.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:22

**Returns:** *void*

___

###  delete

▸ **delete**(`key`: [Mutable](../modules/objects.md#mutable)‹K›): *boolean*

*Inherited from [MutableMap](objects.mutablemap.md).[delete](objects.mutablemap.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`key` | [Mutable](../modules/objects.md#mutable)‹K› |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[[Mutable](../modules/objects.md#mutable)‹K›, [Mutable](../modules/objects.md#mutable)‹V›]›*

*Inherited from [MutableMap](objects.mutablemap.md).[entries](objects.mutablemap.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator‹[[Mutable](../modules/objects.md#mutable)‹K›, [Mutable](../modules/objects.md#mutable)‹V›]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [MutableMap](objects.mutablemap.md).[forEach](objects.mutablemap.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:24

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹V›, `key`: [Mutable](../modules/objects.md#mutable)‹K›, `map`: [Map](objects.mutablemap.md#map)‹[Mutable](../modules/objects.md#mutable)‹K›, [Mutable](../modules/objects.md#mutable)‹V››): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹V› |
`key` | [Mutable](../modules/objects.md#mutable)‹K› |
`map` | [Map](objects.mutablemap.md#map)‹[Mutable](../modules/objects.md#mutable)‹K›, [Mutable](../modules/objects.md#mutable)‹V›› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  get

▸ **get**(`key`: [Mutable](../modules/objects.md#mutable)‹K›): *[Mutable](../modules/objects.md#mutable)‹V› | undefined*

*Inherited from [MutableMap](objects.mutablemap.md).[get](objects.mutablemap.md#get)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`key` | [Mutable](../modules/objects.md#mutable)‹K› |

**Returns:** *[Mutable](../modules/objects.md#mutable)‹V› | undefined*

___

###  has

▸ **has**(`key`: [Mutable](../modules/objects.md#mutable)‹K›): *boolean*

*Inherited from [MutableMap](objects.mutablemap.md).[has](objects.mutablemap.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:26

**Parameters:**

Name | Type |
------ | ------ |
`key` | [Mutable](../modules/objects.md#mutable)‹K› |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹K››*

*Inherited from [MutableMap](objects.mutablemap.md).[keys](objects.mutablemap.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

Returns an iterable of keys in the map

**Returns:** *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹K››*

___

###  set

▸ **set**(`key`: [Mutable](../modules/objects.md#mutable)‹K›, `value`: [Mutable](../modules/objects.md#mutable)‹V›): *this*

*Inherited from [MutableMap](objects.mutablemap.md).[set](objects.mutablemap.md#set)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:27

**Parameters:**

Name | Type |
------ | ------ |
`key` | [Mutable](../modules/objects.md#mutable)‹K› |
`value` | [Mutable](../modules/objects.md#mutable)‹V› |

**Returns:** *this*

___

###  values

▸ **values**(): *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹V››*

*Inherited from [MutableMap](objects.mutablemap.md).[values](objects.mutablemap.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:136

Returns an iterable of values in the map

**Returns:** *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹V››*
