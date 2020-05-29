[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [history](../modules/history.md) › [ServerLocation](history.serverlocation.md)

# Class: ServerLocation

An in-memory implementation of `Location`.

**`name`** ServerLocation

## Hierarchy

* **ServerLocation**

## Implements

* Location

## Index

### Constructors

* [constructor](history.serverlocation.md#constructor)

### Properties

* [history](history.serverlocation.md#private-history)
* [href](history.serverlocation.md#href)

### Accessors

* [ancestorOrigins](history.serverlocation.md#ancestororigins)
* [hash](history.serverlocation.md#hash)
* [host](history.serverlocation.md#host)
* [hostname](history.serverlocation.md#hostname)
* [origin](history.serverlocation.md#origin)
* [pathname](history.serverlocation.md#pathname)
* [port](history.serverlocation.md#port)
* [protocol](history.serverlocation.md#protocol)
* [search](history.serverlocation.md#search)

### Methods

* [assign](history.serverlocation.md#assign)
* [reload](history.serverlocation.md#reload)
* [replace](history.serverlocation.md#replace)
* [setHistory](history.serverlocation.md#sethistory)
* [toString](history.serverlocation.md#tostring)

## Constructors

###  constructor

\+ **new ServerLocation**(`href`: string): *[ServerLocation](history.serverlocation.md)*

*Defined in [packages/history/source/server/ServerLocation.ts:87](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`href` | string |

**Returns:** *[ServerLocation](history.serverlocation.md)*

## Properties

### `Private` history

• **history**: *History*

*Defined in [packages/history/source/server/ServerLocation.ts:87](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L87)*

___

###  href

• **href**: *string*

*Defined in [packages/history/source/server/ServerLocation.ts:86](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L86)*

## Accessors

###  ancestorOrigins

• **get ancestorOrigins**(): *DOMStringList*

*Defined in [packages/history/source/server/ServerLocation.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L12)*

**Returns:** *DOMStringList*

___

###  hash

• **get hash**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:16](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L16)*

**Returns:** *string*

• **set hash**(`value`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:20](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  host

• **get host**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:26](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L26)*

**Returns:** *string*

• **set host**(`value`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:30](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  hostname

• **get hostname**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L34)*

**Returns:** *string*

• **set hostname**(`value`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:38](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  origin

• **get origin**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:83](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L83)*

**Returns:** *string*

___

###  pathname

• **get pathname**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:42](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L42)*

**Returns:** *string*

• **set pathname**(`value`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:46](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L46)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  port

• **get port**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:50](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L50)*

**Returns:** *string*

• **set port**(`value`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:61](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  protocol

• **get protocol**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:65](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L65)*

**Returns:** *string*

• **set protocol**(`value`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:69](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

___

###  search

• **get search**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:73](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L73)*

**Returns:** *string*

• **set search**(`value`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:77](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *void*

## Methods

###  assign

▸ **assign**(`url`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:93](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

___

###  reload

▸ **reload**(): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:103](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L103)*

**Returns:** *void*

___

###  replace

▸ **replace**(`url`: string): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:105](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

___

###  setHistory

▸ **setHistory**(`history`: History): *this*

*Defined in [packages/history/source/server/ServerLocation.ts:127](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`history` | History |

**Returns:** *this*

___

###  toString

▸ **toString**(): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:122](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L122)*

**Returns:** *string*
