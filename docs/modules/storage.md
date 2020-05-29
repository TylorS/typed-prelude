[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [storage](storage.md)

# Package: storage

# @typed/storage

> Cross-platform functions for working with the [`Storage` API](https://developer.mozilla.org/en-US/docs/Web/API/Storage)

## Index

### Classes

* [ServerStorage](../classes/storage.serverstorage.md)

### Interfaces

* [StorageEnv](../interfaces/storage.storageenv.md)

### Variables

* [setItem](storage.md#const-setitem)

### Functions

* [clear](storage.md#const-clear)
* [createScopedStorage](storage.md#createscopedstorage)
* [get](storage.md#get)
* [getAllKeysInScope](storage.md#getallkeysinscope)
* [getByIndex](storage.md#getbyindex)
* [getItem](storage.md#const-getitem)
* [proxyStorage](storage.md#proxystorage)
* [removeItem](storage.md#const-removeitem)
* [scopeStorage](storage.md#scopestorage)
* [serverStorage](storage.md#serverstorage)
* [set](storage.md#set)

## Variables

### `Const` setItem

• **setItem**: *function* = curry((key: string, value: string) =>
  Effect.fromEnv(
    withEnv<StorageEnv, string>(({ storage }) => (storage.setItem(key, value), value)),
  ),
)

*Defined in [packages/storage/source/setItem.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/setItem.ts#L12)*

Set an item in Storage

**`param`** :: string

**`param`** :: string

**`returns`** :: Env StorageEnv string

#### Type declaration:

▸ (`key`: string, `value`: string): *Effects‹[StorageEnv](../interfaces/storage.storageenv.md), string›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

▸ (`key`: string): *function*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

▸ (`value`: string): *Effects‹[StorageEnv](../interfaces/storage.storageenv.md), string›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

## Functions

### `Const` clear

▸ **clear**(): *Effects‹[StorageEnv](../interfaces/storage.storageenv.md), void›*

*Defined in [packages/storage/source/clear.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/clear.ts#L8)*

Clear storage

**Returns:** *Effects‹[StorageEnv](../interfaces/storage.storageenv.md), void›*

___

###  createScopedStorage

▸ **createScopedStorage**(`scope`: string, `storage`: Storage): *Storage*

*Defined in [packages/storage/source/scopeStorage.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/scopeStorage.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | string |
`storage` | Storage |

**Returns:** *Storage*

___

###  get

▸ **get**(`target`: Storage, `property`: keyof Storage): *any*

*Defined in [packages/storage/source/proxyStorage.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/proxyStorage.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | Storage |
`property` | keyof Storage |

**Returns:** *any*

___

###  getAllKeysInScope

▸ **getAllKeysInScope**(`scope`: string, `storage`: Storage): *string[]*

*Defined in [packages/storage/source/scopeStorage.ts:49](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/scopeStorage.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | string |
`storage` | Storage |

**Returns:** *string[]*

___

###  getByIndex

▸ **getByIndex**(`index`: number, `storage`: Storage): *null | string*

*Defined in [packages/storage/source/proxyStorage.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/proxyStorage.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |
`storage` | Storage |

**Returns:** *null | string*

___

### `Const` getItem

▸ **getItem**(`key`: string): *Effects‹[StorageEnv](../interfaces/storage.storageenv.md), [Maybe](io.md#const-maybe)‹string››*

*Defined in [packages/storage/source/getItem.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/getItem.ts#L11)*

Get an item in Storage

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | :: string |

**Returns:** *Effects‹[StorageEnv](../interfaces/storage.storageenv.md), [Maybe](io.md#const-maybe)‹string››*

:: Env StorageEnv (Maybe string)

___

###  proxyStorage

▸ **proxyStorage**(`storage`: Storage): *Storage*

*Defined in [packages/storage/source/proxyStorage.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/proxyStorage.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | Storage |

**Returns:** *Storage*

___

### `Const` removeItem

▸ **removeItem**(`key`: string): *Effects‹[StorageEnv](../interfaces/storage.storageenv.md), void›*

*Defined in [packages/storage/source/removeItem.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/removeItem.ts#L10)*

Remove an item in Storage

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | :: string |

**Returns:** *Effects‹[StorageEnv](../interfaces/storage.storageenv.md), void›*

:: Env StorageEnv void

___

###  scopeStorage

▸ **scopeStorage**(`scope`: string, `storage`: Storage): *Storage*

*Defined in [packages/storage/source/scopeStorage.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/scopeStorage.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`scope` | string |
`storage` | Storage |

**Returns:** *Storage*

___

###  serverStorage

▸ **serverStorage**(`map?`: Map‹string, string›): *Storage*

*Defined in [packages/storage/source/serverStorage.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/serverStorage.ts#L8)*

Create an in-memory implementation of Storage

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`map?` | Map‹string, string› | :: Map string string - Initial values |

**Returns:** *Storage*

:: Storage

___

###  set

▸ **set**(`target`: Storage, `property`: keyof Storage, `value`: string): *boolean*

*Defined in [packages/storage/source/proxyStorage.ts:23](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/storage/source/proxyStorage.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`target` | Storage |
`property` | keyof Storage |
`value` | string |

**Returns:** *boolean*
