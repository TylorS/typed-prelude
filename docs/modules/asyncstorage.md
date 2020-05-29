[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [asyncstorage](asyncstorage.md)

# Package: asyncstorage

# @typed/asyncstorage

AsyncStorage is an intentionally simple API for working with asynchronous storage destinations. Designed to
be used for key-value storage.

## Index

### Interfaces

* [AsyncStorage](../interfaces/asyncstorage.asyncstorage-1.md)

### Type aliases

* [IndexedDbEnv](asyncstorage.md#indexeddbenv)
* [ItemEffect](asyncstorage.md#itemeffect)
* [ItemsEffect](asyncstorage.md#itemseffect)

### Functions

* [createIndexedDb](asyncstorage.md#createindexeddb)
* [createIndexedDbAsyncStorage](asyncstorage.md#createindexeddbasyncstorage)
* [createServerIndexedDbFactory](asyncstorage.md#createserverindexeddbfactory)
* [destroyDb](asyncstorage.md#destroydb)
* [getAllKeys](asyncstorage.md#getallkeys)
* [getAllValues](asyncstorage.md#getallvalues)
* [getValue](asyncstorage.md#getvalue)
* [openDatabase](asyncstorage.md#opendatabase)
* [putValue](asyncstorage.md#putvalue)
* [removeValue](asyncstorage.md#removevalue)
* [tryCatch](asyncstorage.md#trycatch)
* [wrapStorage](asyncstorage.md#wrapstorage)

## Type aliases

###  IndexedDbEnv

Ƭ **IndexedDbEnv**: *object*

*Defined in [packages/asyncstorage/source/IndexedDb/createIndexedDb.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/createIndexedDb.ts#L12)*

#### Type declaration:

* **indexedDbFactory**: *IDBFactory*

___

###  ItemEffect

Ƭ **ItemEffect**: *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), A››*

*Defined in [packages/asyncstorage/source/AsyncStorage.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/AsyncStorage.ts#L16)*

___

###  ItemsEffect

Ƭ **ItemsEffect**: *[PureEffect](effects.md#pureeffect)‹[Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), keyof A[]››*

*Defined in [packages/asyncstorage/source/AsyncStorage.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/AsyncStorage.ts#L17)*

## Functions

###  createIndexedDb

▸ **createIndexedDb**<**A**>(`name`: string): *Effects‹[IndexedDbEnv](asyncstorage.md#indexeddbenv), [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [AsyncStorage](../interfaces/asyncstorage.asyncstorage-1.md)‹A›››*

*Defined in [packages/asyncstorage/source/IndexedDb/createIndexedDb.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/createIndexedDb.ts#L16)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *Effects‹[IndexedDbEnv](asyncstorage.md#indexeddbenv), [Either](either.md#either)‹[Error](../classes/effects.killerror.md#static-error), [AsyncStorage](../interfaces/asyncstorage.asyncstorage-1.md)‹A›››*

___

###  createIndexedDbAsyncStorage

▸ **createIndexedDbAsyncStorage**<**A**>(`database`: IDBDatabase, `indexedDbFactory`: IDBFactory): *[AsyncStorage](../interfaces/asyncstorage.asyncstorage-1.md)‹A›*

*Defined in [packages/asyncstorage/source/IndexedDb/createIndexedDb.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/createIndexedDb.ts#L25)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`database` | IDBDatabase |
`indexedDbFactory` | IDBFactory |

**Returns:** *[AsyncStorage](../interfaces/asyncstorage.asyncstorage-1.md)‹A›*

___

###  createServerIndexedDbFactory

▸ **createServerIndexedDbFactory**(`testing`: boolean): *IDBFactory*

*Defined in [packages/asyncstorage/source/IndexedDb/createIndexedDbFactory.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/createIndexedDbFactory.ts#L1)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`testing` | boolean | false |

**Returns:** *IDBFactory*

___

###  destroyDb

▸ **destroyDb**(`name`: string, `indexedDbFactory`: typeof indexedDB): *[ItemEffect](asyncstorage.md#itemeffect)‹boolean›*

*Defined in [packages/asyncstorage/source/IndexedDb/destroyDb.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/destroyDb.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`indexedDbFactory` | typeof indexedDB |

**Returns:** *[ItemEffect](asyncstorage.md#itemeffect)‹boolean›*

___

###  getAllKeys

▸ **getAllKeys**(`store`: IDBObjectStore): *[ItemsEffect](asyncstorage.md#itemseffect)‹string›*

*Defined in [packages/asyncstorage/source/IndexedDb/getAllKeys.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/getAllKeys.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | IDBObjectStore |

**Returns:** *[ItemsEffect](asyncstorage.md#itemseffect)‹string›*

___

###  getAllValues

▸ **getAllValues**<**A**>(`store`: IDBObjectStore): *[ItemsEffect](asyncstorage.md#itemseffect)‹A›*

*Defined in [packages/asyncstorage/source/IndexedDb/getAllValues.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/getAllValues.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`store` | IDBObjectStore |

**Returns:** *[ItemsEffect](asyncstorage.md#itemseffect)‹A›*

___

###  getValue

▸ **getValue**<**A**>(`key`: string, `store`: IDBObjectStore): *[ItemEffect](asyncstorage.md#itemeffect)‹[Maybe](io.md#const-maybe)‹A››*

*Defined in [packages/asyncstorage/source/IndexedDb/getValue.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/getValue.ts#L7)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`store` | IDBObjectStore |

**Returns:** *[ItemEffect](asyncstorage.md#itemeffect)‹[Maybe](io.md#const-maybe)‹A››*

___

###  openDatabase

▸ **openDatabase**(`name`: string, `indexedDbFactory`: IDBFactory): *[ItemEffect](asyncstorage.md#itemeffect)‹IDBDatabase›*

*Defined in [packages/asyncstorage/source/IndexedDb/openDatabase.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/openDatabase.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`indexedDbFactory` | IDBFactory |

**Returns:** *[ItemEffect](asyncstorage.md#itemeffect)‹IDBDatabase›*

___

###  putValue

▸ **putValue**<**A**>(`key`: string, `value`: A, `store`: IDBObjectStore): *[ItemEffect](asyncstorage.md#itemeffect)‹A›*

*Defined in [packages/asyncstorage/source/IndexedDb/putValue.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/putValue.ts#L6)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | A |
`store` | IDBObjectStore |

**Returns:** *[ItemEffect](asyncstorage.md#itemeffect)‹A›*

___

###  removeValue

▸ **removeValue**<**A**>(`key`: string, `store`: IDBObjectStore): *[ItemEffect](asyncstorage.md#itemeffect)‹[Maybe](io.md#const-maybe)‹A››*

*Defined in [packages/asyncstorage/source/IndexedDb/removeValue.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/IndexedDb/removeValue.ts#L8)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`store` | IDBObjectStore |

**Returns:** *[ItemEffect](asyncstorage.md#itemeffect)‹[Maybe](io.md#const-maybe)‹A››*

___

###  tryCatch

▸ **tryCatch**<**A**>(`fn`: function): *[Future](future.md#future)‹unknown, [Error](../classes/effects.killerror.md#static-error), A›*

*Defined in [packages/asyncstorage/source/wrapStorage.ts:59](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/wrapStorage.ts#L59)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **fn**: *function*

▸ (): *A*

**Returns:** *[Future](future.md#future)‹unknown, [Error](../classes/effects.killerror.md#static-error), A›*

___

###  wrapStorage

▸ **wrapStorage**(`storage`: Storage): *[AsyncStorage](../interfaces/asyncstorage.asyncstorage-1.md)‹string›*

*Defined in [packages/asyncstorage/source/wrapStorage.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/asyncstorage/source/wrapStorage.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`storage` | Storage |

**Returns:** *[AsyncStorage](../interfaces/asyncstorage.asyncstorage-1.md)‹string›*
