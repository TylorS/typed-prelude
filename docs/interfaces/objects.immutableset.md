[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [objects](../modules/objects.md) › [ImmutableSet](objects.immutableset.md)

# Interface: ImmutableSet <**V**>

## Type parameters

▪ **V**

## Hierarchy

* ReadonlySet‹[Immutable](../modules/objects.md#immutable)‹V››

  ↳ **ImmutableSet**

## Index

### Properties

* [size](objects.immutableset.md#readonly-size)

### Methods

* [[Symbol.iterator]](objects.immutableset.md#[symbol.iterator])
* [entries](objects.immutableset.md#entries)
* [forEach](objects.immutableset.md#foreach)
* [has](objects.immutableset.md#has)
* [keys](objects.immutableset.md#keys)
* [values](objects.immutableset.md#values)

## Properties

### `Readonly` size

• **size**: *number*

*Inherited from [ImmutableSet](objects.immutableset.md).[size](objects.immutableset.md#readonly-size)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:76

## Methods

###  [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹V››*

*Inherited from [ImmutableSet](objects.immutableset.md).[[Symbol.iterator]](objects.immutableset.md#[symbol.iterator])*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:189

Iterates over values in the set.

**Returns:** *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹V››*

___

###  entries

▸ **entries**(): *IterableIterator‹[[Immutable](../modules/objects.md#immutable)‹V›, [Immutable](../modules/objects.md#immutable)‹V›]›*

*Inherited from [ImmutableSet](objects.immutableset.md).[entries](objects.immutableset.md#entries)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:194

Returns an iterable of [v,v] pairs for every value `v` in the set.

**Returns:** *IterableIterator‹[[Immutable](../modules/objects.md#immutable)‹V›, [Immutable](../modules/objects.md#immutable)‹V›]›*

___

###  forEach

▸ **forEach**(`callbackfn`: function, `thisArg?`: any): *void*

*Inherited from [ImmutableSet](objects.immutableset.md).[forEach](objects.immutableset.md#foreach)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:74

**Parameters:**

▪ **callbackfn**: *function*

▸ (`value`: [Immutable](../modules/objects.md#immutable)‹V›, `value2`: [Immutable](../modules/objects.md#immutable)‹V›, `set`: ReadonlySet‹[Immutable](../modules/objects.md#immutable)‹V››): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹V› |
`value2` | [Immutable](../modules/objects.md#immutable)‹V› |
`set` | ReadonlySet‹[Immutable](../modules/objects.md#immutable)‹V›› |

▪`Optional`  **thisArg**: *any*

**Returns:** *void*

___

###  has

▸ **has**(`value`: [Immutable](../modules/objects.md#immutable)‹V›): *boolean*

*Inherited from [ImmutableSet](objects.immutableset.md).[has](objects.immutableset.md#has)*

Defined in node_modules/typescript/lib/lib.es2015.collection.d.ts:75

**Parameters:**

Name | Type |
------ | ------ |
`value` | [Immutable](../modules/objects.md#immutable)‹V› |

**Returns:** *boolean*

___

###  keys

▸ **keys**(): *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹V››*

*Inherited from [ImmutableSet](objects.immutableset.md).[keys](objects.immutableset.md#keys)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:199

Despite its name, returns an iterable of the values in the set,

**Returns:** *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹V››*

___

###  values

▸ **values**(): *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹V››*

*Inherited from [ImmutableSet](objects.immutableset.md).[values](objects.immutableset.md#values)*

Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:204

Returns an iterable of values in the set.

**Returns:** *IterableIterator‹[Immutable](../modules/objects.md#immutable)‹V››*
