[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [history](history.md)

# Package: history

# @typed/history

> Useful abstractions for the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History).

## Index

### Classes

* [ServerHistory](../classes/history.serverhistory.md)
* [ServerLocation](../classes/history.serverlocation.md)

### Type aliases

* [HistoryEnv](history.md#historyenv)
* [ParsedHref](history.md#parsedhref)
* [Path](history.md#path)

### Variables

* [HREF_REGEX](history.md#const-href_regex)
* [HTTPS_DEFAULT_PORT](history.md#const-https_default_port)
* [HTTPS_PROTOCOL](history.md#const-https_protocol)
* [HTTP_DEFAULT_PORT](history.md#const-http_default_port)
* [QUERYSTRING_REGEX](history.md#const-querystring_regex)
* [isPath](history.md#const-ispath)
* [keyCount](history.md#const-keycount)
* [keys](history.md#const-keys)
* [pathJoin](history.md#const-pathjoin)

### Functions

* [createHistoryEnv](history.md#createhistoryenv)
* [createServerHistoryEnv](history.md#createserverhistoryenv)
* [parseHref](history.md#parsehref)
* [parseQueries](history.md#parsequeries)
* [parseValue](history.md#parsevalue)
* [pushPath](history.md#pushpath)
* [pushState](history.md#pushstate)
* [replace](history.md#replace)
* [replacePath](history.md#const-replacepath)
* [replaceState](history.md#replacestate)
* [scopeHistoryEnv](history.md#scopehistoryenv)
* [wrapHistory](history.md#wraphistory)
* [wrapInSubscription](history.md#wrapinsubscription)

## Type aliases

###  HistoryEnv

Ƭ **HistoryEnv**: *object*

*Defined in [packages/history/source/types.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/types.ts#L7)*

#### Type declaration:

* **history**: *History*

* **location**: *Location*

___

###  ParsedHref

Ƭ **ParsedHref**: *object*

*Defined in [packages/history/source/server/parseHref.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/parseHref.ts#L8)*

ParsedHref JSON data structure

**`name`** ParsedHref

#### Type declaration:

* **directory**: *string*

* **file**: *string*

* **hash**: *string*

* **host**: *string*

* **hostname**: *string*

* **href**: *string*

* **password**: *string*

* **pathname**: *string*

* **port**: *string*

* **protocol**: *string*

* **relative**: *string*

* **search**: *string*

* **userInfo**: *string*

* **username**: *string*

___

###  Path

Ƭ **Path**: *[NewType](new_type.md#newtype)‹string, "Path"›*

*Defined in [packages/history/source/types.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/types.ts#L12)*

## Variables

### `Const` HREF_REGEX

• **HREF_REGEX**: *RegExp‹›* = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/

*Defined in [packages/history/source/server/parseHref.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/parseHref.ts#L1)*

___

### `Const` HTTPS_DEFAULT_PORT

• **HTTPS_DEFAULT_PORT**: *"443"* = "443"

*Defined in [packages/history/source/server/ServerLocation.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L4)*

___

### `Const` HTTPS_PROTOCOL

• **HTTPS_PROTOCOL**: *"https:"* = "https:"

*Defined in [packages/history/source/server/ServerLocation.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L3)*

___

### `Const` HTTP_DEFAULT_PORT

• **HTTP_DEFAULT_PORT**: *"80"* = "80"

*Defined in [packages/history/source/server/ServerLocation.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L5)*

___

### `Const` QUERYSTRING_REGEX

• **QUERYSTRING_REGEX**: *RegExp‹›* = /(?:^|&)([^&=]*)=?([^&]*)/g

*Defined in [packages/history/source/parseQueries.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/parseQueries.ts#L1)*

___

### `Const` isPath

• **isPath**: *function* = isNewType((str: string): str is Path => str.startsWith('/'))

*Defined in [packages/history/source/types.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/types.ts#L13)*

#### Type declaration:

▸ (`value`: A): *value is B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

___

### `Const` keyCount

• **keyCount**: *number* = keys.length

*Defined in [packages/history/source/server/parseHref.ts:72](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/parseHref.ts#L72)*

___

### `Const` keys

• **keys**: *ReadonlyArray‹keyof ParsedHref›* = [
  'href',
  'protocol',
  'host',
  'userInfo',
  'username',
  'password',
  'hostname',
  'port',
  'relative',
  'pathname',
  'directory',
  'file',
  'search',
  'hash',
]

*Defined in [packages/history/source/server/parseHref.ts:55](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/parseHref.ts#L55)*

___

### `Const` pathJoin

• **pathJoin**: *function* = joinPath as (...args: ArgsOf<typeof joinPath>) => Path

*Defined in [packages/history/source/types.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/types.ts#L15)*

#### Type declaration:

▸ (...`args`: [ArgsOf](lambda.md#argsof)‹typeof joinPath›): *[Path](history.md#path)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | [ArgsOf](lambda.md#argsof)‹typeof joinPath› |

## Functions

###  createHistoryEnv

▸ **createHistoryEnv**<**A**>(): *[HistoryEnv](history.md#historyenv)‹A›*

*Defined in [packages/history/source/createHistoryEnv.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/createHistoryEnv.ts#L6)*

Create a HistoryEnv for the browser.

**Type parameters:**

▪ **A**

**Returns:** *[HistoryEnv](history.md#historyenv)‹A›*

___

###  createServerHistoryEnv

▸ **createServerHistoryEnv**<**A**>(`href`: string): *[HistoryEnv](history.md#historyenv)‹A›*

*Defined in [packages/history/source/server/createServerHistoryEnv.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/createServerHistoryEnv.ts#L9)*

Create A History Environment that works in browser and non-browser environments

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`href` | string | "/" | :: initial href to use  |

**Returns:** *[HistoryEnv](history.md#historyenv)‹A›*

___

###  parseHref

▸ **parseHref**(`href`: string): *[ParsedHref](history.md#parsedhref)*

*Defined in [packages/history/source/server/parseHref.ts:29](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/parseHref.ts#L29)*

Parses an href into JSON.

**`name`** parseHref(href: string): ParsedHref

**Parameters:**

Name | Type |
------ | ------ |
`href` | string |

**Returns:** *[ParsedHref](history.md#parsedhref)*

___

###  parseQueries

▸ **parseQueries**<**Queries**>(`location`: Location): *Readonly‹Queries›*

*Defined in [packages/history/source/parseQueries.ts:17](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/parseQueries.ts#L17)*

Parses a Location's query string into an object of key/value pairs.

**`name`** parseQueries<Queries extends Record<string, string>>(location: Location): Queries

**`example`** 
import { createEnv, pushUrl, parseQueries } from '@typed/history'

const { history, location } = createEnv()

console.log(parseQueries(location)) // logs => {}

pushUrl('/?q=hello&lang=en', history)

console.log(parseQueries(location)) // logs => { q: 'hello', lang: 'en' }

**Type parameters:**

▪ **Queries**: *[Record](io.md#const-record)‹string, string›*

**Parameters:**

Name | Type |
------ | ------ |
`location` | Location |

**Returns:** *Readonly‹Queries›*

___

###  parseValue

▸ **parseValue**(`key`: keyof ParsedHref, `location`: [ServerLocation](../classes/history.serverlocation.md)): *string*

*Defined in [packages/history/source/server/ServerLocation.ts:144](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L144)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof ParsedHref |
`location` | [ServerLocation](../classes/history.serverlocation.md) |

**Returns:** *string*

___

###  pushPath

▸ **pushPath**(`path`: [Path](history.md#path)): *Effects‹[HistoryEnv](history.md#historyenv), void›*

*Defined in [packages/history/source/pushState.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/pushState.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](history.md#path) |

**Returns:** *Effects‹[HistoryEnv](history.md#historyenv), void›*

___

###  pushState

▸ **pushState**<**A**>(`data`: A, `path`: [Path](history.md#path)): *Effects‹[HistoryEnv](history.md#historyenv)‹A›, A›*

*Defined in [packages/history/source/pushState.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/pushState.ts#L10)*

Push state to history environment

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`data` | A |
`path` | [Path](history.md#path) |

**Returns:** *Effects‹[HistoryEnv](history.md#historyenv)‹A›, A›*

Effects<HistoryEnv<A>, A>

___

###  replace

▸ **replace**(`key`: keyof ParsedHref, `value`: string, `location`: [ServerLocation](../classes/history.serverlocation.md)): *void*

*Defined in [packages/history/source/server/ServerLocation.ts:134](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/server/ServerLocation.ts#L134)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | keyof ParsedHref |
`value` | string |
`location` | [ServerLocation](../classes/history.serverlocation.md) |

**Returns:** *void*

___

### `Const` replacePath

▸ **replacePath**(`path`: [Path](history.md#path)): *Effects‹object, null›*

*Defined in [packages/history/source/replaceState.ts:12](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/replaceState.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | [Path](history.md#path) |

**Returns:** *Effects‹object, null›*

___

###  replaceState

▸ **replaceState**<**A**>(`data`: A, `path`: [Path](history.md#path)): *Effects‹[HistoryEnv](history.md#historyenv)‹A›, A›*

*Defined in [packages/history/source/replaceState.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/replaceState.ts#L4)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`data` | A |
`path` | [Path](history.md#path) |

**Returns:** *Effects‹[HistoryEnv](history.md#historyenv)‹A›, A›*

___

###  scopeHistoryEnv

▸ **scopeHistoryEnv**<**A**>(`scope`: [Path](history.md#path), `__namedParameters`: object): *[HistoryEnv](history.md#historyenv)‹A›*

*Defined in [packages/history/source/scopeHistoryEnv.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/scopeHistoryEnv.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

▪ **scope**: *[Path](history.md#path)*

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`history` | History |
`location` | Location |

**Returns:** *[HistoryEnv](history.md#historyenv)‹A›*

___

###  wrapHistory

▸ **wrapHistory**(`__namedParameters`: object, `subscription`: Subscription‹[HistoryEnv](history.md#historyenv)›): *History*

*Defined in [packages/history/source/wrapInSubscription.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/wrapInSubscription.ts#L18)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`history` | History |
`location` | Location |

▪ **subscription**: *Subscription‹[HistoryEnv](history.md#historyenv)›*

**Returns:** *History*

___

###  wrapInSubscription

▸ **wrapInSubscription**<**A**>(`historyEnv`: [HistoryEnv](history.md#historyenv)‹A›): *[HistoryEnv](history.md#historyenv)‹A› & object*

*Defined in [packages/history/source/wrapInSubscription.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/history/source/wrapInSubscription.ts#L5)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`historyEnv` | [HistoryEnv](history.md#historyenv)‹A› |

**Returns:** *[HistoryEnv](history.md#historyenv)‹A› & object*
