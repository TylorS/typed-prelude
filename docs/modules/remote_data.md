[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [remote-data](remote_data.md)

# Package: remote-data

# @typed/remote-data

> Data-type for working with data that comes in asynchronously.

## Index

### Namespaces

* [Failure](remote_data.md#failure)
* [RemoteData](remote_data.md#remotedata)
* [Success](remote_data.md#success)

### Enumerations

* [RemoteDataStatus](../enums/remote_data.remotedatastatus.md)

### Type aliases

* [Loadable](remote_data.md#loadable)
* [Loaded](remote_data.md#loaded)
* [Loading](remote_data.md#loading)
* [NoData](remote_data.md#nodata)

### Variables

* [ap](remote_data.md#const-ap)
* [chain](remote_data.md#const-chain)
* [map](remote_data.md#const-map)
* [unpack](remote_data.md#const-unpack)

### Functions

* [__ap](remote_data.md#__ap)
* [__chain](remote_data.md#__chain)
* [__map](remote_data.md#__map)
* [__unpackRemoteData](remote_data.md#__unpackremotedata)
* [hasNoData](remote_data.md#const-hasnodata)
* [isDoneLoading](remote_data.md#const-isdoneloading)
* [isFailure](remote_data.md#const-isfailure)
* [isLoading](remote_data.md#const-isloading)
* [isSuccess](remote_data.md#const-issuccess)

### Object literals

* [Loading](remote_data.md#const-loading)
* [NoData](remote_data.md#const-nodata)

## Namespaces

###  Failure

• **Failure**:

*Defined in [packages/remote-data/source/Failure.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Failure.ts#L3)*

*Defined in [packages/remote-data/source/Failure.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Failure.ts#L8)*

### `Readonly` status

• **status**: *[Failure](../enums/remote_data.remotedatastatus.md#failure)*

*Defined in [packages/remote-data/source/Failure.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Failure.ts#L4)*

### `Readonly` value

• **value**: *A*

*Defined in [packages/remote-data/source/Failure.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Failure.ts#L5)*

### `Const` of

▸ **of**<**A**>(`value`: A): *[Failure](remote_data.md#failure)‹A›*

*Defined in [packages/remote-data/source/Failure.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Failure.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Failure](remote_data.md#failure)‹A›*

___

###  RemoteData

• **RemoteData**: *[NoData](remote_data.md#nodata) | [Loading](remote_data.md#loading) | [Loaded](remote_data.md#loaded)‹A, B›*

*Defined in [packages/remote-data/source/RemoteData.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L6)*

*Defined in [packages/remote-data/source/RemoteData.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L18)*

### `Const` failure

▸ **failure**<**A**, **B**>(`value`: A): *[RemoteData](remote_data.md#remotedata)‹A, B›*

*Defined in [packages/remote-data/source/RemoteData.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L20)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[RemoteData](remote_data.md#remotedata)‹A, B›*

### `Const` fromEither

▸ **fromEither**<**A**, **B**>(`either`: [Either](either.md#either)‹A, B›): *[Loaded](remote_data.md#loaded)‹A, B›*

*Defined in [packages/remote-data/source/RemoteData.ts:22](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L22)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`either` | [Either](either.md#either)‹A, B› |

**Returns:** *[Loaded](remote_data.md#loaded)‹A, B›*

### `Const` of

▸ **of**<**A**, **B**>(`value`: B): *[RemoteData](remote_data.md#remotedata)‹A, B›*

*Defined in [packages/remote-data/source/RemoteData.ts:19](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L19)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

**Returns:** *[RemoteData](remote_data.md#remotedata)‹A, B›*

___

###  Success

• **Success**:

*Defined in [packages/remote-data/source/Success.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Success.ts#L3)*

*Defined in [packages/remote-data/source/Success.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Success.ts#L8)*

### `Readonly` status

• **status**: *[Success](../enums/remote_data.remotedatastatus.md#success)*

*Defined in [packages/remote-data/source/Success.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Success.ts#L4)*

### `Readonly` value

• **value**: *A*

*Defined in [packages/remote-data/source/Success.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Success.ts#L5)*

### `Const` of

▸ **of**<**A**>(`value`: A): *[Success](remote_data.md#success)‹A›*

*Defined in [packages/remote-data/source/Success.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/Success.ts#L9)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

**Returns:** *[Success](remote_data.md#success)‹A›*

## Type aliases

###  Loadable

Ƭ **Loadable**: *Exclude‹[RemoteData](remote_data.md#remotedata)‹A, B›, [NoData](remote_data.md#nodata)›*

*Defined in [packages/remote-data/source/RemoteData.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L8)*

___

###  Loaded

Ƭ **Loaded**: *[Failure](remote_data.md#failure)‹A› | [Success](remote_data.md#success)‹B›*

*Defined in [packages/remote-data/source/RemoteData.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L10)*

___

###  Loading

Ƭ **Loading**: *object*

*Defined in [packages/remote-data/source/RemoteData.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L15)*

#### Type declaration:

* **status**: *[Loading](../enums/remote_data.remotedatastatus.md#loading)*

___

###  NoData

Ƭ **NoData**: *object*

*Defined in [packages/remote-data/source/RemoteData.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L12)*

#### Type declaration:

* **status**: *[NoData](../enums/remote_data.remotedatastatus.md#nodata)*

## Variables

### `Const` ap

• **ap**: *function* = curry(__ap) as {
  <A, B, C>(fn: RemoteData<A, (value: B) => C>, value: RemoteData<A, B>): RemoteData<A, C>
  <A, B, C>(fn: RemoteData<A, (value: B) => C>): (value: RemoteData<A, B>) => RemoteData<A, C>
}

*Defined in [packages/remote-data/source/ap.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/ap.ts#L11)*

Applies the function contains in an `RemoteData` to the value contained in a
second `RemoteData`.

**`name`** ap<A, B, C>(fn: RemoteData<A, (value: B) => C>, value: RemoteData<A, B>): RemoteData<A, C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`fn`: [RemoteData](remote_data.md#remotedata)‹A, function›, `value`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [RemoteData](remote_data.md#remotedata)‹A, function› |
`value` | [RemoteData](remote_data.md#remotedata)‹A, B› |

▸ <**A**, **B**, **C**>(`fn`: [RemoteData](remote_data.md#remotedata)‹A, function›): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [RemoteData](remote_data.md#remotedata)‹A, function› |

▸ (`value`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [RemoteData](remote_data.md#remotedata)‹A, B› |

___

### `Const` chain

• **chain**: *function* = curry(__chain) as {
  <A, B, C>(f: (value: B) => RemoteData<A, C>, data: RemoteData<A, B>): RemoteData<A, C>
  <A, B, C>(f: (value: B) => RemoteData<A, C>): (data: RemoteData<A, B>) => RemoteData<A, C>
}

*Defined in [packages/remote-data/source/chain.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/chain.ts#L10)*

Returns a `RemoteData` that is the result of calling `f` with the resolved
value of another `RemoteData`.

**`name`** chain<A, B, C>(f: (value: B) => RemoteData<A, C>, data: RemoteData<A, B>): RemoteData<A C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `data`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **data**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`data`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RemoteData](remote_data.md#remotedata)‹A, B› |

___

### `Const` map

• **map**: *function* = curry(__map) as {
  <A, B, C>(f: (value: B) => C, data: RemoteData<A, B>): RemoteData<A, C>
  <A, B, C>(f: (value: B) => C): (data: RemoteData<A, B>) => RemoteData<A, C>
}

*Defined in [packages/remote-data/source/map.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/map.ts#L10)*

Map over the value of a succesful RemoteData.

**`name`** map<A, B, C>(f: (value: B) => C, data: RemoteData<A, B>): RemoteData<A, C>

#### Type declaration:

▸ <**A**, **B**, **C**>(`f`: function, `data`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **data**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ <**A**, **B**, **C**>(`f`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`data`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`data` | [RemoteData](remote_data.md#remotedata)‹A, B› |

___

### `Const` unpack

• **unpack**: *function* = curry(__unpackRemoteData)

*Defined in [packages/remote-data/source/unpack.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/unpack.ts#L7)*

#### Type declaration:

▸ <**A**, **B**, **C**>(`noData`: function, `loading`: function, `failure`: function, `success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **noData**: *function*

▸ (): *C*

▪ **loading**: *function*

▸ (): *C*

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ <**A**, **B**, **C**>(`noData`: function, `loading`: function, `failure`: function, `success`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **noData**: *function*

▸ (): *C*

▪ **loading**: *function*

▸ (): *C*

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

▸ <**A**, **B**, **C**>(`noData`: function, `loading`: function, `failure`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **noData**: *function*

▸ (): *C*

▪ **loading**: *function*

▸ (): *C*

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ (`success`: function): *function*

**Parameters:**

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

▸ <**C**>(`noData`: function, `loading`: function): *function*

**Type parameters:**

▪ **C**

**Parameters:**

▪ **noData**: *function*

▸ (): *C*

▪ **loading**: *function*

▸ (): *C*

▸ <**A**, **B**>(`failure`: function, `success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ <**A**, **B**>(`failure`: function, `success`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

▸ <**A**>(`failure`: function): *function*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**B**>(`success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ <**B**>(`success`: function): *function*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

▸ <**C**>(`noData`: function): *function*

**Type parameters:**

▪ **C**

**Parameters:**

▪ **noData**: *function*

▸ (): *C*

▸ <**A**, **B**>(`loading`: function, `failure`: function, `success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **loading**: *function*

▸ (): *C*

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ <**A**, **B**>(`loading`: function, `failure`: function, `success`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **loading**: *function*

▸ (): *C*

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

▸ <**A**, **B**>(`loading`: function, `failure`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **loading**: *function*

▸ (): *C*

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ (`success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ (`success`: function): *function*

**Parameters:**

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

▸ (`loading`: function): *function*

**Parameters:**

▪ **loading**: *function*

▸ (): *C*

▸ <**A**, **B**>(`failure`: function, `success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ <**A**, **B**>(`failure`: function, `success`: function): *function*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

▸ <**A**>(`failure`: function): *function*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▸ <**B**>(`success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

▸ <**B**>(`success`: function): *function*

**Type parameters:**

▪ **B**

**Parameters:**

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▸ (`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

## Functions

###  __ap

▸ **__ap**<**A**, **B**, **C**>(`fn`: [RemoteData](remote_data.md#remotedata)‹A, function›, `value`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

*Defined in [packages/remote-data/source/ap.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/ap.ts#L16)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

Name | Type |
------ | ------ |
`fn` | [RemoteData](remote_data.md#remotedata)‹A, function› |
`value` | [RemoteData](remote_data.md#remotedata)‹A, B› |

**Returns:** *[RemoteData](remote_data.md#remotedata)‹A, C›*

___

###  __chain

▸ **__chain**<**A**, **B**, **C**>(`f`: function, `data`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

*Defined in [packages/remote-data/source/chain.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/chain.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *[RemoteData](remote_data.md#remotedata)‹A, C›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **data**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

**Returns:** *[RemoteData](remote_data.md#remotedata)‹A, C›*

___

###  __map

▸ **__map**<**A**, **B**, **C**>(`f`: function, `data`: [RemoteData](remote_data.md#remotedata)‹A, B›): *[RemoteData](remote_data.md#remotedata)‹A, C›*

*Defined in [packages/remote-data/source/map.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/map.ts#L15)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **f**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **data**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

**Returns:** *[RemoteData](remote_data.md#remotedata)‹A, C›*

___

###  __unpackRemoteData

▸ **__unpackRemoteData**<**A**, **B**, **C**>(`noData`: function, `loading`: function, `failure`: function, `success`: function, `remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *C*

*Defined in [packages/remote-data/source/unpack.ts:67](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/unpack.ts#L67)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**

**Parameters:**

▪ **noData**: *function*

▸ (): *C*

▪ **loading**: *function*

▸ (): *C*

▪ **failure**: *function*

▸ (`value`: A): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **success**: *function*

▸ (`value`: B): *C*

**Parameters:**

Name | Type |
------ | ------ |
`value` | B |

▪ **remoteData**: *[RemoteData](remote_data.md#remotedata)‹A, B›*

**Returns:** *C*

___

### `Const` hasNoData

▸ **hasNoData**<**A**, **B**>(`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *remoteData is NoData*

*Defined in [packages/remote-data/source/hasNoData.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/hasNoData.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

**Returns:** *remoteData is NoData*

___

### `Const` isDoneLoading

▸ **isDoneLoading**<**A**, **B**>(`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *remoteData is Loaded<A, B>*

*Defined in [packages/remote-data/source/isDoneLoading.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/isDoneLoading.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

**Returns:** *remoteData is Loaded<A, B>*

___

### `Const` isFailure

▸ **isFailure**<**A**, **B**>(`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *remoteData is Failure<A>*

*Defined in [packages/remote-data/source/isFailure.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/isFailure.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

**Returns:** *remoteData is Failure<A>*

___

### `Const` isLoading

▸ **isLoading**<**A**, **B**>(`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *remoteData is Loading*

*Defined in [packages/remote-data/source/isLoading.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/isLoading.ts#L4)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

**Returns:** *remoteData is Loading*

___

### `Const` isSuccess

▸ **isSuccess**<**A**, **B**>(`remoteData`: [RemoteData](remote_data.md#remotedata)‹A, B›): *remoteData is Success<B>*

*Defined in [packages/remote-data/source/isSuccess.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/isSuccess.ts#L5)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`remoteData` | [RemoteData](remote_data.md#remotedata)‹A, B› |

**Returns:** *remoteData is Success<B>*

## Object literals

### `Const` Loading

### ▪ **Loading**: *object*

*Defined in [packages/remote-data/source/RemoteData.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L16)*

###  status

• **status**: *[Loading](../enums/remote_data.remotedatastatus.md#loading)* = RemoteDataStatus.Loading

*Defined in [packages/remote-data/source/RemoteData.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L16)*

___

### `Const` NoData

### ▪ **NoData**: *object*

*Defined in [packages/remote-data/source/RemoteData.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L13)*

###  status

• **status**: *[NoData](../enums/remote_data.remotedatastatus.md#nodata)* = RemoteDataStatus.NoData

*Defined in [packages/remote-data/source/RemoteData.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/remote-data/source/RemoteData.ts#L13)*
