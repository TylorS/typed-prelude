[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [objects](../modules/objects.md) › [MutableSet](objects.mutableset.md)

# Interface: MutableSet <**V**>

## Type parameters

▪ **V**

## Hierarchy

* [Set](objects.mutableset.md#set)‹[Mutable](../modules/objects.md#mutable)‹V››

  ↳ **MutableSet**

## Index

### Properties

* [Set](objects.mutableset.md#set)
* [[Symbol.toStringTag]](objects.mutableset.md#readonly-[symbol.tostringtag])
* [size](objects.mutableset.md#readonly-size)

### Methods

* [[Symbol.iterator]](objects.mutableset.md#[symbol.iterator])
* [add](objects.mutableset.md#add)
* [clear](objects.mutableset.md#clear)
* [delete](objects.mutableset.md#delete)
* [entries](objects.mutableset.md#entries)
* [forEach](objects.mutableset.md#foreach)
* [has](objects.mutableset.md#has)
* [keys](objects.mutableset.md#keys)
* [values](objects.mutableset.md#values)

## Properties

###  Set

• **Set**: *SetConstructor*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:71

___

### `Readonly` [Symbol.toStringTag]

• **[Symbol.toStringTag]**: *string*

*Inherited from [MutableSet](objects.mutableset.md).[[Symbol.toStringTag]](objects.mutableset.md#readonly-[symbol.tostringtag])*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:138

___

### `Readonly` size

• **size**: *number*

*Inherited from [MutableSet](objects.mutableset.md).[size](objects.mutableset.md#readonly-size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:64

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹V››*

*Inherited from [MutableSet](objects.mutableset.md).[[Symbol.iterator]](objects.mutableset.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:171

Iterates over values in the set.

**Returns:** *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹V››*

___

###  add

▸ **add**(`value`: [Mutable](../modules/objects.md#mutable)‹V›): *this*

*Inherited from [MutableSet](objects.mutableset.md).[add](objects.mutableset.md#add)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:59

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹V› |

**Returns:** *this*

___

###  clear

▸ **clear**(): *void*

*Inherited from [MutableSet](objects.mutableset.md).[clear](objects.mutableset.md#clear)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:60

**Returns:** *void*

___

###  delete

▸ **delete**(`value`: [Mutable](../modules/objects.md#mutable)‹V›): *boolean*

*Inherited from [MutableSet](objects.mutableset.md).[delete](objects.mutableset.md#delete)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:61

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹V› |

**Returns:** *boolean*

___

###  entries

▸ **entries**(): *IterableIterator‹[[Mutable](../modules/objects.md#mutable)‹V›, [Mutable](../modules/objects.md#mutable)‹V›]›*

*Inherited from [MutableSet](objects.mutableset.md).[entries](objects.mutableset.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:175

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *IterableIterator‹[[Mutable](../modules/objects.md#mutable)‹V›, [Mutable](../modules/objects.md#mutable)‹V›]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [MutableSet](objects.mutableset.md).[forEach](objects.mutableset.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:62

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Mutable](../modules/objects.md#mutable)‹V›, `value2`: [Mutable](../modules/objects.md#mutable)‹V›, `set`: [Set](objects.mutableset.md#set)‹[Mutable](../modules/objects.md#mutable)‹V››): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹V› |
`value2` | [Mutable](../modules/objects.md#mutable)‹V› |
`set` | [Set](objects.mutableset.md#set)‹[Mutable](../modules/objects.md#mutable)‹V›› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: [Mutable](../modules/objects.md#mutable)‹V›): *boolean*

*Inherited from [MutableSet](objects.mutableset.md).[has](objects.mutableset.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:63

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Mutable](../modules/objects.md#mutable)‹V› |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹V››*

*Inherited from [MutableSet](objects.mutableset.md).[keys](objects.mutableset.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:179

Despite its name, returns an iterable of the values in the set,

**Returns:** *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹V››*

___

###  values

▸ **values**(): *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹V››*

*Inherited from [MutableSet](objects.mutableset.md).[values](objects.mutableset.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:184

Returns an iterable of values in the set.

**Returns:** *IterableIterator‹[Mutable](../modules/objects.md#mutable)‹V››*
