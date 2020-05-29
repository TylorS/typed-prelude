[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [storage](../modules/storage.md) › [ServerStorage](storage.serverstorage.md)

# Class: ServerStorage

## Hierarchy

* **ServerStorage**

## Implements

* Storage

## Index

### Constructors

* [constructor](storage.serverstorage.md#constructor)

### Properties

* [map](storage.serverstorage.md#map)

### Accessors

* [length](storage.serverstorage.md#length)

### Methods

* [clear](storage.serverstorage.md#clear)
* [getItem](storage.serverstorage.md#getitem)
* [key](storage.serverstorage.md#key)
* [removeItem](storage.serverstorage.md#removeitem)
* [setItem](storage.serverstorage.md#setitem)

## Constructors

###  constructor

\+ **new ServerStorage**(`map?`: Map‹string, string›): *[ServerStorage](storage.serverstorage.md)*

*Defined in [packages/storage/source/serverStorage.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`map?` | Map‹string, string› |

**Returns:** *[ServerStorage](storage.serverstorage.md)*

## Properties

###  map

• **map**: *[Map](../interfaces/objects.mutablemap.md#map)‹string, string›*

*Defined in [packages/storage/source/serverStorage.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L13)*

## Accessors

###  length

• **get length**(): *number*

*Defined in [packages/storage/source/serverStorage.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L19)*

**Returns:** *number*

## Methods

###  clear

▸ **clear**(): *void*

*Defined in [packages/storage/source/serverStorage.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L23)*

**Returns:** *void*

___

###  getItem

▸ **getItem**(`key`: string): *string | null*

*Defined in [packages/storage/source/serverStorage.ts:31](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *string | null*

___

###  key

▸ **key**(`index`: number): *string | null*

*Defined in [packages/storage/source/serverStorage.ts:35](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *string | null*

___

###  removeItem

▸ **removeItem**(`key`: string): *void*

*Defined in [packages/storage/source/serverStorage.ts:41](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*

___

###  setItem

▸ **setItem**(`key`: string, `value`: string): *void*

*Defined in [packages/storage/source/serverStorage.ts:27](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

**Returns:** *void*
