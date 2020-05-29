[Typed - v3.4.1](../README.md) › [Globals](../globals.md) › [common](common.md)

# Package: common

# @typed/common

> A package for distributing common functionality to other `@typed` libraries.

This package isn't necessary meant to be consumed externally, but is meant to serve 
as a place to de-duplicate common dependencies.

## Index

### Interfaces

* [EmptyObject](../interfaces/common.emptyobject.md)
* [JsonObject](../interfaces/common.jsonobject.md)

### Type aliases

* [Compact](common.md#compact)
* [DropKeys](common.md#dropkeys)
* [Flatten](common.md#flatten)
* [Json](common.md#json)
* [JsonArray](common.md#jsonarray)
* [JsonPrimitive](common.md#jsonprimitive)
* [Step](common.md#step)
* [UnNest](common.md#unnest)

### Variables

* [DEFAULT_MATCH](common.md#const-default_match)
* [DUPLICATE_PATH_SEPARATOR_REGEX](common.md#const-duplicate_path_separator_regex)
* [FUNCTION_NAME_REGEX](common.md#const-function_name_regex)
* [LAST_STEP](common.md#const-last_step)
* [PATH_SEPARATOR](common.md#const-path_separator)
* [STEPS](common.md#const-steps)
* [VOID](common.md#const-void)
* [isBrowser](common.md#const-isbrowser)

### Functions

* [__addQueryParameters](common.md#__addqueryparameters)
* [_toString](common.md#_tostring)
* [_uniqContentEquals](common.md#_uniqcontentequals)
* [addQueryParameters](common.md#addqueryparameters)
* [applyStep](common.md#applystep)
* [clone](common.md#clone)
* [cloneRegexp](common.md#cloneregexp)
* [equals](common.md#equals)
* [functionName](common.md#functionname)
* [includesWith](common.md#includeswith)
* [indexOf](common.md#indexof)
* [isFunction](common.md#isfunction)
* [isMap](common.md#ismap)
* [isSet](common.md#isset)
* [isString](common.md#const-isstring)
* [mapArrayLike](common.md#maparraylike)
* [mapObj](common.md#mapobj)
* [pathJoin](common.md#pathjoin)
* [queryParam](common.md#queryparam)
* [quote](common.md#quote)
* [toString](common.md#const-tostring)
* [typeOf](common.md#typeof)

## Type aliases

###  Compact

Ƭ **Compact**: *object*

*Defined in [packages/common/source/Compact.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/Compact.ts#L1)*

#### Type declaration:

___

###  DropKeys

Ƭ **DropKeys**: *Exclude<keyof A, Keys> extends never ? object : object*

*Defined in [packages/common/source/types.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/types.ts#L1)*

___

###  Flatten

Ƭ **Flatten**: *A extends [infer H] ? S & H : A extends [infer H, infer T] ? [Flatten<T, S & H>] : S*

*Defined in [packages/common/source/ConsList.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/ConsList.ts#L1)*

___

###  Json

Ƭ **Json**: *[JsonPrimitive](common.md#jsonprimitive) | [JsonArray](common.md#jsonarray) | [JsonObject](../interfaces/common.jsonobject.md)*

*Defined in [packages/common/source/Json.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/Json.ts#L1)*

___

###  JsonArray

Ƭ **JsonArray**: *keyof Json[]*

*Defined in [packages/common/source/Json.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/Json.ts#L4)*

___

###  JsonPrimitive

Ƭ **JsonPrimitive**: *string | number | boolean | null*

*Defined in [packages/common/source/Json.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/Json.ts#L3)*

___

###  Step

Ƭ **Step**: *[RegExp, string]*

*Defined in [packages/common/source/quote.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/quote.ts#L1)*

___

###  UnNest

Ƭ **UnNest**: *T extends any[] ? object[number] : Fallback*

*Defined in [packages/common/source/ConsList.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/ConsList.ts#L7)*

## Variables

### `Const` DEFAULT_MATCH

• **DEFAULT_MATCH**: *string[]* = ['', '']

*Defined in [packages/common/source/functionName.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/functionName.ts#L3)*

___

### `Const` DUPLICATE_PATH_SEPARATOR_REGEX

• **DUPLICATE_PATH_SEPARATOR_REGEX**: *RegExp‹›* = /\/{2,}/g

*Defined in [packages/common/source/pathJoin.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/pathJoin.ts#L1)*

___

### `Const` FUNCTION_NAME_REGEX

• **FUNCTION_NAME_REGEX**: *RegExp‹›* = /^function\s*([\w$]+)/

*Defined in [packages/common/source/functionName.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/functionName.ts#L1)*

___

### `Const` LAST_STEP

• **LAST_STEP**: *[Step](common.md#step)* = [/"/g, '\\"']

*Defined in [packages/common/source/quote.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/quote.ts#L13)*

___

### `Const` PATH_SEPARATOR

• **PATH_SEPARATOR**: *"/"* = `/`

*Defined in [packages/common/source/pathJoin.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/pathJoin.ts#L2)*

___

### `Const` STEPS

• **STEPS**: *[Step](common.md#step)[]* = [
  [/\\/g, '\\\\'],
  [/[\b]/g, '\\b'],
  [/\f/g, '\\f'],
  [/\n/g, '\\n'],
  [/\r/g, '\\r'],
  [/\t/g, '\\t'],
  [/\v/g, '\\v'],
  [/\0/g, '\\0'],
]

*Defined in [packages/common/source/quote.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/quote.ts#L2)*

___

### `Const` VOID

• **VOID**: *undefined* = void 0

*Defined in [packages/common/source/void.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/void.ts#L2)*

___

### `Const` isBrowser

• **isBrowser**: *boolean* = typeof window !== 'undefined' && typeof document !== 'undefined'

*Defined in [packages/common/source/executionEnvironment.ts:2](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/executionEnvironment.ts#L2)*

## Functions

###  __addQueryParameters

▸ **__addQueryParameters**(`url`: string, `queryParams`: [Record](io.md#const-record)‹string, string | undefined›): *string*

*Defined in [packages/common/source/addQueryParameters.ts:24](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/addQueryParameters.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`queryParams` | [Record](io.md#const-record)‹string, string &#124; undefined› |

**Returns:** *string*

___

###  _toString

▸ **_toString**(`x`: any, `seen`: any[]): *string*

*Defined in [packages/common/source/toString.ts:13](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/toString.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |
`seen` | any[] |

**Returns:** *string*

___

###  _uniqContentEquals

▸ **_uniqContentEquals**(`aIterable`: Iterable‹any›, `bIterable`: Iterable‹any›, `stackA`: any[], `stackB`: any[]): *boolean*

*Defined in [packages/common/source/equals.ts:133](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/equals.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`aIterable` | Iterable‹any› |
`bIterable` | Iterable‹any› |
`stackA` | any[] |
`stackB` | any[] |

**Returns:** *boolean*

___

###  addQueryParameters

▸ **addQueryParameters**(`url`: string, `queryParams`: [Record](io.md#const-record)‹string, string | undefined›): *string*

*Defined in [packages/common/source/addQueryParameters.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/addQueryParameters.ts#L1)*

Append Query Parameters to a Url

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | :: String |
`queryParams` | [Record](io.md#const-record)‹string, string &#124; undefined› | :: Record<string, string | undefined> |

**Returns:** *string*

string

▸ **addQueryParameters**(`url`: string): *function*

*Defined in [packages/common/source/addQueryParameters.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/addQueryParameters.ts#L5)*

Append Query Parameters to a Url

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *function*

string

▸ (`queryParams`: [Record](io.md#const-record)‹string, string | undefined›): *string*

**Parameters:**

Name | Type |
------ | ------ |
`queryParams` | [Record](io.md#const-record)‹string, string &#124; undefined› |

___

###  applyStep

▸ **applyStep**(`str`: string, `step`: [Step](common.md#step)): *string*

*Defined in [packages/common/source/quote.ts:25](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/quote.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |
`step` | [Step](common.md#step) |

**Returns:** *string*

___

###  clone

▸ **clone**(`value`: any, `refFrom`: any[], `refTo`: any[], `deep`: boolean): *any*

*Defined in [packages/common/source/clone.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/clone.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`refFrom` | any[] |
`refTo` | any[] |
`deep` | boolean |

**Returns:** *any*

___

###  cloneRegexp

▸ **cloneRegexp**(`pattern`: RegExp): *RegExp*

*Defined in [packages/common/source/clone.ts:42](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/clone.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`pattern` | RegExp |

**Returns:** *RegExp*

___

###  equals

▸ **equals**(`a`: any, `b`: any, `stackA`: any[], `stackB`: any[]): *boolean*

*Defined in [packages/common/source/equals.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/equals.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`a` | any | - |
`b` | any | - |
`stackA` | any[] | [] |
`stackB` | any[] | [] |

**Returns:** *boolean*

___

###  functionName

▸ **functionName**(`fn`: Function): *string*

*Defined in [packages/common/source/functionName.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/functionName.ts#L9)*

Returns the name of a function.

**`name`** functionName(fn: Function): string

**Parameters:**

Name | Type |
------ | ------ |
`fn` | Function |

**Returns:** *string*

___

###  includesWith

▸ **includesWith**<**A**, **B**>(`pred`: function, `x`: A, `list`: B[]): *boolean*

*Defined in [packages/common/source/includesWith.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/includesWith.ts#L1)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **pred**: *function*

▸ (`value`: A, `item`: B, `index`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |
`item` | B |
`index` | number |

▪ **x**: *A*

▪ **list**: *B[]*

**Returns:** *boolean*

___

###  indexOf

▸ **indexOf**(`list`: any, `a`: any, `idx`: number): *number*

*Defined in [packages/common/source/indexOf.ts:3](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/indexOf.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`list` | any | - |
`a` | any | - |
`idx` | number | 0 |

**Returns:** *number*

___

###  isFunction

▸ **isFunction**(`x`: any): *x is Function*

*Defined in [packages/common/source/is.ts:34](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/is.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is Function*

___

###  isMap

▸ **isMap**<**A**, **B**>(`x`: any): *x is Map<A, B>*

*Defined in [packages/common/source/is.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/is.ts#L1)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is Map<A, B>*

___

###  isSet

▸ **isSet**<**A**>(`x`: any): *x is Set<A>*

*Defined in [packages/common/source/is.ts:18](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/is.ts#L18)*

**Type parameters:**

▪ **A**

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *x is Set<A>*

___

### `Const` isString

▸ **isString**(`x`: any): *boolean*

*Defined in [packages/common/source/pathJoin.ts:4](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/pathJoin.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *boolean*

___

###  mapArrayLike

▸ **mapArrayLike**<**A**, **B**>(`fn`: function, `functor`: ArrayLike‹A›): *B[]*

*Defined in [packages/common/source/mapArrayLike.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/mapArrayLike.ts#L1)*

**Type parameters:**

▪ **A**

▪ **B**

**Parameters:**

▪ **fn**: *function*

▸ (`value`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`value` | A |

▪ **functor**: *ArrayLike‹A›*

**Returns:** *B[]*

___

###  mapObj

▸ **mapObj**<**A**, **B**, **C**>(`fn`: function, `obj`: C): *object*

*Defined in [packages/common/source/mapObj.ts:1](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/mapObj.ts#L1)*

**Type parameters:**

▪ **A**

▪ **B**

▪ **C**: *[Record](io.md#const-record)‹PropertyKey, A›*

**Parameters:**

▪ **fn**: *function*

▸ <**K**>(`key`: K, `value`: C[K]): *B*

**Type parameters:**

▪ **K**: *keyof C*

**Parameters:**

Name | Type |
------ | ------ |
`key` | K |
`value` | C[K] |

▪ **obj**: *C*

**Returns:** *object*

___

###  pathJoin

▸ **pathJoin**(`paths`: ReadonlyArray‹string | undefined | null | void | boolean›, `trailingSlash`: boolean): *string*

*Defined in [packages/common/source/pathJoin.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/pathJoin.ts#L11)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`paths` | ReadonlyArray‹string &#124; undefined &#124; null &#124; void &#124; boolean› | - | :: string[] A list of paths to join together |
`trailingSlash` | boolean | false | :: boolean whether or not to append a trailing slash  |

**Returns:** *string*

___

###  queryParam

▸ **queryParam**(`queryParams`: [Record](io.md#const-record)‹string, string | undefined›): *(Anonymous function)*

*Defined in [packages/common/source/addQueryParameters.ts:33](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/addQueryParameters.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`queryParams` | [Record](io.md#const-record)‹string, string &#124; undefined› |

**Returns:** *(Anonymous function)*

___

###  quote

▸ **quote**(`s`: string): *string*

*Defined in [packages/common/source/quote.ts:15](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/quote.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *string*

___

### `Const` toString

▸ **toString**(`x`: any): *string*

*Defined in [packages/common/source/toString.ts:11](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/toString.ts#L11)*

Convert anything into a string

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | any | :: any |

**Returns:** *string*

a string representation of a value

___

###  typeOf

▸ **typeOf**(`value`: string): *"String"*

*Defined in [packages/common/source/typeOf.ts:5](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/typeOf.ts#L5)*

Returns the type of a value.

**`name`** typeOf(value: any): string

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *"String"*

▸ **typeOf**(`value`: number): *"Number"*

*Defined in [packages/common/source/typeOf.ts:6](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/typeOf.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *"Number"*

▸ **typeOf**(`value`: null): *"Null"*

*Defined in [packages/common/source/typeOf.ts:7](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/typeOf.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | null |

**Returns:** *"Null"*

▸ **typeOf**(`value`: undefined): *"Undefined"*

*Defined in [packages/common/source/typeOf.ts:8](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/typeOf.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | undefined |

**Returns:** *"Undefined"*

▸ **typeOf**(`value`: undefined): *"Undefined"*

*Defined in [packages/common/source/typeOf.ts:9](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/typeOf.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | undefined |

**Returns:** *"Undefined"*

▸ **typeOf**(`value`: any): *string*

*Defined in [packages/common/source/typeOf.ts:10](https://github.com/TylorS/typed-prelude/blob/cf24d7c0/packages/common/source/typeOf.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *string*
