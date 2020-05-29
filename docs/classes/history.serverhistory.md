[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [history](../modules/history.md) › [ServerHistory](history.serverhistory.md)

# Class: ServerHistory

An implementation of the `History` interface.

**`name`** ServerHistory

## Hierarchy

* **ServerHistory**

## Implements

* History

## Index

### Constructors

* [constructor](history.serverhistory.md#constructor)

### Properties

* [_index](history.serverhistory.md#private-_index)
* [_states](history.serverhistory.md#private-_states)
* [location](history.serverhistory.md#private-location)
* [scrollRestoration](history.serverhistory.md#scrollrestoration)

### Accessors

* [index](history.serverhistory.md#private-index)
* [length](history.serverhistory.md#length)
* [state](history.serverhistory.md#state)

### Methods

* [back](history.serverhistory.md#back)
* [forward](history.serverhistory.md#forward)
* [go](history.serverhistory.md#go)
* [pushState](history.serverhistory.md#pushstate)
* [replaceState](history.serverhistory.md#replacestate)

## Constructors

###  constructor

\+ **new ServerHistory**(`location`: Location): *[ServerHistory](history.serverhistory.md)*

*Defined in [packages/history/source/server/ServerHistory.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`location` | Location |

**Returns:** *[ServerHistory](history.serverhistory.md)*

## Properties

### `Private` _index

• **_index**: *number* = 0

*Defined in [packages/history/source/server/ServerHistory.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L13)*

___

### `Private` _states

• **_states**: *object[]*

*Defined in [packages/history/source/server/ServerHistory.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L11)*

___

### `Private` location

• **location**: *Location*

*Defined in [packages/history/source/server/ServerHistory.ts:14](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L14)*

___

###  scrollRestoration

• **scrollRestoration**: *ScrollRestoration* = "auto"

*Defined in [packages/history/source/server/ServerHistory.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L7)*

## Accessors

### `Private` index

• **get index**(): *number*

*Defined in [packages/history/source/server/ServerHistory.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L29)*

**Returns:** *number*

• **set index**(`value`: number): *void*

*Defined in [packages/history/source/server/ServerHistory.ts:21](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L21)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  length

• **get length**(): *number*

*Defined in [packages/history/source/server/ServerHistory.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L33)*

**Returns:** *number*

___

###  state

• **get state**(): *any*

*Defined in [packages/history/source/server/ServerHistory.ts:37](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L37)*

**Returns:** *any*

## Methods

###  back

▸ **back**(): *void*

*Defined in [packages/history/source/server/ServerHistory.ts:54](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L54)*

**Returns:** *void*

___

###  forward

▸ **forward**(): *void*

*Defined in [packages/history/source/server/ServerHistory.ts:58](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L58)*

**Returns:** *void*

___

###  go

▸ **go**(`quanity`: number): *void*

*Defined in [packages/history/source/server/ServerHistory.ts:43](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L43)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`quanity` | number | 0 |

**Returns:** *void*

___

###  pushState

▸ **pushState**(`state`: any, `_`: string | null, `url`: string): *void*

*Defined in [packages/history/source/server/ServerHistory.ts:62](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L62)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | any |
`_` | string &#124; null |
`url` | string |

**Returns:** *void*

___

###  replaceState

▸ **replaceState**(`state`: any, `_`: string | null, `url`: string): *void*

*Defined in [packages/history/source/server/ServerHistory.ts:67](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerHistory.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`state` | any |
`_` | string &#124; null |
`url` | string |

**Returns:** *void*
